export class Tab{
    constructor(name, generateOptions){
      this.name = name
      this.generateOptions = generateOptions
    }
  }

//Box that includes Tab box (with one or more tabs) and Option box (one for each tab)
export const FilterBox = ({tabs, clickedOptions, currentTab})=>{
    return(
        <div className="Filter-Box">
        <TabBox tabs={tabs} currentTab={currentTab.value} updateCurrentTab={currentTab.update}/>
        <OptionBox clickedOptions = {clickedOptions} currentTab = {currentTab.value}/>
        </div>
    )
}

//Box that includes tabs that can be pressed to expose corresponding option box
//Example: pressing the "By Year" tab exposes a "By Year" option box with years 2004-2024
const TabBox = ({tabs, currentTab, updateCurrentTab})=>{
    const onTabSelect = (newTab)=>{
        //If same tab is clicked twice, go to state where no tabs are clicked
        if(sameTabClickedTwice(currentTab, newTab)) updateCurrentTab(noTab);
        else updateCurrentTab(newTab);
    }

    return(
        <div className={'Tab-Box'}>
        {tabs.map(tab=><TabButton tab={tab} onClick = {()=>onTabSelect(tab)} selectedTab={currentTab} key={tab.name}/>)}
        </div>
    )

}

function sameTabClickedTwice(currentTab, newTab){return currentTab.generateOptions == newTab.generateOptions;}
const noTab = new Tab('', ()=>[]);

//Component representing actual tab in tab box
//Returns a special class name (selectedTab) if the tab is the one that the user has selected to allow custom styling
const TabButton = ({tab, onClick, selectedTab}) =>{
    if(selectedTab.generateOptions === tab.generateOptions){
        return(
        <>
            <button className='selectedTab Tab-Box--Tab--Button' onClick={onClick} id={'Tab__'+hyphenate(tab.name)}><p>{tab.name}</p></button>
        </>
        )

    }else{
        return(
        <>
            <button className='Tab-Box--Tab--Button' onClick={onClick} id={'Tab__'+hyphenate(tab.name)}><p>{tab.name}</p></button>
        </>
        );
    }
}

//Box that includes options that can be pressed
//Pressing the options should save them to clickedOptions
//Example: Pressing 2004 saves 2004 to the clickedOptions
const OptionBox = ({clickedOptions, currentTab})=>{
    let options = currentTab.generateOptions();

    const onOptionClick = (option)=>{
        //Determine which list to update
        let clickedOptionsValue = clickedOptions.value;

        let setToUpdate;
        if(Object.hasOwn(clickedOptionsValue, currentTab.name)) setToUpdate = clickedOptionsValue[currentTab.name];
        else{
        setToUpdate = new Set();
        }

        let newSet;
        if(setToUpdate.has(option)){
        newSet = new Set(setToUpdate);
        newSet.delete(option);
        } else{
        newSet = new Set(setToUpdate);
        newSet.add(option);
        }

        let newClickedOptionsValue = {... clickedOptionsValue};
        newClickedOptionsValue[currentTab.name] = newSet;
        clickedOptions.update(newClickedOptionsValue);

    }

    if (options.length == 0) return(
        <>
        </>
    )

    return(
        <div className={'Option-Box'}>
        {options.map(option => <OptionButton onClick = {()=>onOptionClick(option)} option={option} currentTab={currentTab} clickedOptions={clickedOptions} key={option}/>)}
        </div>
    )
}


const OptionButton = ({onClick, option, currentTab, clickedOptions}) =>{
    let optionID = 'Option-Box--Option__' + hyphenate(currentTab.name) + '__' + hyphenate(option);

    let clickedOptionsValue = clickedOptions.value;

    if(Object.hasOwn(clickedOptionsValue, currentTab.name) && clickedOptionsValue[currentTab.name].has(option)){
        return(
        <>
        <button className = 'selectedOption Option-Box--Option--Button' onClick={onClick} id={optionID}><p>{option}</p></button>
        </>
        )
    }
    else{
        return(
        <>
            <button className = 'Option-Box--Option--Button' onClick={onClick} id={optionID}><p>{option}</p></button>
        </>
        )
    }

}

function hyphenate(sentence){
    return sentence.replaceAll(' ', '-');
}