import { useState } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';

function App() {

  const [ personBackup, setPersonBackup ] = useState({
    name: 'Кравцов Андрей',
    age: 26,
    department: 'Отдел WEB-технологий',
    isChecked: false,
    isEditMode: false
  });

  const [ person, setPerson ] = useState({ ...personBackup });

  const updatePersonProperty = ( property, value ) => {
    const pers = { ...person };
    Object.defineProperty( pers, property, { value: value });
    setPerson( pers );
  };

  const editMode = () => {
    const pers = { ...person };
    pers.isChecked = false;
    pers.isEditMode = true;
    setPerson( pers );
  };

  const cancelChanges = () => {
    setPerson( personBackup );
  };

  const saveChanges = () => {
    const pers = { ...person };
    pers.isEditMode = false;
    setPerson( pers );
    setPersonBackup( pers );
  };

  return (
    <div className="App">
      <Header>Сотрудники</Header>
      <Card 
        person={person}
        editMode={editMode} 
        updateProperty={updatePersonProperty}
        cancel={cancelChanges}
        save={saveChanges} />
    </div>
  );
}

export default App;
