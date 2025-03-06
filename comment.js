//create web server
const express = require('express');
const app = express();

//middleware
app.use(express.json());

//array to store comments
const comments = [
    {message: "Hello"},
    {message: "Hi"}
];

//GET
app.get('/comments', (req, res) => {
    res.send(comments);
});

//POST
app.post('/comments', (req, res) => {
    const comment = {message: req.body.message};
    comments.push(comment);
    res.send(comment);
});

//PUT
app.put('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.message === parseInt(req.params.id));
    comment.message = req.body.message;
    res.send(comment);
});

//DELETE
app.delete('/comments/:id', (req, res) => {
    const comment = comments.find(c => c.message === parseInt(req.params.id));
    const index = comments.indexOf(comment);
    comments.splice(index, 1);
    res.send(comment);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

//run the server
//node comment.js
//open postman and test the API
//GET http://localhost:3000/comments
//POST http://localhost:3000/comments
//PUT http://localhost:3000/comments/1
//DELETE http://localhost:3000/comments/1