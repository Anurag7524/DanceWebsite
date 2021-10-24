const express = require('express');
const app = express();
const path = require("path")
const port = 8000;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:8000/contactDance');
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost/contactDance');
// }


// Define Mongoose schema
// const contactSchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
//   });

//   const Contact = mongoose.model('Contact', contactSchema);

// EXPRESS SPECIFIC STUFF
// For serving static files
app.use('/static', express.static('static'))
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
// Set the template engine as pug
app.set('view engine', 'pug')

// Set the view directory
app.set('views', path.join(__dirname, 'views'))

// ENDPOINTS
app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
});
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)
});
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
});

