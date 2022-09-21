module.exports = function(db, app, ObjectID) {
    app.post('/prod/update', function(req, res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        // this objectId thing may not be needed if a primary key is being managed by me
        var objectId = new ObjectID(product.objid);
        const collection = db.collection('products');
        collection.updateOne({_id:objectid},{$set: {
            name: product.name, 
            description: product.description, 
            price: product.description,
            units: product.units
        }},()=>{
            res.send({'ok':product.objid});
        });
    });
}