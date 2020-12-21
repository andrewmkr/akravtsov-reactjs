import './App.css';
import Card from './Card/Card';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header>Сотрудники</Header>
      <Card name="Кравцов Андрей" department="Отдел WEB-технологий" age="26"/>
    </div>
  );
}

export default App;
