const express = require('express');
const router = express.Router();


// route GET  endpoint: api/post
//  description: test route
// access  Public - if you need a token or not
router.get('/',(req,res)  => {
res.send("post route")

})

module.exports= router;