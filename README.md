# Project Name

**Author**: Bashar Aqleh, Raghad Alboriny
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

The ability for a user to securly login to an application to store their data is crucial. Think about all the times you have signed up for an app using your facebook or google account. That is done through a process called OAuth. Essientially, the app allows “someone else” (an external identity “provider”) to take care of making sure that you are who you say you are.

In this lab, we are going to begin with front-end React starter code and use a service called Auth0 that will handle most of the challenges of working with external identity providers. Your job will be to create a componentized React application where users can sign in via the Auth0 service. This service will give you a jsonwebtoken or JWT.

Once you have that hooked up, you will send that JWT (that essentially says that you are who you say you are) to a back-end. You will have server-side starter code to use as well. You will use a library call jsonwebtoken to open the JWT and it will verify whether it is valid.

## Getting Started

1. Create an Organization.
1. Add the Contributors.
1. [**Use the frontend template from github**](https://github.com/codefellows/can-of-books-frontend-template).
1. Clone the repo to your machine.
1. Run the following command within your project directory to install the Auth0 React SDK: npm install @auth0/auth0-react .
1. [Create an application from auth0](https://manage.auth0.com/dashboard/us/dev-czhtt877/).
1. Copy the Domain and Client ID and put them in your index.js file.
1. Run the following command within your project directory to install the Router: npm install react-router-dom .
1. Start working on your code.

## Architecture

- JavaScript
- React
- React bootstrap
- auth0

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

Raghad Alboriny: Worked on the Backend

