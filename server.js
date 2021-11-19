const express = require('express');
const app = express();

app.get( '/' , (req,res) => {
    res.send("api running")
})

const PORT = process.env.PORT || 5000 // what this would do it will look for a environment variable called port but locally we wont to set it to port 5000

app.listen(PORT , () => {
console.log(`server is running on port ${PORT}`)

})