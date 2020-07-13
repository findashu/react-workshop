import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "Cockatail",
    }),
    React.createElement(Pet, { name: "Doink", animal: "cat", breed: "Mixed" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
