import React from "react";
import ReactDOM from "react-dom";

// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Natalie",
//       animal: "Dog",
//       breed: "Shepard",
//     }),
//     React.createElement(Pet, {
//       name: "Bubbles",
//       animal: "Fish",
//       breed: "Beta",
//     }),
//     React.createElement(Pet, {
//       name: "Bambi",
//       animal: "Deer",
//       breed: "Whitetail",
//     }),
//   ]);
// };
