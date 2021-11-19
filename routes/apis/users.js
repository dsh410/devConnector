const express = require('express');
const router = express.Router();


// route GET  endpoint: api/users
//  description: test routers
// access  Public if you need a token or not
router.get('/',(req,res)  => {
res.send("user route")

})

module.exports= router;