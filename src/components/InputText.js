import React from 'react';
import { useDispatch } from 'react-redux';
import { changeText } from '../store/slices/textSlice';

const InputText = () => {
  const dispatch = useDispatch();

  return (
    <>
      <input
        type='text'
        onChange={(e) => dispatch(changeText(e.target.value))}
      />
    </>
  );
};

export default InputText;
