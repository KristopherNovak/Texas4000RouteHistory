import {RouteSymbol} from '../components/RouteBox'

export class Texas4000RouteBoxParameterGenerator{
    static generateRouteSymbols(){
        let routeSymbols = [];
        routeSymbols.push(new RouteSymbol("Ozarks", "../img/Ozarks.png", "Ozarks Route"));
        routeSymbols.push(new RouteSymbol("Sierra", "../img/Sierra.png", "Sierra Route"));
        routeSymbols.push(new RouteSymbol("Smokies", "../img/Smokies.png", "Smokies Route"));
        routeSymbols.push(new RouteSymbol("Rockies", "../img/Rockies.png", "Rockies Route"));
        routeSymbols.push(new RouteSymbol("Two Routes", "../img/RockiesSierra.png", "Two Routes (Example)"));
        routeSymbols.push(new RouteSymbol("Three Routes", "../img/RockiesSierraOzarks.png", "Three Routes (Example)"));
        routeSymbols.push(new RouteSymbol("Four Routes", "../img/RockiesSierraOzarksSmokies.png", "All Routes"));
        return routeSymbols;
    }
}