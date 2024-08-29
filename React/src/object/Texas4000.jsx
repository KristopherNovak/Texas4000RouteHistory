import {Texas4000IconMatchMapper} from './Texas4000IconMatchMapper'
import {gql, useQuery} from '@apollo/client'
import {Texas4000FilterBoxParameterGenerator} from './Texas4000FilterBoxParameterGenerator'
import {Texas4000MapBoxParameterGenerator} from './Texas4000MapBoxParameterGenerator'
import {Texas4000InfoBoxParameterGenerator} from './Texas4000InfoBoxParameterGenerator'
import {Texas4000RouteBoxParameterGenerator} from './Texas4000RouteBoxParameterGenerator'
import {Texas4000YearBoxParameterGenerator} from './Texas4000YearBoxParameterGenerator'


const iconMatchMapper = Texas4000IconMatchMapper.getNewIconMatchMapper();

//GraphQL query for receiving Texas 4000 entries
const TEXAS_4000_ENTRIES= gql`
query Texas4000EntriesQuery($routes : [String], $years: [String], $days: [String], $calendarDates: [String]) {
  entries(routes : $routes, years: $years, days: $days, calendarDates: $calendarDates){
    year, day, route, calendarDate, destination, longitude, latitude
  }
}
`

export class Texas4000{

    constructor(){
        this.title = "Texas 4000 Route History";
        this.tabs = Texas4000FilterBoxParameterGenerator.generateTabs();
        this.initialClickedOptions = Texas4000FilterBoxParameterGenerator.generateInitialClickedOptions();
        this.initialTab = Texas4000FilterBoxParameterGenerator.generateInitialTab();
        this.allDisplayInfo = Texas4000InfoBoxParameterGenerator.generateAllDisplayInfo();
        this.routeSymbols = Texas4000RouteBoxParameterGenerator.generateRouteSymbols();
        this.yearSymbols = Texas4000YearBoxParameterGenerator.generateYearSymbols(iconMatchMapper);
    }

    getTitle(){return "Texas 4000 Route History";}

    getInitialClickedOptions(){return this.initialClickedOptions;}

    getInitialTab(){return this.initialTab;}

    getTabs(){return this.tabs;}

    getAllDisplayInfo(){return this.allDisplayInfo}

    getRouteSymbols(){return this.routeSymbols}

    getYearSymbols(){return this.yearSymbols}

    getMapInfo(clickedOptions){

        //Get all Texas 4000 entries via graphQL
        let queryResult = useQuery(TEXAS_4000_ENTRIES, {
            variables: {routes: [], years: [], days: [], calendarDates: []}
          });

        //If the query result is returned successfully, then get the corresponding map info using the received entries
        //Otherwise, get corresponding map info with an empty list
        if(queryResult && queryResult.data){
            return Texas4000MapBoxParameterGenerator.generateMapInfo(clickedOptions, queryResult.data.entries, iconMatchMapper);
        }else return Texas4000MapBoxParameterGenerator.generateMapInfo(clickedOptions, [], iconMatchMapper);
    }

}