import React from "react";
import Counter from "./counter";
import "../styles/Counters.css";

const Counters = props => {
  const { list, onIncrement, onDecrement, onRemove, onReset } = props;

  return (
    <React.Fragment>
      <button
        disabled={list.length === 0 ? true : false}
        onClick={onReset}
        className="custom btn btn-dark btn-sm"
      >
        Reset
      </button>

      {list.map(el => (
        <Counter
          key={el._id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
          item={el}
        />
      ))}
    </React.Fragment>
  );
};

export default Counters;
