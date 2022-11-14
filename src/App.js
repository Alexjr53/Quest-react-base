import Paragraph from './components/paragraph/paragraph';
import Button from './components/button/button';
import './App.css';


function App() {
  return (
      <div className='container'>
        <Paragraph color='darkblue' text ='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae reprehenderit aspernatur ea, facere non nemo placeat repellat natus similique voluptatum repellendus inventore voluptates, dolorem eligendi ipsam nihil labore omnis. Aliquid?'/>

        <Button label='Baixar arquivo'/>
      </div>
  );
}

export default App;
