# StaffMeni

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

This project will follow a "Security Domains"-based approach to implement its architecture in terms of Angular Modules
and Routing. There are basically 2 different Security Domains so far:
* The set of pages ( i.e. Angular Routes ) that are accessible without being logged in: grouped within the ConnectionModule
* The set of pages ( i.e. Angular Routes ) that are accessible **ONLY** while being logged in:
grouped within the StafferBoardModule, therefore acting as the NgModule encompassing the core features of the app ( i.e. 
the ones an end-user will actually use most of the time, so once he/she/they has been logged in )

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
