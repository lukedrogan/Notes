const router = require("express").Router();

router.get("/api/notes", (request, response) => {
    console.log("get request made")
})

router.post("/api/notes", (request, response) => {
    console.log("post request made")
})

module.exports = router;