import React from 'react';
import { useSetRecoilState } from 'recoil';
import { countState } from '../store/counterState';

const ComponentB = () => {
  const setCount = useSetRecoilState(countState);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div>
      <h2>Component B</h2>
      <button onClick={decrement}>Giảm (-)</button>
      <button onClick={increment}>Tăng (+)</button>
    </div>
  );
};

export default ComponentB;