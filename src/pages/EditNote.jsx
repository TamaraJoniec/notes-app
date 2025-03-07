import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import "../styles/components/EditNote.scss";

const EditNote = () => {
  // Get navigation function and URL parameters
  const navigate = useNavigate();
  const { id } = useParams();

  // Get notes from localStorage
  const [notes, setNotes] = useLocalStorage("notes", []);

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  // Load note data if editing
  useEffect(() => {
    if (id) {
      const note = notes.find((n) => n.id === id);
      if (note) {
        setFormData({
          title: note.title,
          content: note.content,
        });
      }
    }
  }, [id, notes]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      // Edit existing note
      setNotes(notes.map((note) => (note.id === id ? { ...note, ...formData, updatedAt: new Date().toISOString() } : note)));
    } else {
      // Create new note
      const newNote = {
        id: Date.now().toString(),
        ...formData,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setNotes([...notes, newNote]);
    }

    navigate("/");
  };

  return (
    <div className="edit-note">
      <div className="edit-note__header">
        <h1>{id ? "Edit Note" : "Create New Note"}</h1>
        <button onClick={() => navigate("/")} className="btn btn-danger">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="edit-note__form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" value={formData.content} onChange={handleChange} rows="10" required />
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? "Update Note" : "Create Note"}
        </button>
      </form>
    </div>
  );
};

export default EditNote;
