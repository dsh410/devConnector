const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt= require('bcryptjs')
const {check , validatorResult, validationResult} = require("express-validator")

const User = require("../../models/User");


// route POST  endpoint: api/users
//  description: register user
// access  Public if you need a token or not
// in oder for this to wark we need middleware for the body parser - automatically comes with express
// .mot().isEmpty() is there if we want the field to be there and not empty 
router.post('/',[
    check('name','Name is required').not().isEmpty(),
    check('email','please inculde a valid email').isEmail(),
      check('password','please enter a password of 6 or more characters').isLength({min:6}),
],
async (req,res)  => {
   const errors = validationResult(req);
   if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()})
   }

   //destructure req.body
const {name,email,password} = req.body

try {
    
// see if user exsits 
// if they  user exsit send a error
    // we need to grab the user
    let user = await User.findOne({email})
    if(user) {
        res.status(400).json({errors:[{msg:'user already exsits'}]})
    }

// get users gravatar 
const avatar = gravatar.url(email,{
    s:'200',
    r:'pg',
    d:'mm'
})

user = new User({
    name,
    email,
    avatar,
    password
})

// encrypt password
    // before we can encrypt it we must create a salt to encrypt it with
    // bcrypt.genSalt returns a promis thats way we put a await in front of it
    // we pass in whats called the rounds(10) (acorrding to the docs) the more you have the more secur be the slower it is
    //now the salt is created
const salt = await bcrypt.genSalt(10);

// now we need to hash the password
    // hash takes 2 args 
        // the text of the password
        // then the salt
user.password = await bcrypt.hash(password,salt);

// now we have to save the user to the data base.
await user.save();


// return jsonwebtoken
    res.send("user registered");

        } catch(err) {
            console.error(err.message);
            res.status(500).send('server error')
    }
 });

module.exports= router;