import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ShoppingList name="Mark" surname="patel" />
      <ShoppingList name="ketan" surname="umretiya" />
    </div>
  );
}
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>
          Shopping List for {this.props.name} {this.props.surname}{" "}
        </h1>

        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
