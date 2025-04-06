import React from "react";
import { NotesProvider } from "./context/NotesContext"; // Import Context Provider
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <NotesProvider>
      <AddNote/>
      <NoteList/>
    </NotesProvider>
  )
}

export default App