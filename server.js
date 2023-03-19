// Starter pack code for Express.JS

const express = require('express');
const path = require('path');
const fs = require('fs');
const { clog } = require('./clog');
const { v4: uuidv4 } = require('uuid');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Custom Middleware to show the Get, Post, and Delete in console log
app.use(clog);

app.use(express.static('public'));

// callback function that gets executed when a client makes a GET request to Home page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// callback function that gets executed when a client makes a GET request to Notes Page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// callback function that gets executed when a client makes a GET request to a specific note
app.get('/api/notes', (req, res) =>{
  // method to read the contents from db.json file in the "./bd/" directory.
    fs.readFile("./db/db.json", (err, data) => {
        if (err) {
          console.error(err)}
        //when the file is read, the contents are resturned as a JSON response, and then they are parsed to convert data to JS object. 
        res.json(JSON.parse(data));
        });
});

// callback function that gets executed when a client makes a POST request to crete a new note
app.post('/api/notes', (req, res) =>{
    //deconstructing the req.body object
    const {title, text} = req.body;

    if (req.body){
        //creating a new Note object
        const newNote = {
            title,
            text
        };
        // assigning a unique id property to the newNote object
        newNote.id = uuidv4();

        // method to read the contents from db.json file in the "./bd/" directory.
        fs.readFile("./db/db.json", (err, data) => {
            if (err) {
              console.error(err);
            } 

            //parsing the JSON response into the JS object, then parseData array is modified to include the newNote object. 
            const parsedData = JSON.parse(data);
            parsedData.push(newNote);

            // method to write the contents from updated pasreData array into the "./bd/" directory.
            fs.writeFile("./db/db.json", JSON.stringify(parsedData, null, 2), (err) => {
                if (err) {
                    console.error(err);
                  } 
                })

        // JSON response to the client with data from the newNote object. 
        res.json(newNote);
        })
        } else {
            res.error('Error in Posting the feedback');
        }
    });

// callback function that gets executed when a client makes a DELETE request to a remove a specific note
app.delete('/api/notes/:id', (req, res) => {

  // retrieves the parameters from the URL of HTTPS request. Based on this, server is able to identify the note that user wants to delete.
  const noteId = req.params.id;

  // method to read the contents from db.json file in the "./bd/" directory.
  fs.readFile("./db/db.json", (err, data) => {
    if (err) {
      console.error(err);
    }

    var parsedData = JSON.parse(data);
    //filter method is used to create a new array to contain only elements of the original array that meet the specified criteria.
    parsedData = parsedData.filter((note) => note.id !== noteId);

    // method to write the contents from updated pasreData array into the "./bd/" directory.
    fs.writeFile("./db/db.json", JSON.stringify(parsedData, null, 2), (err) => {
      if (err) {
        console.error(err);
      } 
      res.json(`Item has been deleted 🗑️`);
     });
    });
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
