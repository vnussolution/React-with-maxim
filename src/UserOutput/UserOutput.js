import React from "react";
import "./UserOutput.css";

const userOutput = props => (
  <div className="UserOutput">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia cum at
      neque laborum vel rerum vitae! Veritatis eligendi aliquid unde officiis?
      Atque, quos maiores! Nulla qui adipisci necessitatibus aliquam quasi!
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, et.</p>
    <h1>username : {props.username}</h1>
  </div>
);

export default userOutput;
