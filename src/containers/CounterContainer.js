import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrement, increment } from "../modules/counter";

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);

  const { onIncrease, onDecrease } = useDispatch([increment, decrement], []);
  return (
    <Counter />
  );
}

export default CounterContainer;