import React, { useState } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { _id: 1, value: 5 },
    { _id: 2, value: 3 },
    { _id: 3, value: 0 },
    { _id: 4, value: 7 },
    { _id: 5, value: 3 },
    { _id: 6, value: 2 }
  ]);
  const handleIncrement = id => {
    let newlist = [...list];
    newlist.map(el => {
      if (el._id === id) el.value++;
    });
    setList(newlist);
  };
  const handleDecrement = id => {
    let newlist = [...list];
    newlist.map(el => {
      if (el._id === id) el.value--;
    });
    setList(newlist);
  };
  const handleRemove = id => {
    let newlist = [...list];
    newlist = newlist.filter(el => el._id !== id);
    setList(newlist);
  };
  const handleReset = () => {
    let newlist = [...list];
    newlist.map(el => (el.value = 0));
    setList(newlist);
  };

  return (
    <main list={50} className="container">
      <Navbar number={list.filter(el => el.value > 0).length} />
      <Counters
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onReset={handleReset}
        list={list}
      />
    </main>
  );
}

export default App;
