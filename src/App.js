import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [interactions, setInteractions] = useState([]);

  const fetchInteractions = async () => {
    try {
      let response = await fetch("https://substantive.pythonanywhere.com/");
      let data = await response.json();
      setInteractions(data.interactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchInteractions();
  }, []);

  const output = {};
  for (const { name } of interactions) {
    output[name] ??= 0;
    output[name] += 1;
  }

  console.log(output);

  return <h1>Hello World!</h1>;
}

export default App;
