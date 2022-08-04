import "./App.css";
import { Header } from "./Components/Header";

import { Card } from "./Components/Card";

import { mockData } from "./utils/mockData.js";
import { useState } from "react";

function App() {
  const [sortDrivers, setSortedDrivers] = useState(mockData);

  function handleSort() {
    const mockDataSorted = [...sortDrivers].sort((a, b) => {
      return a.points > b.points
        ? -1
        : a.points === b.points
        ? a.firstName > b.firstName
          ? 1
          : -1
        : 1;
    });
    setSortedDrivers(mockDataSorted);
  }

  return (
    <div className="App">
      <Header />

      <div className="cards" onLoad={handleSort}>
        {sortDrivers.map((driver, index) => (
          <Card key={driver.number} driver={driver} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
