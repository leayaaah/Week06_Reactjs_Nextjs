import React from 'react';
import { useRecoilValue } from 'recoil';
import { countState } from '../store/counterState';

const ComponentA = () => {
  const count = useRecoilValue(countState);

  return (
    <div>
      <h2>Component A</h2>
      <p>Count hiện tại: {count}</p>
    </div>
  );
};

export default ComponentA;