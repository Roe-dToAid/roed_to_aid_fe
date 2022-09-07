<img width="162" alt="Screen Shot 2022-09-07 at 12 58 54 PM" src="https://user-images.githubusercontent.com/98505112/188956585-a0ee3aee-3dd1-410f-8832-bea009455933.png">


## Table of Contents

- [Project Overview](#project-overview)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Roadmap](#roadmap)
- [Setup](#setup)
- [Contributors](#contributors)

## Project Overview

Starting each day with a Tarot reading is a terrific way to get psyched for all the possibilities—and avoid possible pitfalls that the day may bring. WitchCraft Tarot helps you get your daily reading in order to obtain insight for the day ahead! It also allows you to get your 3-Card Spread reading in order to obtain insight about past, present, and future, or, situation, action, and outcome. Or, if you're doing a relationship reading, you can even designate the first card as yourself, the second as your partner (or potential partner), and the third as the relationship between you both. Additonally, users have the opportunity to explore the entire deck on the Explore The Deck View and filter the deck by major arcana or the minor suits (pentacles, swords, wands, and cups).

Throughout this project, I took full advantage of React’s modular nature by creating dynamically rendered components used on multiple views. This helped me keep the app small yet provided the user with a pleasant experience. Thoughtful architecture was implemented using assets, data, utilities, components, and views folders. I used Material UI components for the menu and filter buttons on the Explore The Deck View. Using shared classes and nested styling in SASS, I was able to reduce the amount of repeated CSS throughout the app. With a mobile-first development approach, I learned it requires much less CSS to modify the styling for larger viewports. To help with the design, I purchased an illustration assets pack from Dribbble so it would have a consistent look and feel. To provide context and instructions, I referenced https://www.astrology.com/tarot/daily.html for content. All words were taken from that site as placeholder text.

## Learning Goals

- Continue to gain competency with React Fundamentals
- Create a multi-page UX using Router
- Practice refactoring class based components to use react hooks
- Continue to learn how to test React components & asynchronous JS
- End to end testing with Cypress

Our application includes the following core functionality:

- Displays the data from the API in a way that applies directly to our audience
- Ability for users to store/manipulate the data displayed in the application, such as filtering on the Explore The Deck view by major arcana and minor suits
- Multiple views handled by Router
- App deployment using Heroku

## Planning Documents

[MVP proposal](https://docs.google.com/document/d/1eDzOwcUQOxsWh6uXOyawd2NmG0x2y0A1H9xh6m3zs7s/edit)

[Design Inspo](https://docs.google.com/document/d/1iDrh_PzEPID617UXV8rjnBhG76k7Y7-3BH_rHk6suMc/edit)

[Wireframes](https://drive.google.com/file/d/19KhIxJ7ZgmV0XLT8SNrTL9Igll_3zSd1/view?ths=true)

[Project Spec](https://frontend.turing.edu/projects/module-3/showcase.html)

## Illustrations

[Deployed Link](https://witchcraft-tarot.herokuapp.com/)

[Functionality Video](https://vimeo.com/737363654/9e612fbefb)

## Technologies and Tools

- JavaScript
- React
- React Router
- HTML
- CSS
- SASS
- Cypress
- Fetch API
- NPM
- Webpack
- Heroku

## Roadmap

Future features could include:

- Add functionality to allow a user to favorite meaningful spreads
- Add feature to connect with other users and share spreads with friends
- Add login functionality 

## Setup to Run Locally

1. Fork and clone this repository
2. Cd into the root directory and run `npm i`
3. To run this server, run `npm start` in the terminal and React will start the development server. To stop the local server, use command `Control + C`.
4. Open a browser window and go to http://localhost:3000 to view the website
5. To run the testing suite, run `npm run cypress` and Cypress will open up.


## Contributors

**Rachel Allen**

- [LinkedIn](https://www.linkedin.com/in/rachel-lynn-allen/)
- [GitHub](https://github.com/Rallen13)
