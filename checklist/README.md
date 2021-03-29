# The Checklist Project

## About

This was a front-end challenge developed in React to Hi Platform hiring process.

## Usage

The app must show a checklist with data provided by a `.json` file. Each list of checklist have a `name`, `id` and `children`, each child is another **item**.

When the user clicks in some item, all the `children` must be also checked, but when the user uncheck some item, the children doesn't have to be unchecked too.

Each item is collapse by default. The user must click on chevron icon to expand children.

And the checked items must be persisted in machine local storage, because when the uses reload the page, all the previously checked items must continue be checked.

## Technologies

This project was developed in **React.js**, with **Typescript**, **SASS** and **HTML**.

Another packages used in this project:

- [Styled-components](http://styled-components.com)
- [Material UI](https://material-ui.com)
- [Jest](https://jestjs.io)
- [Enzyme](http://enzymejs.github.io)

## Try

Try this app on your machine. Clone this repo and run:

1. `yarn` or `npm install`
2. `yarn start` or `npm run start`.

> You must have **Node**, **NPM or Yarn** and **React** installed on your machine

## Testing

The tests about this project was not developed completely because the main goal was not really driven the project by the tests (TDD) or not validate the project with unit tests. The main goal was show that developer has knowledge about tests/unit tests.

## Authorship

This project was developed by [Victor Rodrigues](https://github.com/vctrodrigues).
