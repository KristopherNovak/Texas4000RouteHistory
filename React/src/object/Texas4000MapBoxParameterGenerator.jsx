import {MarkerInfo, MapInfo} from '../components/MapBox'
import {PopUpText} from '../components/PopUpText'

export class Texas4000MapBoxParameterGenerator{

    static generateMapInfo(clickedOptions, entries, iconMatchMapper){
        let center = [43.002057291326, -104.05383946900544];
        let zoom = 4;
        let scrollWheelZoom = false;
        let allMarkerInfo = generateMarkers(clickedOptions, entries, iconMatchMapper);
        return new MapInfo(center, zoom, scrollWheelZoom, allMarkerInfo);
    }
    
}

//Function that generates markers to be included in Map Info
function generateMarkers(clickedOptions, entries, iconMatchMapper){

    //Get the properties that each entry should have based on the options the user clicked
    let requestedEntryProperties = getRequestedEntryProperties(clickedOptions);

    //Filter out the entries that match the requested entry properties
    let requestedEntries = entries.filter((entry) => matchesEntry(entry, requestedEntryProperties));

    //Create markers from the filtered entries with icons from the iconMatchMapper
    let markers = convertEntriesToMarkers(requestedEntries, iconMatchMapper);

    return markers;
}


//Function that converts clicked options to requested entry properties (particular routes, years, days, calendar dates, etc)
//If a property has a corresponding set in clicked options, it is assigned to that set
//Otherwise the property is given an empty set (done to prevent case where a property is null)
function getRequestedEntryProperties(clickedOptions){
  let requestedEntryProperties = new Map();
  requestedEntryProperties["By Route"] = Object.hasOwn(clickedOptions, 'By Route') ? clickedOptions['By Route'] : new Set();
  requestedEntryProperties["By Year"] = Object.hasOwn(clickedOptions, 'By Year') ? clickedOptions['By Year'] : new Set();
  requestedEntryProperties["By Day"] = Object.hasOwn(clickedOptions, 'By Day') ? clickedOptions['By Day'] : new Set();
  requestedEntryProperties["By Calendar Date"] = Object.hasOwn(clickedOptions, 'By Calendar Date') ? clickedOptions['By Calendar Date'] : new Set();
  return requestedEntryProperties;
}


//Function that determines if an entry matches to each entry property
//For example, Sierra 2017 Day 5, 6/7 matches if routeSet is empty or includes "Sierra", yearSet is empty or includes "2017", etc
//Empty sets are treated as automatic matches
const matchesEntry = (entry, requestedEntryProperties)=>{

  const routeSet = requestedEntryProperties["By Route"];
  const yearSet = requestedEntryProperties["By Year"];
  const daySet = requestedEntryProperties["By Day"];
  const calendarDateSet = requestedEntryProperties["By Calendar Date"];

  if(routeSet.size != 0 && !routeSet.has(entry.route)) return false;
  if(daySet.size != 0 && !daySet.has(entry.day)) return false;
  if(calendarDateSet.size != 0 && !calendarDateSet.has(entry.calendarDate)) return false;
  if(yearSet.size != 0 && !yearSet.has(entry.year)) return false;
  return true;
}

  //Function that converts a list of entries into a list of markers
  //Each entry represents one day of the ride for a particular route
  //Rockies 2016 Day 1, Rockies 2016 Day 3, Sierra 2016 Day 1, Rockies 2017 Day 1 would all have separate entries
  function convertEntriesToMarkers(entries, iconMatchMapper){
  
    let cityMap = groupEntriesByCity(entries);
  
    for(const city in cityMap){
      cityMap[city] = consolidateSameRouteMultipleDayEntries(cityMap[city]);
    }
  
    for(const city in cityMap){
      cityMap[city] = consolidateMultipleRoutesSameDayEntries(cityMap[city]);
    }
  
    let markers = [];
    for(const city in cityMap) markers.push(createMarker(city, cityMap[city], iconMatchMapper));
  
    return markers;
  
  }

