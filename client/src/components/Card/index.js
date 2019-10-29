import React from "react";
import "./style.css";

function BooksCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Author:</strong> {props.author}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>href:</strong> {props.link}
          </li>
        </ul>
      </div>
      <span onClick={() => props.view(props.id)} className="view"> o </span>
      <span onClick={() => props.delete(props.id)} className="delete">
        𝘅
      </span>
    </div>
  );
}

export default BooksCard;
