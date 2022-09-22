import React from 'react';
import { useSelector } from 'react-redux';

export function Counter() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>
        <p>{count}</p>
      </div>
    </div>
  );
}
