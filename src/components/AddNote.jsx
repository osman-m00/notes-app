import React, { useState, useRef, useContext } from "react";
import { NotesContext } from "../context/NotesContext"; // Import Context


const AddNote = () => {
    const [text, setText] = useState("");
    const { addNote } = useContext(NotesContext); // Get addNote function from context
    const inputRef = useRef(null);
    
    const handleSubmit= (e) => {
        e.preventDefault();
        if(text.trim()==="") return;
        addNote(text);
        setText("");
        inputRef.current.focus();
    }
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
    <input
      ref={inputRef}
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Enter a note..."
      className="border p-2 rounded w-full"
    />
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
      Add
    </button>
  </form>
  )
}

export default AddNote