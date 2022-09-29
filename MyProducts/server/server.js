const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://127.0.0.1:27017';
var ObjectId = require('mongodb').ObjectId
// const client = new MongoClient(url);
// const funcOrder = require('./routes/dbOperations/funcOrder');
app.use(cors());
app.use(bodyParser.json());

MongoClient.connect(url, {maxPoolSize:50, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err);}
    const dbName = 'mydb';
    const db = client.db(dbName);
    const PORT = 3000;
    const server = require('./listen.js');

    // const collecName = 'products';

    require('./routes/addProd')(db, app);
    // require('./routes/getProd')(db, app, ObjectId);
    require('./routes/getProdCount')(db, app);
    require('./routes/getProdList')(db, app);
    require('./routes/deleteProd')(db, app);
    require('./routes/updateProd')(db, app);
    require('./routes/validateID')(db, app);

    server.listen(http, PORT);

});

module.exports = app

// client.connect(function(err) {
//     console.log("Connected to MongoDB");

//     const collection = db.collection(collecName);
//     funcOrder(client, collection);
//     client.close();
// });