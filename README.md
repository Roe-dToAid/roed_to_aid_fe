<div id="header" align="center">

<img width="762" alt="Roe'd To Aid Logo" src="https://user-images.githubusercontent.com/99596577/189242825-52788db8-d892-49c1-be46-6ab4ab300d86.png">
</div>
<h1 align="center"> Welcome to Roe'd To Aid </h1>
<h2 align="center">A safe space to find a safe place. </h2>

After the U.S. Supreme Court officially reversed Roe v. Wade in June of 2022, millions lost a fundamental constitutional protection, the right to abortion.

Roe'd To Aid was created to bring awareness and expand access to safe, authorized clinics that provide necessary healthcare to all birthers. This application compiles current clinic information by state and clearly defines authorized clinics and distinguishes them from misinformation centers. Users can learn about current state policies as well as available resources in their state.

## Table of Contents

- [Project Overview](#project-overview)
- [Learning Goals](#learning-goals)
- [Technologies and Tools](#technologies-and-tools)
- [Roadmap](#roadmap)
- [Setup](#setup)
- [Contributors](#contributors)

## Project Overview

(Want to hire the devs that worked on this project? Click [this link](#contributors) to jump to our project contributors!)

This repo is the Front End part of a project built by students at [Turing School of Software and Design](https://turing.edu/). You can find the Back End repo [HERE](https://github.com/Roe-dToAid/roed_to_aid_be) and see set-up instructions below. The project itself is an original web app designed by combined Front End and Back End teams and its purpose is to help individuals seeking information on abortions in their state and help with identifying misinformation sites.

Visit our Front End Site!
- [Roe'd To Aid](https://roed-to-aid.herokuapp.com/)

Our Back End is hosted here and requires an API key to access (we are not giving any API keys out at this time):
- [Roe'd To Aid API](https://roed-to-aide-be.herokuapp.com/)

To help with the design, we purchased an illustration assets pack from Dribbble so it would have a consistent look and feel. It was also important to us as a team to utilize diverse and inclusive imagery. We used FIGMA to construct our wireframes and imported GoogleFonts of different styles, sizes, and weights for our fonts.

We chose React as our framework and took full advantage of React's modular nature by creating dynamically rendered components that helped keep the app small yet provided the user with a pleasant experience. We utilized React Router to route seamlessly to each view.

We decided to write in JavaScript in conjunction with the React Prop Types Library in order to validate the data type of props coming into a component, allowing for more specific, helpful error messages.

We utilized NPM as our package manager with Webpack as a module bundler. Material UI components were applied for the icons on the clinic cards and filter buttons on the Find a Clinic view. Using shared classes, SASS variables, and nested styling, we efficiently wrote the SCSS throughout the app. 

We implemented Apollo Client as a state management library that simplified the management of remote and local data with GraphQL. Apollo Client handles the request cycle from start to finish, including tracking lifecycle states and streamlining the construction of our loading and error components.

End-to-end testing with Cypress was applied to ensure that our application behaves as expected and that the flow of data is maintained for various user tasks and processes.

We adopted continuous integration (CI) through CircleCI to integrate changes made by all team members into a central, shared version frequently deployed (usually multiple times per day) on Heroku.

Finally, we incorporated Agile scrum ceremonies for our project management, including morning standups, weekly retros, and a shared organization project board used for refinement and planning.

## Learning Goals

- Continue to gain competency with React Fundamentals
- Create a multi-page UX using Router
- Apollo GraphQL implementation with a React app
- Testing asynchronous GraphQL queries with Cypress and properly stubbing and intercepting the data
- More in depth understaing of SASS and responsiveness 

## Planning Documents

[MVP proposal](https://docs.google.com/document/d/1UHs-a3WY_-aNOkZpWfk-UKU8aV_Z4cBGfchR075For8/edit)

[Wireframes](https://www.figma.com/file/JgDbO5u7qdWi7SAQrDZpVI/Roe'dToAid?node-id=0%3A1)

[Project Spec](https://mod4.turing.edu/projects/capstone/)

## Illustrations

[Deployed Link](https://roed-to-aid.herokuapp.com/)

[Functionality Video](https://vimeo.com/747448767/4632ceb6ae)

## Technologies and Tools

<img width="737" alt="Screen Shot 2022-10-05 at 7 31 33 PM" src="https://user-images.githubusercontent.com/98505112/194194103-e35a23e6-709f-431f-b3c1-17d1ed802495.png">

## Roadmap

Future features could include:

- Add ability to add a review to review a clinic experience
- Add feature for user to rate their clinic experience
- Add transit options using a mapping feature

## Setup to Run Locally

1. Fork and clone this repository.
2. Cd into the root directory and run `npm i`.
3. To run this server, run `npm start` in the terminal and React will start the development server. To stop the local server, use command `Control + C`.
4. Open a browser window and go to http://localhost:3000 to view the website.
5. To run the testing suite, run `npm run cypress` and Cypress will open up.

Pull down the [Back-End repo](https://github.com/Roe-dToAid/roed_to_aid_be). Set up instructions are in that repository's README.
Do not nest this inside your front-end repository.


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
