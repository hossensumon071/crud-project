require("dotenv").config()
const express = require("express")
const app = express()

// port 
const port = process.env.PORT || 4000

// listen for request 
app.listen(4000, () => {
    console.log(`listening on port ${port}`)
}) 