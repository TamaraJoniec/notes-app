import React, { useState } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import useLocalStorage from "../hooks/useLocalStorage";
import "../styles/pages/Home.scss";

const Home = () => {
  // Get notes from localStorage
  const [notes, setNotes] = useLocalStorage("notes", []);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");

  // Handle note deletion
  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Filter notes based on search term
  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(searchTerm.toLowerCase()) || note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home__header">
        <h1>My Notes</h1>
        <Link to="/new" className="btn btn-primary">
          Create New Note
        </Link>
      </div>

      <div className="home__search">
        <input type="text" placeholder="Search notes..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="form-group__input" />
      </div>

      <div className="home__notes">
        {filteredNotes.length === 0 ? (
          <p className="home__empty">No notes found. Create your first note!</p>
        ) : (
          filteredNotes.map((note) => <Note key={note.id} note={note} onDelete={handleDelete} />)
        )}
      </div>
    </div>
  );
};

export default Home;
