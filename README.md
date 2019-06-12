# PerxTech - React interview app.

The app created with **CreateReactApp** boilerplate & **yarn** package manager. 
For the state-management used **Redux**, **Redux-Saga**, Reselect libraries.
As UI library is chosen Semantic UI.
For unit & integration testing - **Jest** & **React-testing-library**.

## Source code structure

The project `/src` directory split by API, state logic & view components.
State directory has **duck-like structure**.
Tests locate near to a tested component.
Each component has its own directory with main js file, styles & tests.

## Environment variables

Environment variables hoisted from _.env_ with prefix `REACT_APP_*` & then configured in **config.js**.
As example you can use `.env.example`.

## Scripts

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
