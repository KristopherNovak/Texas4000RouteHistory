# NodeJS

This repository includes the code that is currently being used to run Texas4000RouteHistory.com. The code is written for Node.js (specifically Express.js) and utilizes Apollo for GraphQL operations.

The code essentially does two things. The first thing is to serve the React application (compiled code in the list folder of this repository, uncompiled code in the React folder in the parent directory) to a browser. The second thing is to respond to GraphQL with information from the _db.js file. Specifically, the code returns a subset of the information in the _db.js folder depending on requested routes (Example: {"Sierra", "Rockies"}), requested years (Example: {"2004", "2024")}, requested days (Example: {"1", "55"}), and requested calendar dates ("6/5", "7/22"). It should be noted that if a null set for any of routes, years, days, and calendar dates is received (no routes were requested), then the null set is simply ignored. If a null set for all of these is received, then all the data in _db.js is returned. Each entry in _db.js corresponds to a unique combination of route, year, and day and includes information about a route, year, day, calendar date, a name of the destination the particular route rode to on the day/year, and the latitude and longitude of the destination.


