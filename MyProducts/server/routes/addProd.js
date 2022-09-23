module.exports = function(db,app){
    app.post('/prod/add', function(req,res){
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        const collection = db.collection('products');
        // check for duplicate ids
        collection.find({'id': product.id}).count((err, count)=>{
            if (count == 0) {
                collection.insertOne(product, (err, dbRes)=>{
                    if (err) throw err;
                    // sends no. of products inserted to client w/ no error msg
                    let num = dbRes.insertedCount;
                    res.send({'num':num, err:null});
                });
            } else {
                // sends error if item already exists
                res.send({num:0, err:"Duplicate item"});
            };
        });
    });
};