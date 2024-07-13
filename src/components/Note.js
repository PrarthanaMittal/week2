import React from 'react';

const Note = ({ note, onDelete, onEdit }) => {
  return (
    <div className="card my-2 note-card">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.content}</p>
        <button className="btn btn-danger" onClick={() => onDelete(note.id)}>Delete</button>
        <button className="btn btn-primary ml-2" onClick={() => onEdit(note)}>Edit</button>
      </div>
    </div>
  );
};

export default Note;
