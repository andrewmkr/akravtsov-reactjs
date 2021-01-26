import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import CardContextComponent from '../context/card-context';

function App() {
  return (
    <CardContextComponent>
      <div className="App">
        <Header>Сотрудники</Header>  
        <CardList />
      </div>  
    </CardContextComponent>
  );
}

export default App;
