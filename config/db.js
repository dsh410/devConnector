
const mongoose = require('mongoose');

 // needed in order to grab mongo URI
const config = require('config');

 // allows us to grab any value in default.json file by passing the value to the config.get() function 
const db = config.get('mongoURI')


 // allows us to connect to mongo data base and pass in the db value
// db gives back a promis 
 // so we use async await 
 // in most cases when we use async await we will use a try catch block
mongoose.connect(db)

 // async arrow function 
                                   
const connectDB = async  () => {

// use in case we cant connect we can see why it failed  
// in most cases when we use async await we will use a try catch block
    try {  
         await mongoose.connect(db);
         
          // just to let us know our database is connected
         console.log("mongodb connected")
    } catch(err) {

         // used to let us know if it failed to connect 
        console.log(err.message)

        // exit process with failure
        process.exit(1)

    }

}

module.exports = connectDB;