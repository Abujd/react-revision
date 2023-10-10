import React from 'react'
import ReactDOM from 'react-dom/client'

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },   // this is used to add attribute to our element
//   "Hello from react"
// );

// Nested elements

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This the h1 heading"),
    React.createElement("h2", { id: "heading2" }, "This the h2 heading"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
