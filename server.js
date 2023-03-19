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

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route to a specific note
app.get('api/notes', (req, res) =>{
    fs.readFile(path.join(__dirname, "./db/db.json", 'utf8'), (err, data) => {
        if (err) {
          console.error(err)}
        res.json(JSON.parse(data));
        });
});

// POST route for a new note
app.post('api/notes', (req, res) =>{
    console.log(req.body);

    const {title, text} = req.body;

    if (req.body){
        const newNote = {
            title,
            text
        };
        newNote.id = uuidv4();

        fs.readFile(path.join(__dirname, "./db/db.json", 'utf8'), (err, data) => {
            if (err) {
              console.error(err);
            } 

            const parsedData = JSON.parse(data);
            parsedData.push(newNote);

            fs.writeFile(path.join(__dirname, "./db/db.json"), JSON.stringify(parsedData, null, 2), (err) => {
                if (err) {
                    console.error(err);
                  } 
                })
        
        res.json(newNote);
        })
        } else {
            res.error('Error in Posting the feedback');
        }
    });



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
