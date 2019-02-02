# Contact Manager
Processes for Object-Oriented Software Development - small group project 

Web application for storing and organizing contacts.
Users can register a new account or login to their account
to view their personal contacts.

## Contributors
* Kyle Reid: Front End
* Christopher Dowlatram: Front End
* Vu Nguyen: Project Documentation
* Mykola Maslych: Database
* Misty Au: Project Documentation
* Kenneth Sauers: Project Manager
* Jose Luis: Database/API
* Jorge Nunez: API

## Setting up a front end development server

1. Clone the repository to your local machine using `git clone`.
2. Make sure `Node.js` is installed on your machine.
3. Run `npm -install -g @angular/cli` to install Angular.
4. `cd` into the `frontend-src/` directory of the repository folder and run `npm install` to add the dependencies.
5. Run `ng serve` for a development server and navigate to `http://localhost:4200/`. Any changes made to the source files will be reloaded automatically in the app.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Building and Running the Database

1. Run `ng build` to build the project. The build artifacts will be stored in the `public/` directory. Use the --prod flag for a production build.
2. cd into the `contact_man/` directory. Run `node app.js` to start the database server and connect to the database.
3. Navigate to `http://localhost:3000` to access the website with database functionality.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/latest/index.html).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/#/).

## Further help

To get more help on the Angular CLI use `ng help` or check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
