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
- [Organizational Resources](#organizational-resources)
- [Other Resources](#other-resources)

## Project Overview

Treezy is a full-stack environmental application that allows a user to input their Colorado zip code and see what trees they are able to grow in their respective growing/hardiness zone. The U.S. has 13 hardiness zones (Treezy currently uses 8 of these) which have different climate implications that determine what plant-life would thrive in a given geographic area. Our goal is to inform our user of not only what kind of trees they could grow where they live, but also more information about those trees, such as their mature height, growing speed, foliage color, and more! 

Back-end: We hand-rolled our data in Google Sheets, used Express for our server, and PostgreSQL as our database. We deployed our API to Heroku for easy access to our endpoints instead of running the API locally. 

Front-end: We used React, React Router, Hooks, and more. We used end-to-end (E2E) testing on Treezy using Cypress.

## Learning Goals

This project is a part of Turing School of Software and Design's [Stretch Tech](https://frontend.turing.edu/projects/module-3/stretch.html).

* Self-teach new technologies quickly
* Create an API
* Create a database
* Deploy an API
* Write modular, reusable components, and create a single-page application that simulates multiple pages using Router and conditional rendering
* Implement a robust testing suite using Cypress
* Create a dashboard that is easy to use and displays information in a clear way 
* Make network requests to our API endpoints to retrieve and manipulate data

## Technologies and Tools

* Express
* PostgreSQL
* Heroku
* JavaScript
* React
* JSX
* HTML
* Figma
* CSS
* Fetch API
* Cypress
* NPM
* Webpack

## Project Reflections


#### Challenges

* We had to reset and reseed our database many times to reformat the data, fix broken links, and fill in incomplete tree information
* CSS was difficult because each component was interconnected and then bundled by Webpack
* Refreshing the application would reset state, which would leave all data fields as undefined
* We struggled to realize that we needed an endpoint to return a single tree in addition to the endpoints we'd already created
* We discovered a little too late that our editors had different formatting rules and needed to correct it for uniformity

#### Wins

* Successfully seeded and deployed our databse
* Created multiple (3) GET endpoints for our API
* Dynamically rendered our tree images as some trees had more/less images than others
* Successfully filtered trees by growing zone and zip code
* We alotted time to research what we needed from the new technologies and implemented them in a timely and effective manner
* We worked collaboratively on the entire project ❤️‍ 

## Roadmap

Future features could include:

* More zip codes to reach the rest of the country
* More trees to provide the user with added variety
* Functionality to determine if a user has purchased a tree
* More pages to: browse all trees in the database, learn general information about trees, learn about the positive environmental impact of trees, and provide more in-depth information about tree care and planting (e.g., informing the user to call 811 prior to planting, where a certain tree should be strategically placed and more)
* Use CSS to render application appropriately on multiple devices

## Setup

1. _Fork_ and clone down this repository.
2. `cd` into the root directory and install dependencies by running `npm install`
3. To run the server, use command `npm start` in the terminal. To stop the local server, use command `Control + C`. Closing the terminal without stopping the server first could allow the server to continue to run in the background and cause problems.
4. Running `npm start` should direct you to the application, but you can always access the website by visiting http://localhost:3000/
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

## Organizational Resources

* [Project Board](https://github.com/users/irmakerdem/projects/1)
* [Figma](https://www.figma.com/file/mvdWvCkOUhi9PJGoaO7YOM/Tree-Pal?node-id=0%3A1)
* [FigJam](https://www.figma.com/file/DHo7FKZPocDK3AY6TXqMYA/Tree-Pal-Component-Architecture)

## Other Resources

* [Stack Overflow](https://stackoverflow.com/)
* [Covert CSV to SQL](https://www.convertcsv.com/csv-to-sql.htm)
* [Tree Data - Nature Hills](https://www.naturehills.com/)
* [Tania Rascia - Express Tutorial](https://www.taniarascia.com/node-express-postgresql-heroku/)
* [Nick Ciliak - Button Inspiration](https://codepen.io/nickcil/pen/vErdeB)
* [Artan Myrtolli - Mentor](https://github.com/artanmyrtolli)
* [John Hennerich - Backend Consultant](https://github.com/jhennerich)
