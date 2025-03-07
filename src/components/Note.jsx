import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Note.scss";

const Note = ({ note, onDelete }) => {
  // Destructure the note object to get its properties
  const { id, title, content, createdAt } = note;

  // Format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="note">
      <div className="note__header">
        {/* Add the title here */}
        <h3 className="note__title">{title}</h3>
        {/* Add the date here */}
        <span className="note__date">{formatDate(createdAt)}</span>
      </div>

      {/* Add the content here */}
      <p className="note__content">{content}</p>
      <div className="note__actions">
        {/* Add the Edit button using Link component */}
        <Link to={`/edit/${id}`} className="btn btn-primary">
          Edit
        </Link>
        {/* Add the Delete button */}
        <button onClick={() => onDelete(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
