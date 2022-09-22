import { useSelector } from 'react-redux';

const Text = () => {
  const data = useSelector((state) => state.text.value);
  return <h2>{data}</h2>;
};

export default Text;
