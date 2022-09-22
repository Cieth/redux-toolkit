import React from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/slices/counterSlice';

export function Button(prop) {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        aria-label='Increment value'
        onClick={() => {
          prop.name === 'increment'
            ? dispatch(increment())
            : dispatch(decrement());
        }}
      >
        {prop.name}
      </button>
    </div>
  );
}
