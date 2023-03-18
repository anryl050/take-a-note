# TAKE - A - NOTE

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Additional Requirement](#requirements)
#### * [Video Explanation](#video)
#### * [Installation](#installation)
#### * [Usage](#usage)
#### * [Tests](#tests)
#### * [License](#license)

## Project Description
The scope of project is to createa Note Taker application that can be used to write, save and delete notes. The application must use an Express.js back end and should save and retrieve the data from JSON file. 
The applciation should use the provided starter code (application's front end) to connect it to the back end, and then be deployed in the Heroku. 

### User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

### Acceptance Criteria
GIVEN a note-taking application:

- WHEN I open the Note Taker, THEN I am presented with a landing page with a link to a notes page.
- WHEN I click on the link to the notes page, THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column.
- WHEN I enter a new note title and the note’s text, THEN a Save icon appears in the navigation at the top of the page.
- WHEN I click on the Save icon, THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes.
- WHEN I click on an existing note in the list in the left-hand column, THEN that note appears in the right-hand column.
- WHEN I click on the Write icon in the navigation at the top of the page, THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column. 
 
## Additional Requirements
The application must use Heroku (a cloud based server application) to deploy the entire application. 

## Video Exaplanation
[Demo Video]()


## Installation
- User needs to install [node.js (version 18.15.0 LTS)](https://nodejs.org/en/).
- To use the application user has to list [inquirer (version 8.2.4)](https://www.npmjs.com/package/inquirer/v/8.2.4) and [jest (version 29.4.3)](https://jestjs.io/docs/29.4/getting-started) as dependencies in the package.json file.
- To install inquirer and jest, the user needs to open the intergrated terminal and type npm install or npm i. This will isntall the inquirer and jest based on the specified version in the package.json file. 
- Once inquirer and jest are installed, the user can run the application. 


## Usage
- To run the application, type "npm start" in the VS terminal. 
- Follow the prompts to input the information.
- Once the script is done running, a new logo.svg file with all user inputs is populated. To view the newly generated logo, the user must open it with a live server. 

## Example SVG files
N/A

## Tests
At this time no Unit Tests available to test the application functionalities. 

## Contribution
N/A

## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.

