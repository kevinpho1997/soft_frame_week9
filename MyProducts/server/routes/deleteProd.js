module.exports = function(db, app) {
    // var ObjectId = require('mongodb').ObjectId
    app.post('/prod/delete', function(req, res){
        // console.log("product delete route")
        if (!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        console.log(productID);
        // var objid = new ObjectId(productID);
        // console.log(objid);
        const collection = db.collection('products');
        // delete item with the id
        collection.deleteOne({id:productID}, (err, docs) => {
            // send the new array of users
            collection.find({}).toArray((err, data) => {
                res.send(data);
            });
        });
    });
}