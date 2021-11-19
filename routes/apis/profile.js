const express = require('express');
const router = express.Router();


// route GET  endpoint: api/pofile
//  description: test route
// access  Public - if you need a token or not
router.get('/',(req,res)  => {
res.send("profile route")

})

module.exports= router;