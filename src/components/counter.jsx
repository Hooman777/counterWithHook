import React from "react";

const Counter = props => {
  const { item, onIncrement, onDecrement, onRemove } = props;
  const { _id, value } = item;

  const badgeClass = value => {
    if (value > 0) return `success`;
    else return `secondary`;
  };

  const formatBadge = value => {
    return value > 0 ? value : "ZERO";
  };
  return (
    <div className="row">
      <div className="col-1">
        <span className={`badge badge-pill badge-${badgeClass(value)}`}>
          {formatBadge(value)}
        </span>
      </div>
      <div className="col">
        <div className="btn-group">
          <button
            onClick={() => onIncrement(_id)}
            className="btn btn-primary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(_id)}
            className="btn btn-warning btn-sm m-1"
            disabled={value > 0 ? false : true}
          >
            -
          </button>
          <button
            onClick={() => onRemove(_id)}
            className="btn btn-danger btn-sm m-1"
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
