import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import ToggleSwitch from './components/ToggleSwitch';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const saveNote = (note) => {
    if (noteToEdit) {
      setNotes(notes.map((n) => (n.id === note.id ? note : n)));
      setNoteToEdit(null);
    } else {
      setNotes([...notes, note]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (note) => {
    setNoteToEdit(note);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        <h1>My Notes</h1>
        <ToggleSwitch toggleTheme={toggleTheme} theme={theme} />
      </div>
      <NoteForm saveNote={saveNote} noteToEdit={noteToEdit} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
};

export default App;
