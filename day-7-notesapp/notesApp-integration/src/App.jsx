import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";
const App = () => {
  const [allNotes, setAllNotes] = useState([]);

  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [updateNote, setUpdateNote] = useState(null)
  const handelChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    if (updateNote) {
      // updatae api

      let res = await axios.put(
        `http://localhost:3000/notes/${updateNote}`,
        formValues,

      setUpdateNote(null)
      );
      setFormValues({
        title: "",
        description: "",
      });
    } else {
      // api call
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues,
      );

    }
  };

  let getAllNotes = async (e) => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      // console.log(res)
      setAllNotes(res.data.data);
      getAllNotes();
    } catch (error) {
      console.log(error, "in getAllnotes");
    }
  };

  let deleteNote = async (id) => {
    try {
      let res = await axios.delete(`http://localhost:3000/notes/${id}`);
      console.log(res);
      getAllNotes();
    } catch (error) {
      console.log(error);
    }
  };

  let notForUpdate = (note) => {
    console.log(note);
    setUpdateNote(note._id)
    setFormValues({
      title: note.title,
      description: note.description,
    });
  };

  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <div className="h-screen p-4 flex flex-col gap-5 bg-black">
      <h1 className="text-3xl font-bold text-white">NOTES APP</h1>

      <form
        onSubmit={handelSubmit}
        className="flex flex-col w-70 p-10 border border-white rounded-xl gap-5 text-white"
      >
        <input
          name="title"
          onChange={handelChange}
          value={formValues.title}
          className="p-2 outline-none text-xl rounded border border-white text-white"
          type="text"
          placeholder="Title"
        />
        <input
          name="description"
          onChange={handelChange}
          value={formValues.description}
          className="p-2 outline-none text-xl rounded border border-white text-white"
          type="text"
          placeholder="Description"
          minLength={20}
          required
        />

        <button
         className="bg-blue-600 rounded p-5 text-white">
          {
            updateNote ? "Update Note" : "Create Note"
          }
        </button>
      </form>

      <div className="flex  justify-between gap-5 flex-wrap ">
        {allNotes.map((note) => {
          return (
            <NoteCard
              notForUpdate={notForUpdate}
              note={note}
              key={note._id}
              deleteNote={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
