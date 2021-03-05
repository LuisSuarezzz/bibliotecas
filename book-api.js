const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

//Libros
let books = [];

app.use(cors());

//configuracion body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    //...
    console.log(book);
    books.push(books);

    res.send('book is added to the database');
});

app.listen(port, () => console.log('Hello world app listening on port ${port}!'));