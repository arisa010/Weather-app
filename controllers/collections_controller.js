const express = require("express")
const router = express.Router()

const Collection = require('../models/collection_model');

router.post("/create", (req, res) => {
    const top_id = req.query.top_id;
    const bottom_id = req.query.btm_id;
    const shoe_id = req.query.shoe_id;
    const weather = req.query.weather;
    const name = req.body.collection_input;
    const user_id = 1;


    Collection.create(name, weather, user_id, top_id, bottom_id, shoe_id)
        .then(name => res.json(name))
  });


router.get('/read', (req, res)=> {
    const collection_id = req.query.id;
    Collection.findCollectionByCollectionId(collection_id).then(collection_id => res.json(collection_id))

}
);


router.post('/update', (req, res) => {
    const id = req.query.id;
    const name = req.body.collection_input;

    Collection.updateById(id, name)
        .then(() => res.json({ success: true }))
    });

78

router.delete('/delete', (req, res)=> {
    const collection_id = req.query.id;
    Collection.deleteById(collection_id).then(collection_id => res.json(collection_id))

}
);

router.get('/', (req, res)=> {
    const user_id = 1;
    Collection.findCollectionByUserId(user_id).then(user_id => res.json(user_id))

}
);


  
module.exports = router