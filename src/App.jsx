import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Players from "./Players";
import Friends from "./Friendes";

function App() {
  const [count, setCount] = useState(0);

  let handlerClick = (num) => {
    alert(num * 3);
  };

  return (
    <>
      {<Friends></Friends>}
      {<Players></Players>}
      <h3>React Core Concept</h3>
      <button
        onClick={() => {
          handlerClick(30);
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
