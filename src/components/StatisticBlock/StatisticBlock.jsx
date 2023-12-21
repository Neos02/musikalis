import React from "react";

import "./StatisticBlock.css";

const StatisticBlock = ({ count, unit }) => {
  return (
    <div className="gray-gradient StatisticBlock__container">
      <p className="text-largest">{count}</p>
      <p className="StatisticBlock__unit text-large">{unit}</p>
    </div>
  );
};

export default StatisticBlock;
