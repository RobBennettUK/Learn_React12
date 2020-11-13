import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+987 654 321"
      email="jack@nowhere.com"
    />
    <input id="fname" placeholder="Enter your first name." />
  </div>,
  document.getElementById("root")
);

// React components are like custom HTML elements
// We can define the attributes of these components. They are known as properties in react! AKA Props
// We do this using a similar method. See above
// This card will now have a property called name that equals Beyonce
// You can access the property by passing 'props' into the function
// This means you can remove the hard values of these functions and replace them with the elements of the props
// This card now no longer contains specific informaiton. That means you can create as many different cards as you need with different information in
// Inside the custom component, it sees each of the additional information as a custom property. Thus you cannot apply styling here
