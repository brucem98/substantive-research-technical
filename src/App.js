import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [interactions, setInteractions] = useState([]);
  const [sectorNames, setSectorNames] = useState([]);
  const [sectorCounts, setSectorCounts] = useState([]);

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

  useEffect(() => {
    const output = {};
    for (const { name } of interactions) {
      output[name] ??= 0;
      output[name] += 1;
    }
    const names = Object.keys(output);
    setSectorNames(names);

    const counts = names.map((name) => output[name]);
    setSectorCounts(counts);
  }, [interactions]);

  console.log(sectorCounts, sectorNames);

  return <h1>Hello World!</h1>;
}

export default App;