//Sort the entries into the respective cities their associated with
//Example: A first entry associated with Sierra 2017 visiting Portland and a second entry associated with Sierra 2018
//is sorted into cityMap["Portland,OR"]
function groupEntriesByCity(entries){
  let cityMap = new Map();
  for(let i = 0; i < entries.length; i++){
    if(cityMap[entries[i].destination] != undefined) cityMap[entries[i].destination].push(entries[i]);
    else cityMap[entries[i].destination] = [entries[i]];
  }
  return cityMap;

}

//Create a marker for the given city, where the popup text includes each of the entries and the icon
//is selected from the icon mapper
function createMarker(city, entries, iconMatchMapper){
  let id = entries[0].route + entries[0].day + entries[0].year;
  let latitude = entries[0].latitude;
  let longitude = entries[0].longitude;
  let popUpHTML = ()=><PopUpText city={city} entries={entries}/>
  let icon = getIconForCity(entries, iconMatchMapper);

  return new MarkerInfo(id, latitude, longitude, icon, popUpHTML);
}

//Consolidate entries where the same city is visited by the same route on multiple days of a particular year
//For instance, a first entry where the Sierra route visited Portland on 6/2 and a second entry where Sierra route
//stayed in Portland on 6/3 would be consolidated into one entry corresponding to 6/2-6/3
function consolidateSameRouteMultipleDayEntries(entries){

  let yearRouteMap = groupEntriesByYearAndRoute(entries);

  let newEntryList = [];
  for(const uniqueYearRouteCombo in yearRouteMap){

    let entriesWithMatchingYearAndRoute = yearRouteMap[uniqueYearRouteCombo];

    //Create a new entry
    let oldEntry = entriesWithMatchingYearAndRoute[0];
    let newEntry = {...oldEntry}

    //Consolidate the dates and calendar dates into one entry
    newEntry.day = consolidateDays(entriesWithMatchingYearAndRoute);
    newEntry.calendarDate = consolidateCalendarDates(entriesWithMatchingYearAndRoute);

    newEntryList.push(newEntry);
  }
  return newEntryList;
}

function groupEntriesByYearAndRoute(entries){

  let yearAndRouteMap = new Map();
  for(const entry of entries){
    if(yearAndRouteMap[entry.year + entry.route] != undefined) yearAndRouteMap[entry.year + entry.route].push(entry);
    else yearAndRouteMap[entry.year + entry.route] = [entry];
  }

  return yearAndRouteMap;
}

function consolidateDays(entries){
  if(entries.length == 0) return "";
  if(entries.length == 1) return entries[0].day;

  let days = entries[0].day;

  if(daysAreConsecutive(entries)){
    days += '-' + getLatestDay(entries);
    return days;
  }

  for(let i = 1; i < entries.length; i++){
      days += ', ' + entries[i].day;
  }
  return days;
}

function daysAreConsecutive(entries){
  let days = entries.map((entry)=>entry.day);
  days.sort();

  for(let i = 0; i < days.length-1; i++){
    let firstDay = parseInt(days[i]);
    let secondDay = parseInt(days[i+1]);
    if(secondDay-firstDay != 1) return false;
  }
  return true;
}

function getLatestDay(entries){
  let days = entries.map((entry)=>entry.day);
  days.sort();
  return days[days.length-1];
}

function consolidateCalendarDates(entries){
  if(entries.length == 0) return "";
  if(entries.length == 1) return entries[0].calendarDate;

  let calendarDates = entries[0].calendarDate;

  if(calendarDatesAreConsecutive(entries)){
    calendarDates += '-' + getLatestCalendarDate(entries);
    return calendarDates;
  } 
  
  for(let i = 1; i < entries.length; i++){
    calendarDates += ', ' + entries[i].calendarDate;
  }

  return calendarDates;
}

