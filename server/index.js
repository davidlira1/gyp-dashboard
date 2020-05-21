const express = require('express');
const app = express();
const port = 3000;
const query = require('../db/queries');
const db = require('../db');

app.use(express.static('./public'));

app.get('/companies/top10bidders', (req, res) => {
    query.getTop10Bidders()
    .then(results => {
        res.status(200).send(results.rows);
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

app.get('/projects/:page/:street', (req, res) => {
    var { page, street } = req.params;
    query.getProjects(page, street)
    .then(results => {
        res.status(200).send(results);
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

app.get('/project/:street', (req, res) => {
    var { street } = req.params;
    query.getProject(street)
    .then(result => {
        console.log(result.rows)
        res.status(200).send(result.rows);
    })
    .catch(err => {
        res.status(400).send(err);
    })
})

app.listen(port, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})



