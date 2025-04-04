import React, { createContext, useState, useEffect } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({children}) => {
    const [notes, setNotes] = useState([]);


    //this useEffect is to load notes from the local storage and set them to our state
    useEffect(()=>{
        const savedNotes = JSON.parse(localStorage.getItem("notes") || []);
        setNotes(savedNotes);
    }, []);

    //this useEffect is to save notes whenever changes are made
    useEffect(()=>{
        localStorage.setItem("notes", JSON.stringify(notes));

    }, [notes]);

    //the functions that will modify notes
    const addNote = (text) =>{setNotes([...notes, {id:Date.now, text}])};
    const deleteNote = (id) => setNotes(notes.filter((note)=> note.id!==id));
    const editNote = (id, newText) => {
        setNotes(notes.map((note)=>{note.id==id ? {...note, text: newText} : note}))}

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {children}
        </NotesContext.Provider>
    );
};