function calendarDatesAreConsecutive(entries){
  let calendarDates = entries.map((entry)=>entry.calendarDate);
  calendarDates.sort();

  for(let i = 0; i < calendarDates.length-1; i++){
    let firstDate = calendarDates[i].split("/");
    let secondDate = calendarDates[i+1].split("/");

    let firstMonth = parseInt(firstDate[0]);
    let secondMonth = parseInt(secondDate[0]);

    let firstDay = parseInt(firstDate[1]);
    let secondDay = parseInt(secondDate[1]);

    if(secondDay-firstDay === 1 && firstMonth === secondMonth) continue;
    if(firstDate==="5/31" && secondDate==="6/1") continue;
    if(firstDate==="6/30" && secondDate==="7/1") continue;
    if(firstDate==="7/31" && secondDate==="8/1") continue;
    return false;
  }
  return true;
}

function getLatestCalendarDate(entries){
  let calendarDates = entries.map((entry)=>entry.calendarDate);
  calendarDates.sort();
  return calendarDates[calendarDates.length-1];
}

//Consolidate entries where the same city is visited by multiple routes on the same day of a particular year
//For instance, a first entry where the Sierra 2017 route visited Anchorage on 8/10 and a second entry where the Rockies 2017 route
//visited Anchorage on 8/10 would be consolidate into one entry corresponding to Sierra & Rockies
function consolidateMultipleRoutesSameDayEntries(entries){
  let yearDayMap = groupEntriesByYearAndDay(entries);
  let newEntryList = [];

  //Sort the year days to ensure entries are in order of year after being pushed to new entry list
  let yearDays = [];
  for(const uniqueYearDayCombo in yearDayMap) yearDays.push(uniqueYearDayCombo);
  yearDays.sort();

  for(const uniqueYearDayCombo of yearDays){

    let entriesWithMatchingYearAndDay = yearDayMap[uniqueYearDayCombo];

    let oldEntry = entriesWithMatchingYearAndDay[0];
    let newEntry = {...oldEntry}

    newEntry.route = consolidateRoutes(entriesWithMatchingYearAndDay);
    newEntryList.push(newEntry);
  }

  return newEntryList;

}

function groupEntriesByYearAndDay(entries){

  let yearAndDayMap = new Map();
  for(const entry of entries){
    if(yearAndDayMap[entry.year+entry.day] != undefined) yearAndDayMap[entry.year+entry.day].push(entry);
    else yearAndDayMap[entry.year+entry.day] = [entry];
  }

  return yearAndDayMap;
}

function consolidateRoutes(entries){
  if(entries.length == 0) return "";
  if(entries.length == 1) return entries[0].route;

  let routes = entries[0].route;

  for(let i = 1; i < entries.length; i++){
      routes += ', ' + entries[i].route;
  }

  return routes;
}


//Function used to map a corresponding location Texas 4000 biked to to an icon
//Example: if Rockies 2004 and Sierra 2018 both biked to Watson Lake, YT, then this function would
//return a two-route icon (Rockies & Sierra) that represents multiple years
function getIconForCity(entries, iconMatchMapper){

    let iconMatchMap = iconMatchMapper.getIconMatchMap();
  
    //First determine whether the city was visited only once or multiple times
    let yearList = entries.map((entry)=>entry.year);
    let yearIndex = iconMatchMapper.getYearIndex(yearList);
  
  
    //Next, determine what routes visited the city
    //let routeList = entries.map((entry)=>entry.route);
    let routeList = getListOfAllReferencedRoutes(entries);
    let routeIndex = iconMatchMapper.getRouteIndex(routeList);
  
    //Return the icon corresponding to the given year and route
    return iconMatchMap[yearIndex][routeIndex];
  
}

//Function to get all referenced routes in a list (including entries that refer to multiple routes)
function getListOfAllReferencedRoutes(entries){
  let routeList = [];
  for(let entry of entries){
    let routes = entry.route.split(', ');
    for(let route of routes){
      routeList.push(route);
    }
  }
  return routeList;
}