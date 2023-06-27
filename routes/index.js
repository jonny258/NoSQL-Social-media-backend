const router = require("express").Router();

const apiRoutes = require("./api");
router.use("/api", apiRoutes);

module.exports = router;

//This makes all the files in the api folder need api before them
