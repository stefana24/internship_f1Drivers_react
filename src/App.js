import "./App.css";
import { Header } from "./Components/Header";

import { Card } from "./Components/Card";

import { mockData } from "./utils/mockData.js";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="cards">
        {mockData.map((driver, index) => (
          <Card key={driver.number} driver={driver} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
