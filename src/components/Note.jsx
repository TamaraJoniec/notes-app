import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Note.scss";

const Note = ({ note, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
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

  const shouldShowExpandButton = content.length > 150;
  const displayContent = isExpanded ? content : content.substring(0, 150);

  return (
    <article className="note" role="listitem" aria-labelledby={`note-title-${id}`}>
      <div className="note__content">
        <h2 id={`note-title-${id}`} className="note__title">
          {title}
        </h2>
        <time className="note__date" dateTime={createdAt} aria-label={`Created on ${formatDate(createdAt)}`}>
          {formatDate(createdAt)}
        </time>
        <div className="note__preview-container">
          <p className="note__preview">
            {displayContent}
            {!isExpanded && shouldShowExpandButton && "..."}
          </p>
          {shouldShowExpandButton && (
            <button className="note__expand-btn" onClick={() => setIsExpanded(!isExpanded)} aria-expanded={isExpanded} aria-controls={`note-content-${id}`}>
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
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
