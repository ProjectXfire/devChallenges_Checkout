import React, { useState } from "react";
// Components
import { Add, Remove } from "@material-ui/icons";
import { Counter, CounterButton } from "../style";

export const CounterItems = ({ setTotal, total, price }) => {
  const [count, setCount] = useState(0);
  const plus = () => {
    let counterItems = count;
    counterItems++;
    setCount(counterItems);
    setTotal(price + total);
  };
  const less = () => {
    let counterItems = count;
    if (count > 0) {
      counterItems--;
      setCount(counterItems);
      setTotal(total - price);
    }
  };
  return (
    <Counter>
      <CounterButton onClick={() => less()}>
        <Remove fontSize="small" />
      </CounterButton>
      <input type="text" readOnly value={count} />
      <CounterButton onClick={() => plus()}>
        <Add fontSize="small" />
      </CounterButton>
    </Counter>
  );
};
