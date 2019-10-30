import React from "react";

function Card(props) {
  if (props.view === "saved") {
    return (
      <div className="card mb-3">
        <div className="img-container p-3">
          <img alt={props.title} src={props.image} className="float-left mr-3"/>
          <ul className="list-group ml-3">
            <li className="list-group-item active bg-danger">
              <strong>{props.title}</strong> by <strong>{props.author}</strong>
              <button onClick={() => props.bookDelete(props.id)} className="save">&times;</button>
            </li>
            <li className="list-group-item">
              <strong>Synopsis:</strong> {props.description}
            </li>
            <li className="list-group-item">
              <strong>Source:</strong> <a href={props.link}>Google Books</a>
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card mb-3">
        <div className="img-container p-3">
          <img alt={props.title} src={props.image} className="float-left mr-3"/>
          <ul className="list-group ml-3">
            <li className="list-group-item active bg-danger">
              <strong>{props.title}</strong> by <strong>{props.author}</strong>
              <button onClick={() => props.bookSave(props.id)} className="save">★</button>
            </li>
            <li className="list-group-item">
              <strong>Synopsis:</strong> {props.description}
            </li>
            <li className="list-group-item">
              <strong>Source:</strong> <a href={props.link}>Google Books</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card;
