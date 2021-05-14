const router = require("express").Router();
const db = require("../db/db");
const dbFunc = require("../db/db")

router.get("/api/notes", (request, response) => {
    dbFunc.getAllNotes().then((notes) => {
       return response.json(notes)
    }).catch((error) => {
        response.status(500).json(error)
    })
})

router.post("/api/notes", (request, response) => {
    console.log("post request made")
})

module.exports = router;