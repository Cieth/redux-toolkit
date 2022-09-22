import { Counter } from './components/Counter';
import './App.css';
import { Button } from './components/Button';
import InputText from './components/InputText';
import Text from './components/Text';
import Posts from './components/Posts';

function App() {
  return (
    <div className='App'>
      <h1>Configuración redux toolkit en nuestro proyecto</h1>
      <Counter />
      <div style={{ display: 'flex' }}>
        <Button name='decrement' />
        <Button name='increment' />
      </div>
      <Text />
      <InputText />
      <Posts />
    </div>
  );
}

export default App;
