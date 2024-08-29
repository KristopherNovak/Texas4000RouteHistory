import {Icon} from 'leaflet'

export class Texas4000IconMatchMapper{
  constructor(){
    this.iconMatchMap = generateIconMatchMap();
  }

  getIconMatchMap(){
    return this.iconMatchMap;
  }

  static getNewIconMatchMapper(){
    return new Texas4000IconMatchMapper();
  }

  //Rockies is represented as 1, Sierra as 2, Ozarks as 4, and Smokies as 8
  //For each route that visited the city, add their number together to determine the index of the icon to retrieve
  //For instance, if Rockies, Sierra, and Smokies visited a city, the index would be 1 + 2 + 8 = 11.
  getRouteIndex(routes){

    let routeSet = new Set(routes);

    let routeIndex=0;
    if(routeSet.has("Rockies")) routeIndex+=1;
    if(routeSet.has("Sierra")) routeIndex+=2;
    if(routeSet.has("Ozarks")) routeIndex+=4;
    if(routeSet.has("Smokies")) routeIndex+=8;

    return routeIndex;

  }

  //If visited once, then put the yearIndex as the year it was visited
  //If visited multiple times, then put the yearIndex as "multiple"
  getYearIndex(years){
    let yearSet = new Set(years);
    if(yearSet.size == 1) return years[0];
    else return 'multiple';
  }

}




