import "./styles.css";
import { useState } from "react";

function FancyButton(props) {
  return (
    <>
      <p>{props.title}</p>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </>
  );
}

function ResetButton(props) {
  return (
    <>
      <p>{props.title}</p>
      <button onClick={props.onClick}>{props.buttonText}</button>
    </>
  );
}

export default function App() {
  const [numberOfTodo, setNumberOfTodo] = useState(0);
  const increment = () => {
    setNumberOfTodo(numberOfTodo + 1);
  };
  const reset = () => {
    setNumberOfTodo(0);
  };

  const showAlert = () => alert("hello");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FancyButton
        title={"number of to-do: " + numberOfTodo}
        buttonText="Add"
        onClick={increment}
      />
      <ResetButton title="reset count" buttonText="reset" onClick={reset} />
    </div>
  );
}
