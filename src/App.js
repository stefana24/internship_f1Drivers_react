import "./App.css";
import { Header } from "./Components/Header";

import { Card } from "./Components/Card";

import { mockData } from "./utils/mockData.js";
import { useEffect, useState } from "react";

function App() {
  const [sortDrivers, setSortedDrivers] = useState(mockData);

  function handleSort(newList) {
    const mockDataSorted = [...newList].sort((a, b) => {
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

  function increasePoints(index){
    const newList = sortDrivers.map((driver,idx)=>{
  
      if(idx===index){
        driver.points+=1
      }
      return driver
    })
    handleSort(newList)
  }

  useEffect(()=>{
    handleSort(sortDrivers)
  },[])

  return (
    <div className="App">
      <Header />

      <div className="cards">
        {sortDrivers.map((driver, index) => (
          <Card key={driver.number} driver={driver} index={index} increasePoints={increasePoints} />
        ))}
      </div>
    </div>
  );
}

export default App;
