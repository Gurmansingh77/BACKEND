const express = require("express");
const { createNotesController, allNotesController, getSingleNoteController , updateNotesController , deleteNoteController , updateNoteByPatchController } = require("../controllers/notes.controller");
const notesModel = require("../models/notes.model");
const router = express.Router()

// CREAT NOTE
router.post("/create" , createNotesController)

// READ NOTE
router.get("/allNotes" , allNotesController )

// READ ONE NOTE
router.get("/:id" , getSingleNoteController)

// UPDATE ONE NOTE
router.put("/:id" , updateNotesController)

// DELETE NOTE
router.delete("/:id" , deleteNoteController )

// UPDATE VIA PATCH
router.patch("/:id/single" , updateNoteByPatchController )

module.exports = router;
