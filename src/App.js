import { useState } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

function App() {

  const [ isChecked, setIsChecked ] = useState( false );

  const switchCardColor = () => {
    isChecked ? setIsChecked( false ) : setIsChecked( true );
  };

  return (
    <div className="App">
      <Header>Сотрудники</Header>
      <Card 
        name="Кравцов Андрей"
        department="Отдел WEB-технологий" 
        age="26" 
        checkbox={isChecked}
        checkboxChange={switchCardColor} />
    </div>
  );
}

export default App;
