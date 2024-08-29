import {YearSymbol} from '../components/YearBox'

export class Texas4000YearBoxParameterGenerator{

    static generateYearSymbols(iconMatchMapper){

        let iconMatchMap = iconMatchMapper.getIconMatchMap();

        let yearSymbols = [];
    
        //Create a list of year symbols for years 2004-2024
        for(let i = 2004; i <= 2024; i++){
    
            //Texas 4000 did not ride across the country in 2020, so skip
            if(i == 2020) continue;
    
            let year = i.toString();
            let yearIndex = iconMatchMapper.getYearIndex([year]);
    
            //Texas 4000 did not have a Sierra route in 2023, so use the Rockies symbol in this case
            let routeIndex = (i != 2023) ? iconMatchMapper.getRouteIndex(['Sierra']) : iconMatchMapper.getRouteIndex(['Rockies']);
            
            yearSymbols.push(new YearSymbol(year, iconMatchMap[yearIndex][routeIndex].options.iconUrl));
        }
    
        //Also add year symbol representing multiple years to the list
        let year = "Multiple Years";
        let yearIndex = iconMatchMapper.getYearIndex(['2023', '2024']);
        let routeIndex = iconMatchMapper.getRouteIndex(['Sierra']);
        yearSymbols.push(new YearSymbol(year, iconMatchMap[yearIndex][routeIndex].options.iconUrl));
    
        return yearSymbols;
    
    }
}