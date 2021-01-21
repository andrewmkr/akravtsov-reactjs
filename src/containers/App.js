import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import PersonsContextComponent from '../context/persons-context';

function App() {
  return (
    <PersonsContextComponent>
      <div className="App">
        <Header>Сотрудники</Header>  
        <CardList />
      </div>  
    </PersonsContextComponent>
  );
}

export default App;
