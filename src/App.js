import "./App.css";
import { Header } from "./Components/Header";

import { Card } from "./Components/Card";

import { mockData } from "./utils/mockData.js";

function App() {
  const mockDataSorted = [...mockData].sort((a, b) =>
    a.points > b.points
      ? -1
      : a.points === b.points
      ? a.firstName > b.firstName
        ? 1
        : -1
      : 1
  );
  return (
    <div className="App">
      <Header />

      <div className="cards">
        {mockDataSorted.map((driver, index) => (
          <Card key={driver.number} driver={driver} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
