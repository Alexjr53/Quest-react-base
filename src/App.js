import ColoredText from './components/coloredText/coloredText';
import Button from './components/button/button';
import './App.css';


function App() {
  return (
      <div className='container'>
        <ColoredText color='darkblue'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reprehenderit aspernatur ea, facere non nemo placeat repellat natus similique voluptatum repellendus inventore voluptates, dolorem eligendi ipsam nihil labore omnis. Aliquid?</ColoredText>
        <Button label='Baixar arquivo'>Clique aqui</Button>
      </div>
  );
}

export default App;
