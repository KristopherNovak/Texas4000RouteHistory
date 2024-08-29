import { useState, useEffect} from 'react'
import './App.css'
import TitleBox from './components/TitleBox'
import InfoBox from './components/InfoBox'
import {MapBox} from './components/MapBox'
import {FilterBox} from './components/FilterBox'
import {YearBox} from './components/YearBox'
import {RouteBox} from './components/RouteBox'
import{Texas4000} from './object/Texas4000'

const texas4000 = new Texas4000();

function App() {

  //Set up the state indicating which tab is being clicked (E.g., Initially the "By Year" tab is clicked)
  const [_currentTab, updateCurrentTab] = useState(texas4000.getInitialTab());
  let currentTab = {value: _currentTab, update: updateCurrentTab};

  //Set up the state keeping track of which filter options are being clicked (e.g., Initially "2004" and "2024" are clicked)
  const [_clickedOptions, updateClickedOptions] = useState(texas4000.getInitialClickedOptions());
  let clickedOptions = {value: _clickedOptions, update: updateClickedOptions};

  return (
    <>
      <TitleBox text={texas4000.getTitle()} />
      {texas4000.getAllDisplayInfo().map((displayInfo)=><InfoBox key={displayInfo.boxName} displayInfo={displayInfo} />)}
      <RouteBox routeSymbols = {texas4000.getRouteSymbols()}/>
      <YearBox yearSymbols={texas4000.getYearSymbols()}/>
      <MapBox mapInfo={texas4000.getMapInfo(clickedOptions.value)}/>
      <FilterBox tabs={texas4000.getTabs()} clickedOptions={clickedOptions} currentTab={currentTab}/>
    </>
  )
}

export default App