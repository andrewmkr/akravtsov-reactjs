import { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import { v4 as uuidv4 } from 'uuid';

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

    pers.isChecked = false;
    pers.isEditMode = false;

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
        return  Object.defineProperties( person, {
          'isChecked': {
            value: persons[index].isChecked
          },
          'isEditMode': {
            value: false
          }
        });
      });

      setPersons( persArr );
    } else {
      setIsReadOnly( false );
    }
  };

  const deleteChecked = () => {
    const ids = [];

    persons.forEach( el => {
      if ( el.isChecked ) ids.push( el.id );
    });

    if ( ids.length > 0) {
      const persArr = persons.filter( el => {
        return !ids.includes( el.id );
      });
  
      const persArrBackup = personsBackup.filter( el => {
        return !ids.includes( el.id );
      });
  
      setPersons( persArr );
      setPersonsBackup( persArrBackup );
    }
  };

  const createPerson = () => {
    const pers = {
      id: uuidv4(),
      name: '',
      age: '',
      department: '',
      isChecked: false,
      isEditMode: isReadOnly ? false : true
    }

    const persArr = [ ...persons ];
    persArr.push(pers);
    setPersons(persArr);

    const persArrBackup = [ ...personsBackup ];
    persArrBackup.push(pers);
    setPersonsBackup(persArrBackup);
  };

  return (
    <div className="App">
      <Header
        checkbox={isReadOnly}
        change={readOnlyModeChange}
        delete={deleteChecked}
        createCard={createPerson} >
        Сотрудники
      </Header>  
      <CardList
        persons={persons}
        editMode={editMode}
        updateProperty={updatePersonProperty}
        cancel={cancelChanges}
        save={saveChanges}
        isReadOnly={isReadOnly} />
    </div>  
  );
}

export default App;
