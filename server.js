const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Server get the request from http that has get method
app.get('/', (req, res) => {
    // Send text back and response
  res.send('Hello World!')
})

// Server request from the post method
app.post('/name', (req, res) => {
    console.log(req.body);
    res.send('Hello '+req.body.fname+' '+req.body.lname+' from POST');
    
})

// Get method from form
app.get('/name', (req, res) => {
  console.log(req.query.fname);
  // Send back the name typed by the user
  res.send('Hello '+req.query.fname+' '+req.query.lname);
})



// Server get the json api from http
app.get('/api/books', (req, res) => {
   const books = [
    {
    "title": "Learn Git in a Month of Lunches",
    "isbn": "1617292419",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    "status": "MEAP",
    "authors": ["Rick Umali"],
    "categories": []
    },
    {
    "title": "MongoDB in Action, Second Edition",
    "isbn": "1617291609",
    "pageCount": 0,
    "thumbnailUrl":
    "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    "status": "MEAP",
    "authors": [
    "Kyle Banker",
    "Peter Bakkum",
    "Tim Hawkins",
    "Shaun Verch",
    "Douglas Garrett"
    ],
    "categories": []
    },
    {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];

        // Server send back json as requested
    res.status(200).json({
        // my books array
        mybooks:books
    })
})


app.get('/test', (req, res) => {
    // send the file path
    res.sendFile(__dirname + '/index.html')
  })

app.get('/datarep', (req, res) => {
    // Send text back and response
    res.send('Hello from DataRep!')
  })

app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
    // Send text back and response
    res.send('Hello' +req.params.name);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})