# TAKE - A - NOTE

![Badge](https://img.shields.io/badge/license-MIT-green?style=plastic&logo=appveyor)

## Table of Content
#### * [Project Desctiption](#description)
#### * [Additional Requirement](#requirements)
#### * [Deployed Application](#application)
#### * [Demo Video](#video)
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


## Deployed Application
[Deployed TAKE-A-NOTE app](https://take-a-note.herokuapp.com/notes)


## Demo Video
[Demo Video](https://user-images.githubusercontent.com/118693401/226203653-d7911c68-ece2-4b5c-9699-0c7e3caeb1cd.mp4)


## Installation
- User needs to install [node.js (version 18.15.0 LTS)](https://nodejs.org/en/).
- To use the application user has to list [express (version 18.14.2)](https://www.npmjs.com/package/express) and [uuidv4 (version 6.2.13)](https://www.npmjs.com/package/uuidv4) as dependencies in the package.json file.
- To deploy the application, the user needs install Heroku (cloud based application) and connect the compliled code from GitHub to Heroku. For additinal instruction refer to the [Heroku Support Page](https://devcenter.heroku.com/articles/deploying-nodejs).


## Usage
- To run the application, the user must click on the link to the deployed application.
- Once application is opened, click on the "Get Started" button.
- To create a new Note:
  - Add a Note Title
  - Add the Note Text
  - click on the Save button at the top right corner of the screen.
- To view the existing notes:
  - select the note on the left side of the screen
- To delete the note:
  - select the note and click on the Recycle Bin icon next to it. 
- To return to the main screen:
  -  click on the Note Taker at the top left corner of the screen. 


## Tests
At this time no Unit Tests available to test the application functionalities. 


## Contribution
- Mini Project for Week 11
- AskBCS for assissting with troubleshooting


## License
Licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
