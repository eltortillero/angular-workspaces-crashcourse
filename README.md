# AngularWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
This is a Vanilla Angular workspace to recreate from first commit to last commit follow the next steps
## Code Along Steps
### To create a Angular workspace with the Angular CLI 
    To create the workspace:  
    ng new angular-workspace --createApplication=false 
    To create an application: 
    ng generate application client -> routing no, styles scss -> ng serve --project client
    ng generate application dashboard -> routing yes, styles scss -> ng serve --project dashboard
    To create a common library:
    ng generate library shared --prefix shared 
    by default a library has a exported component, this component can be deleted if wanted 
    as well the default styles .file will be css.
    in this case it wont be deleted we are going to create a second component using the next command:
    ng generate component /components/wonderful-title --project shared --export
    we are going to work a little on the component wonderful-title for a brief moment.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
