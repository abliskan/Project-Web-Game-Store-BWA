const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Hello World!');
})

router.get('/users/:id', function (req, res) {
    const id = req.params.id
    if (Number(id) === 1) {
        const user = {
            id: 1,
            name: 'ricky suhanry',
            age: 25
        }
        res.send(user);
    } else {
        const user = {
            id: 2,
            name: 'deswon entinji',
            age: 23
        }
        res.send(user);
    }
})

router.get('/users/', function (req, res) {
    const name = req.query.name
    const aga = req.query.aga
    res.send(name + " " + age);
    
})


router.post('/users', function (req, res) {
    console.log("post");
    res.send('Got a POST request');
})

router.put('/user',  function (req, res) {
    res.send('Got a PUT request at /user');
})

router.delete('/user',  function (req, res) {
    res.send('Got a DELETE request at /user');
})

module.exports = router