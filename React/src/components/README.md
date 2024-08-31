# Components folder

The components folder includes all of the custom React components that I created for this project. These include the TitleBox, the InfoBox, the MapBox, PopUpText, RouteBox, TitleBox, and YearBox.

## FilterBox.jsx

The FilterBox displays a set of selectable tabs and also displays a set of selectable options depending on which tab is selected. The selectable tabs are part of the TabBox and the selectable options are part of a corresponding option box. 

The TabBox takes, as parameters, a set of Tabs (defined in this file), where each Tab has a name property ("By Year") and a function called generateOptions that returns back the names of all options associated with a tab. In the case of the "By Year" tab, the returned set would be {2004, 2005 . . ., 2024}. The tab box also takes the value of a currently selected tab and a function for updating the current tab value (it is assumed that the currentTab is a state variable). The TabBox renders the currently selected tab with a special HTML class called "selectedTab" that allows this tab to be treated differently (highlighted a different color than the other tab buttons). Each tab button is rendered as a TabButton component.

The OptionBox takes, as parameters, a clickedOptions parameter. The clickedOptions parameter is a list that includes an entry for each tab. The entry for each tab consists of a set of the options for that tab that are currently clicked. The OptionBox also takes the value of the current tab. This allows the OptionBox to determine which tab the OptionBox is being generated for. The OptionBox renders the currently selected options with a special HTML class called "selectedOption" that allows the selected options to be treated differently (highlighted a different color than the other options). The options are displayed as OptionBox components.

The specific parameters put into the FilterBox for this project are defined in the Texas4000FilterBoxParameterGenerator.js file, located with the folder entitled "object" in the parent library.

## InfoBox.jsx

The InfoBox displays a box that includes a header and corresponding information body. It takes, as a parameter, a DisplayInfo parameter (defined in this class) that includes a boxName parameter (used to define the class name of the box), a title parameter (used to define the text in the header) and an information parameter (used to define the text in the body).

The specific parameters put into the FilterBox for this project are defined in the Texas4000InfoBoxParameterGenerator.js file, located with the folder entitled "object" in the parent library.

## MapBox.jsx

The MapBox displays a map using React-Leaflet and takes a MapInfo parameter (defined in this class). The MapInfo parameter includes a center parameter (where the center of the map should be), a zoom parameter (how zoomed in the map should be), a scrollWheelZoom parameter (if scroll wheel zoom should be enabled), and allMarkerInfo (a list of MarkerInfo parameters). The MarkerInfo parameter (also defined in this class) consists of an id (a unique id for each marker), a latitude, a longitude, an icon (an Icon object from the leaflet library), and popUpHTML (a PopUpText component as defined in this folder corresponding to what the marker should say when clicked).

The specific parameters put into the FilterBox for this project are defined in the Texas4000MapBoxParameterGenerator.js file, located with the folder entitled "object" in the parent library.

## PopUpText.jsx

The PopUpText represents the format of the text popup linked to a map marker. It takes, as parameters, a city parameter that is just the title of the box and an entries parameter that includes a list of entries, where each entry has a route, year, day, and calendarDate parameter. These parameters are pretty specific to the Texas 4000 application, but I am envisioning generalizing this component at a future date.

## RouteBox.jsx

The RouteBox displays a legend that includes a route symbol and associated text. The RouteBox takes, as parameters, a list of RouteSymbol parameters (defined in this class). The RouteSymbol parameter includes a name parameter (used to determine class names in HTML), an imageURL parameter (an image URL to be displayed as the route symbol), and a text parameter (the text to go by the route symbol).

## YearBox.jsx

The YearBox displays a legend that includes a year symbol and associated text. The YearBox takes, as parameters, a list of YearSymbol parameters (defined in this class). The YearSymbol parameter includes an imageURL parameter (an image URL to be displayed as the route symbol), and a year parameter (the year to go by the year symbol).


## TitleBox.jsx

The TitleBox displays a title within a box. The TitleBox takes, as parameters, a text parameter that includes the title to be displayed. Currently, the TitleBox also displays a name and an email that are hardcoded, but I am planning to make this component more generic in the future.
