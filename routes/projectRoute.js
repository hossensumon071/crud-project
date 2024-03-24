const express = require("express");

// router 
const router = express.Router()

// get all projects
router.get("/", (req, res) => {
    res.json({
        message: "Get All projects"
    })
}) 

// get single projects
router.get("/:id", (req, res) => {
    res.json({
        message: "get single Projects"
    })
})

// post a new project 
router.post("/", (req, res) => {
    res.json({
        message: "post a single project"
    })
})


// Delete a project 
router.delete("/:id", (req, res) => {
    res.json({
        message: "delete a project"
    })
})

// Update a project 
router.patch("/:id", (req, res) => {
    res.json({
        message: "update a project"
    })
})




module.exports = router