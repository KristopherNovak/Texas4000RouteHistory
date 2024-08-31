# Object Folder

The object folder includes the parameter generators that are used to customize this page to this specific application as well as a component (Texas4000.jsx) that feeds these generated parameters to App.jsx (in the parent directory) to be passed to their respective React components in the components folder in the parent directory.

## Texas4000.jsx

This file includes a parameter entitled "Texas4000" that is passed to the App.jsx with all the parameters needed to customize the React components in the components folder (displayed in the parent directory). Each of the parameters in the Texas4000 class correspond to a respective parameter generator within the object folder. In turn, each of these parameter generators correspond to a respective React component within the components folder. The Texas4000 class includes a title parameter passed to the TitleBox component; tabs, initialClickedOptions, and initialTab passed to the FilterBox component; an allDisplayInfo parameter passed to the InfoBox component; a routeSymbols parameter passed to the RouteBox component; and a yearBox parameter passed to the YearBox component. Additionally, the Texas4000 class includes a function (getMapInfo) that generates the parameters for the MapBox component. Notably, this function is responsible for performing a GraphQL query in order to acquire these parameters.

## Texas4000FilterBoxParameterGenerator.js

This script generates the parameters to be passed to the FilterBox component via the Texas4000 class. These parameters includes a set of Tabs (defined in the FilterBox class), the initialClickedOptions (corresponding to the clickedOptions state variable in App.jsx), and the initialTab (corresponding to the currentTab state variable in App.jsx). The tabs in this case include a "By Year", "By Day", "By Calendar Date", and "By Route" tab, the initial tab is a "By Year" tab, and the initial clicked options include just the year "2024" (to ensure markers corresponding to 2024 are displayed when the page is loaded).

## Texas4000IconMatchMapper.js

This script functions includes a class that can map a given set of routes and set of years to an icon. This is used to determine what icon should be attached to a given marker (within the Texas4000MapBoxParameterGenerator class).

## Texas4000InfoBoxParameterGenerator.js

This script generates the parameters to be passed to the InfoBox component via the Texas4000 class. These parameters include a list of DisplayInfo parameters (defined in the InfoBox.jsx file). In this case, the first DisplayInfo parameter corresponds to a box describing what Texas 4000 is ("What is Texas 4000?") and the second DisplayInfo parameter corresponds to a box describing the purpose of this site ("What is this site?").

## Texas4000MapBoxParameterGenerator.js

This script generates the parameters to be passed to the MapBox component via the Texas4000 class. These parameters include a MapInfo parameter (defined in the MapBox.jsx file). In this case, this includes the center of the map (broadly centered on the US), a zoom level (also broadly centered on the US), a disabling of scroll wheel zooms, and a list of MarkerInfo parameters (also defined in the MapBox.jsx file). The returned MarkerInfo parameters correspond to which options in the FilterBox have been selected.

## Texas4000RouteBoxParameterGenerator.js

This script generates the parameters passed to the RouteBox component via the Texas 4000 class. These parameter includes a list of RouteSymbols (defined in the RouteBox.jsx file). In this case, the route symbols correspond to the "Ozarks" route, the "Sierra" route, the "Smokies" route, the "Rockies" route, two routes, three routes, and all four routes.


## Texas4000YearBoxParameterGenerator.js

This script generates the parameters passed to the YearBox component via the Texas 4000 class. These parameter includes a list of YearSymbols (defined in the YearBox.jsx file). In this case, the year symbols correspond to all years between 2004 and 2024 as well as on year symbol for multiple years.

