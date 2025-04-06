import React, { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h1>{note.id}</h1>
          <p>{note.text}</p>
          {/* Format and show the creation time of the note */}
          <small>
            {new Date(note.id).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
