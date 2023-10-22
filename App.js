
  /* <div id="parent">
<div id="child">
<h1>Hello I'm heading</h1>
</div>
</div> */


// const parent = React.createElement(
//   "div",
//   { id: parent },
//   React.createElement(
//     "div",
//     { id: child },
//     React.createElement("h1", {}, "I'm h1 tag")
//   )
// );

const heading = React.createElement("h1", {id: parent}, "hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading)

root.render(heading);



