const express = require('express');
const router = express.Router();
const {check , validatorResult, validationResult} = require("express-validator")


// route POST  endpoint: api/users
//  description: register user
// access  Public if you need a token or not
// in oder for this to wark we need middleware for the body parser - automatically comes with express
// .mot().isEmpty() is there if we want the field to be there and not empty 
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','please inculde a valid email').isEmail(),
      check('password','please enter a password of 6 or more characters').isLength({min:6}),
],(req,res)  => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()})
   }
res.send("user route")

})

module.exports= router;