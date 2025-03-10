import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Note from "../components/Note";
import "../styles/pages/Home.scss";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(searchQuery.toLowerCase()) || note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home">
      <div className="home__container">
        <header className="home__header">
          <h1>My Notes</h1>
          <Link to="/new" className="btn" aria-label="Create new note">
            Create New Note
          </Link>
        </header>

        <div className="home__search">
          <input
            type="search"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search notes"
            aria-controls="notes-list"
            aria-describedby="search-description"
          />
          <span id="search-description" className="sr-only">
            Search through your notes by title or content
          </span>
        </div>

        {filteredNotes.length === 0 ? (
          <div className="home__empty" role="status" aria-live="polite">
            {searchQuery ? "No notes found matching your search." : "No notes yet. Create your first note!"}
          </div>
        ) : (
          <div className="home__notes" id="notes-list" role="list" aria-label="Notes list">
            {filteredNotes.map((note) => (
              <Note key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
