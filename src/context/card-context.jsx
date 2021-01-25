import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const CardContext = React.createContext();
const URL = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';

const CardContextComponent = props => {
    const [ cardsBackup, setCardsBackup ] = useState([]);
    const [ cards, setCards ] = useState([]);
    const [ isReadOnly, setIsReadOnly ] = useState( false );

    useEffect(() => {
      axios.get(URL)
        .then(response => {
          const arr = response.data.slice(0, 15).map(el => {
            return {
              id: el.Number,
              title: el.Name,
              text: el.About,
              isChecked: false,
              isEditMode: false
            }
          });
          setCardsBackup(arr);
          setCards(arr);
        })
        .catch(error => {
          console.log(`Data can't be loaded from ${URL}`);
        });
    }, []);

    const updateCardProperty = ( id, property, value ) => {
      const indx = cards.findIndex( p => {
        return p.id === id;
      });
    
      const obj = {
        ...cards[ indx ]
      };

      Object.defineProperty( obj, property, { value: value });

      const cardsArr = [ ...cards ];
      cardsArr[ indx ] = obj;

      setCards( cardsArr );
    };

    const editMode = ( id ) => {
      const indx = cards.findIndex( p => {
        return p.id === id;
      });
    
      const obj = {
        ...cards[ indx ]
      };
    
      obj.isChecked = false;
      obj.isEditMode = true;
  
      const cardsArr = [ ...cards ];
      cardsArr[ indx ] = obj;
  
      setCards( cardsArr );
    };

    const cancelChanges = ( id ) => {
      const indx = cardsBackup.findIndex( p => {
        return p.id === id;
      });
  
      const obj = {
        ...cardsBackup[ indx ]
      };
  
      obj.isChecked = false;
      obj.isEditMode = false;
  
      const cardsArr = [ ...cards ];
      cardsArr[ indx ] = obj;
  
      setCards( cardsArr );
    };
    
    const saveChanges = ( id ) => {
      const indx = cards.findIndex( p => {
        return p.id === id;
      });
  
      const obj = {
        ...cards[ indx ]
      };
  
      obj.isEditMode = false;
  
      const cardsArr = [ ...cards ];
      cardsArr[ indx ] = obj;
      setCards( cardsArr );
  
      const cardsArrBackup = [ ...cardsBackup ];
      cardsArrBackup[ indx ] = obj;
      setCardsBackup( cardsArrBackup );
    };

    const readOnlyModeChange = () => {
      if ( !isReadOnly ) {
        setIsReadOnly( true );
        const arr = [ ...cardsBackup ];
        
        const cardsArr = arr.map(( card, index ) => {
          return  Object.defineProperties( card, {
            'isChecked': {
              value: cards[index].isChecked
            },
            'isEditMode': {
              value: false
            }
          });
        });
  
        setCards( cardsArr );
      } else {
        setIsReadOnly( false );
      }
    };
    
    const deleteChecked = () => {
      const ids = [];
  
      cards.forEach( el => {
        if ( el.isChecked ) ids.push( el.id );
      });
  
      if ( ids.length > 0) {
        const cardsArr = cards.filter( el => {
          return !ids.includes( el.id );
        });
    
        const cardsArrBackup = cardsBackup.filter( el => {
          return !ids.includes( el.id );
        });
    
        setCards( cardsArr );
        setCardsBackup( cardsArrBackup );
      }
    };

    const createCard = () => {
      const obj = {
        id: uuidv4(),
        title: '',
        text: '',
        isChecked: false,
        isEditMode: isReadOnly ? false : true
      }
  
      const cardsArr = [ ...cards ];
      cardsArr.push(obj);
      setCards(cardsArr);
  
      const cardsArrBackup = [ ...cardsBackup ];
      cardsArrBackup.push(obj);
      setCardsBackup(cardsArrBackup);
    };

    return <CardContext.Provider value={{
      cards,
      isReadOnly,
      updateCardProperty,
      editMode,
      cancelChanges,
      saveChanges,
      readOnlyModeChange,
      deleteChecked,
      createCard
    }} >
      {props.children}
    </CardContext.Provider>
};

export { CardContext };
export default CardContextComponent;
