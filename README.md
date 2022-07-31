# 🌳Treezy

Deployed Link Here

## Table of Contents
- [Project Overview](#project-overview)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Project Reflections](#project-reflections)
- [Roadmap](#roadmap)
- [Setup](#setup)
- [Contributors](#contributors)
- [Resources](#resources)

## Project Overview


Treezy is an environmental application that allows a user to input their Colorado zip-code and see what trees they are able to grow in their respective growing/hardiness zone. The U.S. has 13 hardiness zones (Treezy currently uses 4 of these) which have different climate implications that determine what plant-life would thrive in a given area. Our goal is to inform our user of not only what kind of trees they could grow where they live, but also more information about those trees, such as their mature height, growing speed, foliage color, and more! 

Treezy is a full-stack application. 

Back-end: We hand-rolled our data in Excel, and used Express for our server and PostgreSQL as our database, which we deployed to Heroku for easy access to our API's endpoints instead of running the API locally. 

Front-end: We used React and it's libraries including Hooks and Router. We E2E tested Treezy using Cypress.


## Learning Goals

* Learn new technologies quickly
* Create an API
* Create a database
* Deploy an API
* Create a dashboard that is easy to use and displays information in a clear way on multiple pages and screens
* Write modular, reusable components, and create a single-page application that simulates multiple pages using Router and conditional rendering
* Implement a robust testing suite using Cypress
* Make network requests to our API endpoints to retrieve and manipulate data


## Technologies and Tools

* Express
* PostgreSQL
* Heroku
* JavaScript
* React
* HTML5
* CSS3
* Fetch API
* Cypress
* NPM
* Webpack

## Project Reflections



#### Challenges

* We had to reset and reseed our database many times as we would later find out things were missing, not uniform, or difficult to work with
* Refreshing the application would reset state, which would leave all data fields as undefined


#### Wins

* Successfully seeded and deployed our databse
* Created multiple endpoints for our API
* Dynamically rendered our tree images as some trees had more/less images than others
* Successfully filtered trees by growing zone and zip code




## Roadmap

Future features could include:

* Adding more zip-codes to reach the rest of the country
* Adding more trees to provide the user with more variety
* Functionality to determine if a user has purchased a tree
* Add more pages including pages to: browse all trees in the database, learn general information about trees, learn about trees postive environmental impact, and provide more in-depth information about tree care and planting (e.g., informing the user to call 811 prior to planting, where a certain tree should be strategically placed and more)

## Setup
1. _Fork_ and clone down this repository.
2. Cd into the root directory and install dependencies by running `npm install`
3. To run the server, use command `npm start` in the terminal. To stop the local server, use command `Control + C`. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.
4. While running `npm start` should automatically direct you, you can access the website by visiting http://localHost:3000/
5. For more information about the API, visit [Treezy-API](https://github.com/irmakerdem/tree-pal-api)


## Contributors

**Irmak Erdem**
* [LinkedIn](https://www.linkedin.com/in/irmakerdem/)
* [GitHub](https://github.com/irmakerdem)

**Betul Baskan**
* [LinkedIn](https://www.linkedin.com/in/betul-baskan/)
* [GitHub](https://github.com/Baskanbetul)

**Rachel Bock**
* [LinkedIn](https://www.linkedin.com/in/rachelbock/)
* [GitHub](https://github.com/rachel-bock)

**Brandon Ainsworth**
* [LinkedIn](https://www.linkedin.com/in/ainsworth-brandon/)
* [GitHub](https://github.com/BrandonAinsworth)

## Resources

* [Stack Overflow](https://stackoverflow.com/)
* [Covert CSV to SQL](https://www.convertcsv.com/csv-to-sql.htm)
* [Tree Data - Nature Hills](https://www.naturehills.com/)
* [Tania Rascia- Express Tutorial](https://www.taniarascia.com/node-express-postgresql-heroku/)
* [Nick Ciliak - Button Inspiration](https://codepen.io/nickcil/pen/vErdeB)
* [Artan Myrtolli- Mentor](https://github.com/artanmyrtolli)

