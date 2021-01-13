import { useState } from 'react';
import './App.css';
import Card from './Card';
import Header from './Header';
import ReadOnlySwitcher from './ReadOnlySwitcher';

function App() {

  const [ personsBackup, setPersonsBackup ] = useState([
    {id: '1', name: 'Кравцов Андрей', age: 26, department: 'Отдел WEB-технологий', isChecked: false, isEditMode: false},
    {id: '2', name: 'Иванов Григорий', age: 30, department: 'Отдел Java-технологий', isChecked: false, isEditMode: false},
    {id: '3', name: 'Сидоров Николай', age: 32, department: 'Отдел интеграции', isChecked: false, isEditMode: false},
    {id: '4', name: 'Петров Василий', age: 22, department: 'Отдел BI-технологий', isChecked: false, isEditMode: false},
    {id: '5', name: 'Сергеев Дмитрий', age: 29, department: 'Отдел WEB-технологий', isChecked: false, isEditMode: false},
    {id: '6', name: 'Николаев Сергей', age: 32, department: 'Отдел BI-технологий', isChecked: false, isEditMode: false},
    {id: '7', name: 'Васильев Василий', age: 24, department: 'Отдел Java-технологий', isChecked: false, isEditMode: false},
    {id: '8', name: 'Дмитриев Пётр', age: 22, department: 'Отдел интеграции', isChecked: false, isEditMode: false}
  ]);

  const [ persons, setPersons ] = useState([ ...personsBackup ]);

  const [ isReadOnly, setIsReadOnly ] = useState( false );

  const updatePersonProperty = ( id, property, value ) => {
    const indx = persons.findIndex( p => {
      return p.id === id;
    });

    const pers = {
      ...persons[ indx ]
    };

    Object.defineProperty( pers, property, { value: value });

    const persArr = [ ...persons ];
    persArr[ indx ] = pers;

    setPersons( persArr );
  };

  const editMode = ( id ) => {
    const indx = persons.findIndex( p => {
      return p.id === id;
    });

    const pers = {
      ...persons[ indx ]
    };

    pers.isChecked = false;
    pers.isEditMode = true;

    const persArr = [ ...persons ];
    persArr[ indx ] = pers;

    setPersons( persArr );
  };

  const cancelChanges = ( id ) => {
    const indx = personsBackup.findIndex( p => {
      return p.id === id;
    });

    const pers = {
      ...personsBackup[ indx ]
    };

    const persArr = [ ...persons ];
    persArr[ indx ] = pers;

    setPersons( persArr );
  };

  const saveChanges = ( id ) => {
    const indx = persons.findIndex( p => {
      return p.id === id;
    });

    const pers = {
      ...persons[ indx ]
    };

    pers.isEditMode = false;

    const persArr = [ ...persons ];
    persArr[ indx ] = pers;
    setPersons( persArr );

    const persArrBackup = [ ...personsBackup ];
    persArrBackup[ indx ] = pers;
    setPersonsBackup( persArrBackup );
  };

  const readOnlyModeChange = () => {
    if ( !isReadOnly ) {
      setIsReadOnly( true );
      const pers = [ ...personsBackup ];
      
      const persArr = pers.map(( person, index ) => {
        return Object.defineProperty( person, 'isChecked', { value: persons[ index ].isChecked });
      });

      setPersons( persArr );
    } else {
      setIsReadOnly( false );
    }
  };

  const persList = () => <div>
    {
      persons.map( person => {
        return <Card
          person={person}
          editMode={editMode}
          updateProperty={updatePersonProperty}
          cancel={cancelChanges}
          save={saveChanges}
          isReadOnly={isReadOnly}
          key={person.id} />
      })
    }
  </div>;

  return (
    <div className="App">
      <Header>Сотрудники</Header>
      <ReadOnlySwitcher 
        checkbox={isReadOnly}
        change={readOnlyModeChange} />
      {persList()}
    </div>
  );
}

export default App;
