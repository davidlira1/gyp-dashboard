const express = require('express');
const app = express();
const port = 3000;
const project = require('../db/controllers/project');
const db = require('../db');

app.use(express.static('./public'));

app.get('/project/:street', (req, res) => {
    var { street } = req.params;
    project.get(street)
    .then(result => {
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(400).send(err);
    })
})



app.listen(port, (err) => {
    if (err) console.error(err);

    console.log(`Listening on port ${port} :)`);
})
