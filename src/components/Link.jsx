import React from "react";

function Link(props) {
  return (
    <div className={props.containerClassName}>
      <img
        src={props.src}
        className={props.imgClassName}
        alt="link"
        style={props.style}
      />
      <p className={props.textClassName}>{props.text}</p>
    </div>
  );
}

export default Link;
