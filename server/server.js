const express = require('express');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const funcOrder = require('./routes/dbOperations/funcOrder');
app.use(cors());
app.use(bodyParser.json());

MongoClient.connect(url, {poolSize:10, useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if (err) {return console.log(err)}
    const dbName = 'mydb';
    const db = client.db(dbName);
    // const collecName = 'products';

    require('./routes/addProd')(db, app);
    require('./routes/getProd')(db, app);
    require('./routes/getProdCount')(db, app);
    require('./routes/getProdList')(db, app);
    require('./routes/removeProd')(db, app);
    require('./routes/updateProd')(db, app);
    require('./routes/validID')(db, app);

    require('./listen')(http);
});

// client.connect(function(err) {
//     console.log("Connected to MongoDB");

//     const collection = db.collection(collecName);
//     funcOrder(client, collection);
//     client.close();
// });