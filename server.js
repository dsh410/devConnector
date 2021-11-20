const express = require('express');
const connectDB = require('./config/db');
const app = express();
const connectdb = require("./config/db");



connectDB();
// this is how we connect our route to our server
// the the file/route path thats inside the require tells the server that its the same path in that folder 
app.use("/api/users", require('./routes/apis/users'))
app.use("/api/auth", require('./routes/apis/auth'))
app.use("/api/post", require('./routes/apis/post'))
app.use("/api/profile", require('./routes/apis/profile'))

app.get( '/' , (req,res) => {
    res.send("api running")
})

// what this would do it will look for a environment variable called port but locally we wont to set it to port 5000
const PORT = process.env.PORT || 5000 

app.listen(PORT , () => {
console.log(`server is running on port ${PORT}`)

})