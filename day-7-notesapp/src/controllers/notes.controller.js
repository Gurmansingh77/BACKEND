const notesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    let { title, description } = req.body;
    let newNote = await notesModel.create({
      title,
      description,
    });

    return res.status(201).json({
      message: "note created successfully",
      data: newNote,
    });
  } catch (error) {
    console.log("error from create API", error);
    return res.status(500).json({
      message: "Internet server error",
    });
  }
};

const allNotesController = async (req, res) => {
  try {
    let allNotes = await notesModel.find();
    res.status(200).json({
      message: "all notesfetched",
      data: allNotes,
    });
  } catch (error) {
    console.log("error is from allNotes API", error);
    return res.status(500).json({
      message: "Internet server error",
    });
  }
};

const getSingleNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;
    let note = await notesModel.findById(noteId);

    res.status(201).json({
      message: "note fetched successfully",
      data: note,
    });
  } catch (error) {
    console.log("error is from get single not API", error);
    return res.status(500).json({
      message: "Internet server error",
    });
  }
};

const updateNotesController = async (req, res) => {
  let noteId = req.params.id;
  let body = req.body;

  let updateNote = await notesModel.findByIdAndUpdate(noteId, body, {
    new: true,
  });

  return res.status(200).json({
    message: "note updated successfully",
    data: updateNote,
  });
};

const deleteNoteController = async (req, res) => {
  try {
    let noteId = req.params.id;

    await  notesModel.findByIdAndDelete(noteId);

    return res.status(200).json({
      message: "Note deleted successfully",
    });
    
  } catch (error) {
    console.log("error in delete note API", error);
    return res.status(500).json({
      message: "Internet server error",
    });
  }
};

const updateNoteByPatchController = async(req , res) => {
    try {
        let noteId = req.params.id
        let body = req.body

        let updatedNote = await notesModel.findByIdAndUpdate(noteId,body,{new:true})

        return res.status(201).json({
            message:"note updated successfully",
            data:updatedNote
        })
    } catch (error) {
        console.log("error from patch update API" , error)
        return res.status(500).json({
            message:"Internet server error"
        })
    }
}

module.exports = {
  createNotesController,
  allNotesController,
  getSingleNoteController,
  updateNotesController,
  deleteNoteController,
  updateNoteByPatchController
};
