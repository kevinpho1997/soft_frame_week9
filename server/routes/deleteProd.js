module.exports = function(db, app, ObjectID) {
    app.post('/prod/delete', function(req, res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        productID = req.body.productid;
        var objectid = new ObjectID(productID);
        const collection = db.collection('products');
        // delete item with the id
        collection.deleteOne({_id:objectid}, (err, docs) => {
            // send the new array of users
            collection.find({}).toArray((err, data) => {
                res.send(data);
            });
        });
    });
}