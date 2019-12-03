# StaffMeni

This project will follow a "Security Domains"-based approach to implement its architecture in terms of Angular Modules
and Routing. There are basically 2 different Security Domains so far:
* The set of pages ( i.e. Angular Routes ) that are accessible **without** being logged in: grouped within the `ConnectionModule`
* The set of pages ( i.e. Angular Routes ) that are accessible **ONLY** while being logged in:
grouped within the `StafferBoardModule`, therefore acting as the NgModule encompassing the core features of the app ( i.e. 
the ones an end-user will actually use most of the time, so once he/she/they has been logged in )

A set of features represented in pages that are not supposed to be the most frequently accessed by the end-user are grouped
in the `StafferModule`, that will be _Lazily-loaded_ for better performance. 

Both the `ConnectionModule` and `StafferBoardModule` are _Eagerly-loaded_ and will therefore be included in the **initial** bundle loaded by the browser.

The basis of the reflexion was that a Staffer will most of the time want to access information that will be represented in a dashboard,
( therefore we can rely on the fact that they will always be wanted by the user, so they are in the _Eagerly-loaded_ part of the app ).
On the other hand, information that are only accessed rarely ( more to update them than to read them ), like the Profile,
the Contact and Address pages, should be in a _Lazily-loaded_ module and not add weight to the **initial** bundle.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
