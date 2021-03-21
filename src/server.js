
const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

require('./dataBase/index');


const app = express();

app.use(express.json());



app.use(cors());

app.use(routes);

app.listen(3333, () => {
    console.log("Server started 🚀🚀");
});