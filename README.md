# DreamTeam

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## App details

-- How it works
The Dream Team app is inspired by Qatar World Cup 2022. Users can register and create their own dream team choosing from all the football players that were part from the championship. Each user can rate other users' teams and the 3 highest-rated teams will are shown on the home page. In the players page users can see which players are most popular choices for dream teams.

-- Backend
Firebase Realtime database and Firebase Authentication were used.

-- Forms
Login, Register, Create, Edit - Template Driven Forms
In all forms data validation is added using directives;

-- Models
Created models for User, Player and Team;

-- Guards
Logged users can access pages related to My Team and can create, edit, delete their team and rate other teams, they cannot access Login or Register
Guest users can access pages with details but cannot create, edit or rate teams, they can access Login and Register
