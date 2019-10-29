import React from "react";

function Card(props) {
  if (props.view === "saved") {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image}></img>
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
              <strong>Link:</strong> <a href={props.link}>{props.link}</a>
            </li>
          </ul>
        </div>
        <span onClick={() => props.bookDelete(props.id)} className="delete">
          𝘅
        </span>
      </div>
    );
  } else {
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
        <span onClick={() => props.bookSave(props.id)} className="save"> o </span>
      </div>
    );
  }
}

export default Card;
