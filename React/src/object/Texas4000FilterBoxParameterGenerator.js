import {Tab} from '../components/FilterBox'

export class Texas4000FilterBoxParameterGenerator{

    //Have the "By Year" tab clicked when the page loads
    static generateInitialTab(){
        return new Tab('By Year', generateYearOptions);
    }
  
    //Have the "2004" and "2024" options clicked when the page loads
    static generateInitialClickedOptions(){
      let initialClickedOptions = {};
      initialClickedOptions['By Year'] = new Set(["2024"]);
      return initialClickedOptions;
    }

    //Havve a "By Year", "By Day", "By Calendar Date", and "By Route" tab
    static generateTabs(){
      let tabs = []
      tabs.push(new Tab('By Year', generateYearOptions));
      tabs.push(new Tab('By Day', generateDayOptions));
      tabs.push(new Tab('By Calendar Date', generateCalendarDateOptions));
      tabs.push(new Tab('By Route', generateRouteOptions));
      return tabs;
    }
    

}

//Function representing the options in the box that pops up when "By Year" is pressed
const generateYearOptions= ()=>{
    let yearOptions = [];
    for(let i = 2004; i <= 2019; i++) yearOptions.push(i.toString());
    //2020 did not ride
    for(let i = 2021; i <= 2024; i++) yearOptions.push(i.toString());
    return yearOptions;
  }
  
  //Function representing the options in the box that pops up when "By Day" is pressed
  const generateDayOptions = ()=>{
    let dayOptions = [];
    for(let i = 0; i <= 70; i++)dayOptions.push(i.toString());
    return dayOptions;
  }
  
  //Function representing the options in the box that pops up when "By Calendar Date" is pressed
  const generateCalendarDateOptions = ()=>{
    let dateOptions = [];
    for(let i = 27; i<= 31; i++) dateOptions.push('5/' + i.toString());
    for(let i = 1; i<= 30; i++) dateOptions.push('6/' + i.toString());
    for(let i = 1; i<= 31; i++) dateOptions.push('7/' + i.toString());
    for(let i = 1; i<= 15; i++) dateOptions.push('8/' + i.toString());
    return dateOptions;
  }
  
  //Function representing the options in the box that pops up when "By Calendar Date" is pressed
  const generateRouteOptions = ()=>['Ozarks', 'Rockies', 'Sierra', 'Smokies'];