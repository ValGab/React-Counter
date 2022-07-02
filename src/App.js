import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import plus from "./assets/img/plus.png";
import minus from "./assets/img/minus.png";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="count">
          {counter === 0 ? null : (
            <img onClick={decrement} src={minus} alt="minus" />
          )}
          <div>
            <p>{counter}</p>
          </div>
          {counter === 10 ? null : (
            <img onClick={increment} src={plus} alt="plus" />
          )}
        </div>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </main>
    </div>
  );
}

export default App;
