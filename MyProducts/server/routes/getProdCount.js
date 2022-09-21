module.exports = function(db, app) {
    app.get('prod/count', function(req, res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        const collection = db.collection('products');
        collection.find({}).count((err, count) => {
            res.send({'count':count});
        });
    });
}