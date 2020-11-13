import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

export default Card;

// {

//     <h2>Chuck Norris</h2>
//     <img
//       src="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//       alt="avatar_img"
//     />
//     <p>+918 372 574</p>
//     <p>gmail@chucknorris.com</p> */
// }
