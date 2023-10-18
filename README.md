# Substantive Research Technical test

Simple app which pulls data from an API and displays the percentages of interactions a client had for each sector.

Installation and Setup Instructions

To clone this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Start Server:

npm start

To Visit App:

localhost:3000

Plan and Approach:
- Chose to create a doughnut chart as this allowed me to fulfil the task of showing the interaction percentages for each sector
  and get the graphs/tables bonus point
- Chose a popular data visualization library to help create graph within the time frame
- Planned to extract all 11 core sectors and link them to the amount of times they appear. I used this as the value for the
  name property in the interactions array of objects and stored them in their own seperate arrays to input the information
  into the Chart.js doughnut graph setup


Future Plans for how the application could be improved:
- I used .toFixed(2) when calculating the percentages so the total ends up near 99.9% instead of 100%,
  I could use Math.round() for a quick fix but it wouldn't give very specific percentages like the first implementation
- I could add an onClick functionality where if you click on a specific sector in the chart or legend it would conditionally
  render a table listing all the interactions related to that sector, including the date, to make the most of the API data
- App could also be improved with conditional background color generator based on sectorCount in case the client has an interaction with
  a new sector


