import {DisplayInfo} from '../components/InfoBox'

export class Texas4000InfoBoxParameterGenerator{
    static generateAllDisplayInfo(){

        let displayInfo = [];
    
        let whatIsT4KBoxName = "WhatIsT4K";
        let whatIsT4KTitle = "What is Texas 4000?";
        let whatIsT4KInformation = "Texas 4000 is a non-profit organization that does an annual charity bike ride from Austin, TX to Anchorage, AK in honor of those affected by cancer. Throughout their journey, they engage with communities to raise cancer awareness and give grants to cancer research and support service organizations. More information can be found at Texas4000.org."
        displayInfo.push(new DisplayInfo(whatIsT4KBoxName, whatIsT4KTitle, whatIsT4KInformation))
    
        let whatIsThisSiteBoxName = "WhatIsThisSite";
        let whatIsThisSiteTitle = "What is this site?";
        let whatIsThisSiteInformation = "The purpose of this website is to display all the places that Texas 4000 has visited in its 20 years of existence. Click on the map markers to see information about when a location was visited and the riders who visited that location. By default, the map shows the places visited during the most current ride (2024), but another year can be displayed by pressing the corresponding button and deselecting 2024. The tabs below the map can be used to filter by year, by route, by day, or by calendar date.";
        displayInfo.push(new DisplayInfo(whatIsThisSiteBoxName, whatIsThisSiteTitle, whatIsThisSiteInformation))
    
        return displayInfo;
    }

}
