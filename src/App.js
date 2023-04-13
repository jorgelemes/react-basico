
import './App.css';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="App">
     
        <h1> Meu projeto </h1>
        <Comentario nome="Jorge" email="jorge@email.com" data={new Date(2023, 4, 13)}> 
        Olá, tudo bem?
        </Comentario > 

        <hr />
        <br />
        
        <Comentario nome="Jorge" email="jorge@email.com" data={new Date(2023, 4, 13)}> 
        Olá, tudo bem?
        </Comentario > 
        
      
    </div>
  );
}

export default App;
