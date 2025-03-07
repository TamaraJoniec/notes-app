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
    <article className="note" role="listitem" aria-labelledby={`note-title-${id}`}>
      <div className="note__content">
        <h2 id={`note-title-${id}`} className="note__title">
          {title}
        </h2>
        <time className="note__date" dateTime={createdAt} aria-label={`Created on ${formatDate(createdAt)}`}>
          {formatDate(createdAt)}
        </time>
        <p className="note__preview">{content.length > 150 ? `${content.substring(0, 150)}...` : content}</p>
      </div>
      <div className="note__actions" role="group" aria-label="Note actions">
        <Link to={`/edit/${id}`} className="btn btn--secondary" aria-label={`Edit note: ${title}`}>
          Edit
        </Link>
        <button className="btn btn--danger" onClick={() => onDelete(id)} aria-label={`Delete note: ${title}`}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Note;
