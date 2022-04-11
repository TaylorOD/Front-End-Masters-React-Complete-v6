const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
      React.createElement("h1", {}, "Adopt Me!"),
      React.createElement(Pet, {name: "Natalie", animal: "Dog", breed: "Shepard"}),
      React.createElement(Pet, {name: "Bubbles", animal: "Fish", breed: "Beta"}),
      React.createElement(Pet, {name: "Bambi", animal: "Deer", breed: "Whitetail"}),
    ]
  )
}

ReactDOM.render(React.createElement(App), document.getElementById("root"))