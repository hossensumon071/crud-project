const express = require("express");
const { postProject, getAllProjects, getSingleProject } = require("../controllers/projectController");

// router
const router = express.Router();

// get all projects
router.get("/", getAllProjects);

// get single projects
router.get("/:id", getSingleProject);

// post a new project
router.post("/", postProject);

// Delete a project
router.delete("/:id", (req, res) => {
  res.json({
    message: "delete a project",
  });
});

// Update a project
router.patch("/:id", (req, res) => {
  res.json({
    message: "update a project",
  });
});

module.exports = router;
