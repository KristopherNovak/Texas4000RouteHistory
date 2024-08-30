# Src folder

The src folder includes all the source code for the frontend of this project (besides the index.html file, which is located in the parent folder). Main.jsx is the file that is run initially and mainly functions to set the React App up as an Apollo client and to call App.jsx. App.jsx meanwhile, includes more or less all the HTML elements that are rendered in the body of the page. App.css includes some minor CSS formatting, but the bulk of the relevant formatting is in the index.css file.

The components folder includes the various React components that appear on the page and the object folder includes specifications of the parameters that are used to customize what each React component shows. More detailed information about these folders can be found in the README.md file for these folders.

## App.jsx

This file renders more or less all the HTML elements in the body of the page. These elements include a TitleBox component, two InfoBox components, a RouteBox component, a YearBox component, a MapBox component, and a FilterBox component. All of these components get their parameters from the Texas4000 class (located in the object folder).

The TitleBox component displays the title of the website ("Texas 4000 Route History").

Each of the InfoBox components display textual information (One for what Texas 4000 is, one for what the website is for). 

The RouteBox and YearBox components each essentially act as a legend, with the RouteBox displaying a symbol and a header for each Texas 4000 route (The Sierra route and the corresponding Sierra symbol) and the YearBox displaying a symbol and header for each year Texas 4000 has rode (2004 and the corresponding symbol for 2004). 

The MapBox displays the map and any markers (and corresponding popup text) it is given. 

The FilterBox, at a high level, displays controls that allow a user to filter what information is shown on the map. More specifically, it displays a TabBox that includes a set of selectable tabs. In the present application, these tabs are selectable by "Year", "Route", "Day", and "Date." When a tab is selected, a corresponding OptionBox is generated. The OptionBox includes a list of options associated with the tab that can be selected. For instance, if the "Year" tab is selected, an option box including "2004", 2005", "2006", and so on is generated. Then, for each option selected or deselected, the option is added (or removed) from a set corresponding to its tab (So "2004" could be added or removed from a "Year" set). These sets are provided to a state variable (clickedOptions) that is in turn provided to a function which generates markers for the map based on the items in each set. Of note, sets that do not include any items (that is, no options have been selected or all items that have been deselected) are ignored during the marker generation process. The tab that is currently selected is also tracked via a state variable (currentTab). When no tab is selected, this variable may be set to a null value (in which case, no option box is generated).