//Below are the functions used to generate the map icons for respective route combinations and respective years
function generateIcon(imageURL){
    return new Icon ({
      iconUrl : imageURL,
      iconSize : [15,15],
      iconAnchor : [7.5,7.5],
      popupAnchor : [0, 0]
    })
  }

  function generateIconMatchMap(){
    //Symbols used for multiple years
    const RockiesIcon = generateIcon('../img/RainbowRockies.png');
    const OzarksIcon = generateIcon('../img/RainbowOzarks.png');
    const SierraIcon = generateIcon('../img/RainbowSierra.png');
    const SmokiesIcon = generateIcon('../img/RainbowSmokies.png');
    const RockiesOzarksIcon = generateIcon('../img/RainbowRockiesOzarks.png');
    const RockiesSmokiesIcon = generateIcon('../img/RainbowRockiesSmokies.png');
    const SierraOzarksIcon = generateIcon('../img/RainbowSierraOzarks.png');
    const OzarksSmokiesIcon = generateIcon('../img/RainbowOzarksSmokies.png');
    const RockiesSierraIcon = generateIcon('../img/RainbowRockiesSierra.png');
    const SierraSmokiesIcon = generateIcon('../img/RainbowSierraSmokies.png');
    const RockiesSierraOzarksIcon = generateIcon('../img/RainbowRockiesSierraOzarks.png');
    const RockiesOzarksSmokiesIcon = generateIcon('../img/RainbowRockiesOzarksSmokies.png');
    const SierraOzarksSmokiesIcon = generateIcon('../img/RainbowSierraOzarksSmokies.png');
    const RockiesSierraSmokiesIcon = generateIcon('../img/RainbowRockiesSierraSmokies.png');
    const RockiesSierraOzarksSmokiesIcon = generateIcon('../img/RainbowRockiesSierraOzarksSmokies.png');
    
    //2004 symbols
    const RockiesIcon2004 = generateIcon('../img/BBRockies.png');
    const SierraIcon2004 = generateIcon('../img/BBSierra.png');
    const RockiesSierraIcon2004 = generateIcon('../img/BBRockiesSierra.png');
    
    //2005 symbols
    const RockiesIcon2005 = generateIcon('../img/GPRockies.png');
    const SierraIcon2005 = generateIcon('../img/GPSierra.png');
    const RockiesSierraIcon2005 = generateIcon('../img/GPRockiesSierra.png');
    
    //2006 symbols
    const RockiesIcon2006 = generateIcon('../img/BRRockies.png');
    const SierraIcon2006 = generateIcon('../img/BRSierra.png');
    const RockiesSierraIcon2006 = generateIcon('../img/BRRockiesSierra.png');
    
    //2007 symbols
    const RockiesIcon2007 = generateIcon('../img/BNRockies.png');
    const SierraIcon2007 = generateIcon('../img/BNSierra.png');
    const RockiesSierraIcon2007 = generateIcon('../img/BNRockiesSierra.png');
    
    //2008 symbols
    const RockiesIcon2008 = generateIcon('../img/RBRockies.png');
    const SierraIcon2008 = generateIcon('../img/RBSierra.png');
    const RockiesSierraIcon2008 = generateIcon('../img/RBRockiesSierra.png');
    
    //2009 symbols
    const RockiesIcon2009 = generateIcon('../img/GORockies.png');
    const SierraIcon2009 = generateIcon('../img/GOSierra.png');
    const RockiesSierraIcon2009 = generateIcon('../img/GORockiesSierra.png');
    
    //2010 symbols
    const RockiesIcon2010 = generateIcon('../img/YBRockies.png');
    const SierraIcon2010 = generateIcon('../img/YBSierra.png');
    const RockiesSierraIcon2010 = generateIcon('../img/YBRockiesSierra.png');
    
    //2011 symbols
    const RockiesIcon2011 = generateIcon('../img/PORockies.png');
    const SierraIcon2011 = generateIcon('../img/POSierra.png');
    const RockiesSierraIcon2011 = generateIcon('../img/PORockiesSierra.png');
    
    //2012 symbols
    const RockiesIcon2012 = generateIcon('../img/GBRockies.png');
    const SierraIcon2012 = generateIcon('../img/GBSierra.png');
    const RockiesSierraIcon2012 = generateIcon('../img/GBRockiesSierra.png');
    
    //2013 symbols
    const RockiesIcon2013 = generateIcon('../img/BGRockies.png');
    const SierraIcon2013 = generateIcon('../img/BGSierra.png');
    const OzarksIcon2013 = generateIcon('../img/BGOzarks.png');
    const RockiesOzarksIcon2013 = generateIcon('../img/BGRockiesOzarks.png');
    const RockiesSierraIcon2013 = generateIcon('../img/BGRockiesSierra.png');
    const SierraOzarksIcon2013 = generateIcon('../img/BGSierraOzarks.png');
    const RockiesSierraOzarksIcon2013 = generateIcon('../img/BGRockiesSierraOzarks.png');
    
    //2014 symbols
    const RockiesIcon2014 = generateIcon('../img/OBRockies.png');
    const SierraIcon2014 = generateIcon('../img/OBSierra.png');
    const OzarksIcon2014 = generateIcon('../img/OBOzarks.png');
    const RockiesOzarksIcon2014 = generateIcon('../img/OBRockiesOzarks.png');
    const RockiesSierraIcon2014 = generateIcon('../img/OBRockiesSierra.png');
    const SierraOzarksIcon2014 = generateIcon('../img/OBSierraOzarks.png');
    const RockiesSierraOzarksIcon2014 = generateIcon('../img/OBRockiesSierraOzarks.png');
    
    //2015 symbols
    const RockiesIcon2015 = generateIcon('../img/BYRockies.png');
    const SierraIcon2015 = generateIcon('../img/BYSierra.png');
    const OzarksIcon2015 = generateIcon('../img/BYOzarks.png');
    const RockiesOzarksIcon2015 = generateIcon('../img/BYRockiesOzarks.png');
    const RockiesSierraIcon2015 = generateIcon('../img/BYRockiesSierra.png');
    const SierraOzarksIcon2015 = generateIcon('../img/BYSierraOzarks.png');
    const RockiesSierraOzarksIcon2015 = generateIcon('../img/BYRockiesSierraOzarks.png');
    
    //2016 symbols
    const RockiesIcon2016 = generateIcon('../img/BPRockies.png');
    const SierraIcon2016 = generateIcon('../img/BPSierra.png');
    const OzarksIcon2016 = generateIcon('../img/BPOzarks.png');
    const RockiesOzarksIcon2016 = generateIcon('../img/BPRockiesOzarks.png');
    const RockiesSierraIcon2016 = generateIcon('../img/BPRockiesSierra.png');
    const SierraOzarksIcon2016 = generateIcon('../img/BPSierraOzarks.png');
    const RockiesSierraOzarksIcon2016 = generateIcon('../img/BPRockiesSierraOzarks.png');
    
    //2017 symbols
    const RockiesIcon2017 = generateIcon('../img/BCRockies.png');
    const SierraIcon2017 = generateIcon('../img/BCSierra.png');
    const OzarksIcon2017 = generateIcon('../img/BCOzarks.png');
    const RockiesOzarksIcon2017 = generateIcon('../img/BCRockiesOzarks.png');
    const RockiesSierraIcon2017 = generateIcon('../img/BCRockiesSierra.png');
    const SierraOzarksIcon2017 = generateIcon('../img/BCSierraOzarks.png');
    const RockiesSierraOzarksIcon2017 = generateIcon('../img/BCRockiesSierraOzarks.png');
    
    //2018 symbols
    const RockiesIcon2018 = generateIcon('../img/PBRockies.png');
    const SierraIcon2018 = generateIcon('../img/PBSierra.png');
    const OzarksIcon2018 = generateIcon('../img/PBOzarks.png');
    const RockiesOzarksIcon2018 = generateIcon('../img/PBRockiesOzarks.png');
    const RockiesSierraIcon2018 = generateIcon('../img/PBRockiesSierra.png');
    const SierraOzarksIcon2018 = generateIcon('../img/PBSierraOzarks.png');
    const RockiesSierraOzarksIcon2018 = generateIcon('../img/PBRockiesSierraOzarks.png');
    
    //2019 symbols
    const RockiesIcon2019 = generateIcon('../img/PPRockies.png');
    const SierraIcon2019 = generateIcon('../img/PPSierra.png');
    const OzarksIcon2019 = generateIcon('../img/PPOzarks.png');
    const RockiesOzarksIcon2019 = generateIcon('../img/PPRockiesOzarks.png');
    const RockiesSierraIcon2019 = generateIcon('../img/PPRockiesSierra.png');
    const SierraOzarksIcon2019 = generateIcon('../img/PPSierraOzarks.png');
    const RockiesSierraOzarksIcon2019 = generateIcon('../img/PPRockiesSierraOzarks.png');
    
    //2020 did not ride
    
    //2021 symbols
    const RockiesIcon2021 = generateIcon('../img/PGRockies.png');
    const OzarksIcon2021 = generateIcon('../img/PGOzarks.png');
    const SierraIcon2021 = generateIcon('../img/PGSierra.png');
    const SmokiesIcon2021 = generateIcon('../img/PGSmokies.png');
    const RockiesOzarksIcon2021 = generateIcon('../img/PGRockiesOzarks.png');
    const RockiesSmokiesIcon2021 = generateIcon('../img/PGRockiesSmokies.png');
    const SierraOzarksIcon2021 = generateIcon('../img/PGSierraOzarks.png');
    const OzarksSmokiesIcon2021 = generateIcon('../img/PGOzarksSmokies.png');
    const RockiesSierraIcon2021 = generateIcon('../img/PGRockiesSierra.png');
    const SierraSmokiesIcon2021 = generateIcon('../img/PGSierraSmokies.png');
    const RockiesSierraOzarksIcon2021 = generateIcon('../img/PGRockiesSierraOzarks.png');
    const RockiesOzarksSmokiesIcon2021 = generateIcon('../img/PGRockiesOzarksSmokies.png');
    const SierraOzarksSmokiesIcon2021 = generateIcon('../img/PGSierraOzarksSmokies.png');
    const RockiesSierraSmokiesIcon2021 = generateIcon('../img/PGRockiesSierraSmokies.png');
    const RockiesSierraOzarksSmokiesIcon2021 = generateIcon('../img/PGRockiesSierraOzarksSmokies.png');
    
    //2022 symbols
    const SierraIcon2022 = generateIcon('../img/RYSierra.png');
    const OzarksIcon2022 = generateIcon('../img/RYOzarks.png');
    const SierraOzarksIcon2022 = generateIcon('../img/RYSierraOzarks.png');
    
    //2023 symbols
    const RockiesIcon2023 = generateIcon('../img/CBRockies.png');
    const OzarksIcon2023 = generateIcon('../img/CBOzarks.png');
    const RockiesOzarksIcon2023 = generateIcon('../img/CBRockiesOzarks.png');
    
    //2024 symbols
    const RockiesIcon2024 = generateIcon('../img/GRRockies.png');
    const SierraIcon2024 = generateIcon('../img/GRSierra.png');
    const OzarksIcon2024 = generateIcon('../img/GROzarks.png');
    const RockiesOzarksIcon2024 = generateIcon('../img/GRRockiesOzarks.png');
    const RockiesSierraIcon2024 = generateIcon('../img/GRRockiesSierra.png');
    const SierraOzarksIcon2024 = generateIcon('../img/GRSierraOzarks.png');
    const RockiesSierraOzarksIcon2024 = generateIcon('../img/GRRockiesSierraOzarks.png');
    
    //Map that is used to determine which symbol to use to represent a particular marker
    //For instance, Rockies is given a value of 1, Sierra is given a value of 2, Ozarks is given a value of 4 and
    //Smokies is given a value of 8. If Rockies and Ozarks are at the same location, then the value is 1+4 = 5.
    const iconMatchMap = new Map();
    iconMatchMap['multiple'] = new Map();
    iconMatchMap['multiple'][1] = RockiesIcon;
    iconMatchMap['multiple'][2] = SierraIcon;
    iconMatchMap['multiple'][3] = RockiesSierraIcon;
    iconMatchMap['multiple'][4] = OzarksIcon;
    iconMatchMap['multiple'][5] = RockiesOzarksIcon;
    iconMatchMap['multiple'][6] = SierraOzarksIcon;
    iconMatchMap['multiple'][7] = RockiesSierraOzarksIcon
    iconMatchMap['multiple'][8] = SmokiesIcon;
    iconMatchMap['multiple'][9] = RockiesSmokiesIcon;
    iconMatchMap['multiple'][10] = SierraSmokiesIcon;
    iconMatchMap['multiple'][11] = RockiesSierraSmokiesIcon;
    iconMatchMap['multiple'][12] = OzarksSmokiesIcon;
    iconMatchMap['multiple'][13] = RockiesOzarksSmokiesIcon;
    iconMatchMap['multiple'][14] = SierraOzarksSmokiesIcon;
    iconMatchMap['multiple'][15] = RockiesSierraOzarksSmokiesIcon;
    iconMatchMap['2004'] = new Map();
    iconMatchMap['2004'][1] = RockiesIcon2004;
    iconMatchMap['2004'][2] = SierraIcon2004;
    iconMatchMap['2004'][3] = RockiesSierraIcon2004;
    iconMatchMap['2005'] = new Map();
    iconMatchMap['2005'][1] = RockiesIcon2005;
    iconMatchMap['2005'][2] = SierraIcon2005;
    iconMatchMap['2005'][3] = RockiesSierraIcon2005;
    iconMatchMap['2006'] = new Map();
    iconMatchMap['2006'][1] = RockiesIcon2006;
    iconMatchMap['2006'][2] = SierraIcon2006;
    iconMatchMap['2006'][3] = RockiesSierraIcon2006;
    iconMatchMap['2007'] = new Map();
    iconMatchMap['2007'][1] = RockiesIcon2007;
    iconMatchMap['2007'][2] = SierraIcon2007;
    iconMatchMap['2007'][3] = RockiesSierraIcon2007;
    iconMatchMap['2008'] = new Map();
    iconMatchMap['2008'][1] = RockiesIcon2008;
    iconMatchMap['2008'][2] = SierraIcon2008;
    iconMatchMap['2008'][3] = RockiesSierraIcon2008;
    iconMatchMap['2009'] = new Map();
    iconMatchMap['2009'][1] = RockiesIcon2009;
    iconMatchMap['2009'][2] = SierraIcon2009;
    iconMatchMap['2009'][3] = RockiesSierraIcon2009;
    iconMatchMap['2010'] = new Map();
    iconMatchMap['2010'][1] = RockiesIcon2010;
    iconMatchMap['2010'][2] = SierraIcon2010;
    iconMatchMap['2010'][3] = RockiesSierraIcon2010;
    iconMatchMap['2011'] = new Map();
    iconMatchMap['2011'][1] = RockiesIcon2011;
    iconMatchMap['2011'][2] = SierraIcon2011;
    iconMatchMap['2011'][3] = RockiesSierraIcon2011;
    iconMatchMap['2012'] = new Map();
    iconMatchMap['2012'][1] = RockiesIcon2012;
    iconMatchMap['2012'][2] = SierraIcon2012;
    iconMatchMap['2012'][3] = RockiesSierraIcon2012;
    iconMatchMap['2013'] = new Map();
    iconMatchMap['2013'][1] = RockiesIcon2013;
    iconMatchMap['2013'][2] = SierraIcon2013;
    iconMatchMap['2013'][3] = RockiesSierraIcon2013;
    iconMatchMap['2013'][4] = OzarksIcon2013;
    iconMatchMap['2013'][5] = RockiesOzarksIcon2013;
    iconMatchMap['2013'][6] = SierraOzarksIcon2013;
    iconMatchMap['2013'][7] = RockiesSierraOzarksIcon2013;
    iconMatchMap['2014'] = new Map();
    iconMatchMap['2014'][1] = RockiesIcon2014;
    iconMatchMap['2014'][2] = SierraIcon2014;
    iconMatchMap['2014'][3] = RockiesSierraIcon2014;
    iconMatchMap['2014'][4] = OzarksIcon2014;
    iconMatchMap['2014'][5] = RockiesOzarksIcon2014;
    iconMatchMap['2014'][6] = SierraOzarksIcon2014;
    iconMatchMap['2014'][7] = RockiesSierraOzarksIcon2014;
    iconMatchMap['2015'] = new Map();
    iconMatchMap['2015'][1] = RockiesIcon2015;
    iconMatchMap['2015'][2] = SierraIcon2015;
    iconMatchMap['2015'][3] = RockiesSierraIcon2015;
    iconMatchMap['2015'][4] = OzarksIcon2015;
    iconMatchMap['2015'][5] = RockiesOzarksIcon2015;
    iconMatchMap['2015'][6] = SierraOzarksIcon2015;
    iconMatchMap['2015'][7] = RockiesSierraOzarksIcon2015;
    iconMatchMap['2016'] = new Map();
    iconMatchMap['2016'][1] = RockiesIcon2016;
    iconMatchMap['2016'][2] = SierraIcon2016;
    iconMatchMap['2016'][3] = RockiesSierraIcon2016;
    iconMatchMap['2016'][4] = OzarksIcon2016;
    iconMatchMap['2016'][5] = RockiesOzarksIcon2016;
    iconMatchMap['2016'][6] = SierraOzarksIcon2016;
    iconMatchMap['2016'][7] = RockiesSierraOzarksIcon2016;
    iconMatchMap['2017'] = new Map();
    iconMatchMap['2017'][1] = RockiesIcon2017;
    iconMatchMap['2017'][2] = SierraIcon2017;
    iconMatchMap['2017'][3] = RockiesSierraIcon2017;
    iconMatchMap['2017'][4] = OzarksIcon2017;
    iconMatchMap['2017'][5] = RockiesOzarksIcon2017;
    iconMatchMap['2017'][6] = SierraOzarksIcon2017;
    iconMatchMap['2017'][7] = RockiesSierraOzarksIcon2017;
    iconMatchMap['2018'] = new Map();
    iconMatchMap['2018'][1] = RockiesIcon2018;
    iconMatchMap['2018'][2] = SierraIcon2018;
    iconMatchMap['2018'][3] = RockiesSierraIcon2018;
    iconMatchMap['2018'][4] = OzarksIcon2018;
    iconMatchMap['2018'][5] = RockiesOzarksIcon2018;
    iconMatchMap['2018'][6] = SierraOzarksIcon2018;
    iconMatchMap['2018'][7] = RockiesSierraOzarksIcon2018;
    iconMatchMap['2019'] = new Map();
    iconMatchMap['2019'][1] = RockiesIcon2019;
    iconMatchMap['2019'][2] = SierraIcon2019;
    iconMatchMap['2019'][3] = RockiesSierraIcon2019;
    iconMatchMap['2019'][4] = OzarksIcon2019;
    iconMatchMap['2019'][5] = RockiesOzarksIcon2019;
    iconMatchMap['2019'][6] = SierraOzarksIcon2019;
    iconMatchMap['2019'][7] = RockiesSierraOzarksIcon2019;
    iconMatchMap['2021'] = new Map();
    iconMatchMap['2021'][1] = RockiesIcon2021;
    iconMatchMap['2021'][2] = SierraIcon2021;
    iconMatchMap['2021'][3] = RockiesSierraIcon2021;
    iconMatchMap['2021'][4] = OzarksIcon2021;
    iconMatchMap['2021'][5] = RockiesOzarksIcon2021;
    iconMatchMap['2021'][6] = SierraOzarksIcon2021;
    iconMatchMap['2021'][7] = RockiesSierraOzarksIcon2021;
    iconMatchMap['2021'][8] = SmokiesIcon2021;
    iconMatchMap['2021'][9] = RockiesSmokiesIcon2021;
    iconMatchMap['2021'][10] = SierraSmokiesIcon2021;
    iconMatchMap['2021'][11] = RockiesSierraSmokiesIcon2021;
    iconMatchMap['2021'][12] = OzarksSmokiesIcon2021;
    iconMatchMap['2021'][13] = RockiesOzarksSmokiesIcon2021;
    iconMatchMap['2021'][14] = SierraOzarksSmokiesIcon2021;
    iconMatchMap['2021'][15] = RockiesSierraOzarksSmokiesIcon2021;
    iconMatchMap['2022'] = new Map();
    iconMatchMap['2022'][2] = SierraIcon2022;
    iconMatchMap['2022'][4] = OzarksIcon2022;
    iconMatchMap['2022'][6] = SierraOzarksIcon2022;
    iconMatchMap['2023'] = new Map();
    iconMatchMap['2023'][1] = RockiesIcon2023;
    iconMatchMap['2023'][4] = OzarksIcon2023;
    iconMatchMap['2023'][5] = RockiesOzarksIcon2023;
    iconMatchMap['2024'] = new Map();
    iconMatchMap['2024'][1] = RockiesIcon2024;
    iconMatchMap['2024'][2] = SierraIcon2024;
    iconMatchMap['2024'][3] = RockiesSierraIcon2024;
    iconMatchMap['2024'][4] = OzarksIcon2024;
    iconMatchMap['2024'][5] = RockiesOzarksIcon2024;
    iconMatchMap['2024'][6] = SierraOzarksIcon2024;
    iconMatchMap['2024'][7] = RockiesSierraOzarksIcon2024;

    return iconMatchMap;

  }
