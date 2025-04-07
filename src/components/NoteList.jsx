import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteList = () => {
  const { notes, deleteNote, editNote } = useContext(NotesContext);
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState("");

  const editNoteUtility = (note) => {
    setEditingId(note.id);
    setNewText(note.text);
  };

  const handleEditEvent = (e) => {
    setNewText(e.target.value);
  };

  const submitEdit = () => {
    editNote(editingId, newText);
    setEditingId(null);
  };

  return (
    <div>
      {notes.map((note) => (
        <div className="border mt-5 mb-5" key={note.id}>
          <h1>{note.id}</h1>

          {/* Conditional rendering based on the id */}
          {editingId === note.id ? (
            <div>
              <input
                className="border"
                type="text"
                value={newText}
                onChange={handleEditEvent}
              />
              <button onClick={submitEdit} className="border">
                Save
              </button>
            </div>
          ) : (
            <p>{note.text}</p>
          )}

          {/* Format and show the creation time of the note */}
          <small>
            {new Date(note.id).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>

          <div className="flex space-x-2">
            <div className="border-2 w-20 flex justify-center items-center">
              <button onClick={() => deleteNote(note.id)}>
                Delete Note
              </button>
            </div>
            <div className="border-2 w-20 flex justify-center items-center">
              <button onClick={() => editNoteUtility(note)}>
                Edit Note
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
