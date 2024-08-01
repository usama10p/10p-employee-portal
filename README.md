# 10p-employees-portal

An employee portal that fetches employees from random api. Uses ReactJS with typescript and tailwind css using UI toolkit material-tailwind

I have used [Create React App](https://github.com/facebook/create-react-app). to bootstrap this project

## Pre-requisites

* Make sure you have the latest version of nodejs installed on your system (https://nodejs.org/en/download/)
* Any code editor, I prefer using VScode

## Installation

```bash
$ npm install
```

## Run the app

```npm start```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Create a build 

```npm run build```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


## Project Structure takeaways

* All application code resides in /src directory
* 'src/components' have separate files for each component of the application
* 'src/constants' have a constant file that contains overall application constants
* 'src/service' contains APIs called using Axios.
* 'src/styles' have tailwind.css which is not quite used in this project, since material-tailwind UI toolkit does all the styling
* 'src/types' has a user type defined 

## Notes and thought process

* I have tried to make the project structure simple and self-explanatory, so that it can provide a clear sense of the direction
* I have used params to pass selected user object from parent (Listing) to child component (UserProfile). I understand this is not the best approach and redux store should be used here
* Gender select dropdown has some minor CSS issue
* Unit tests are missing but we can use Jest testing framework
* File naming conventions are used throughout the project and are made consistent everywhere

