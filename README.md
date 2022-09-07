<img width="162" alt="Screen Shot 2022-09-07 at 12 58 54 PM" src="https://user-images.githubusercontent.com/98505112/188956585-a0ee3aee-3dd1-410f-8832-bea009455933.png">
 <h1 align="center"> Welcome to Roe'd To Aid </h1>
<h2  align="center">A safe space to find a safe place. </h2>

## Table of Contents

- [Project Overview](#project-overview)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Roadmap](#roadmap)
- [Setup](#setup)
- [Contributors](#contributors)

## Project Overview

(Want to hire the devs that worked on this project? Click [this link](#contributors) to jump to our project contributors!)

This repo is the Back End part of a project built by students at [Turing School of Software and Design](https://turing.edu/). The project itself is an original web app designed by combined Front End and Back End teams and its purpose is to help individuals seeking information on abortions in their state and help with identifying misinformation sites.

Visit our Front End Site!
- [Roe'd To Aid](https://roed-to-aide-fe.herokuapp.com/)

Our Back End is hosted here and requires an API key to access (we are not giving any API keys out at this time):
- [Roe'd To Aid API](https://roed-to-aide-be.herokuapp.com/)

After the U.S. Supreme Court officially reversed Roe v. Wade in June of 2022, millions lost a fundamental constitutional protection, the right to abortion.

Roe'd To Aid was created to bring awareness and expand access to safe, authorized clinics that provide necessary healthcare to all birthers. This application compiles current clinic information by state and clearly defines authorized clinics and distinguishes them from misinformation centers. Users can learn about current state policies as well as available resources in their state.

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

### Front End Team
<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/98493391?s=120&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/90080658?s=120&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/99596577?s=120&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/98505112?s=120&v=4"></td>
  </tr>
  <tr>
    <td>Catlyn Bowles</td>
    <td>Irmak Erdem</td>
    <td>Lidia Karpinski</td>
    <td>Rachel Allen</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/catlynbowles">GitHub</a><br>
      <a href="https://www.linkedin.com/in/catlyn-bowles/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/irmakerdem">GitHub</a><br>
      <a href="https://www.linkedin.com/in/irmakerdem/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/lkarpins">GitHub</a><br>
      <a href="https://www.linkedin.com/in/lidia-karpinski/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/Rallen13">GitHub</a><br>
      <a href="https://www.linkedin.com/in/rachel-lynn-allen/">LinkedIn</a>
    </td>
  </tr>
</table>

### Back End Team
<table>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/85247765?s=120&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/98674727?s=120&v=4"></td>
    <td><img src="https://avatars.githubusercontent.com/u/98676136?s=120&v=4"></td>
  </tr>
  <tr>
    <td>Bryce Wein</td>
    <td>Casey Fazio</td>
    <td>Wesley Garcia</td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/bwbolt">GitHub</a><br>
      <a href="https://www.linkedin.com/in/bryce-wein/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/casefaz">GitHub</a><br>
      <a href="https://www.linkedin.com/in/casey-fazio-7ba04149/">LinkedIn</a>
    </td>
    <td>
      <a href="https://github.com/wesatt">GitHub</a><br>
      <a href="https://www.linkedin.com/in/wesley-garcia-attech/">LinkedIn</a>
    </td>
  </tr>
</table>

### Instructor/Project Manager
Mike Dao
