import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import * as actionTypes from './types';

const URL = 'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json';
const initialState = {
    data: [],
    readOnlyMode: true
};

export const fetchData = () => {
    return dispatch => {
        axios.get(URL)
            .then(response => {
                const arr = response.data.slice(0,15).map(el => {
                    return {
                        id: el.Number,
                        title: el.Name,
                        text: el.About,
                        isChecked: false
                    }
                });
                dispatch({type: actionTypes.FETCH_DATA, cards: arr});
            })
            .catch(error => {
                console.log(`Data can't be loaded from ${URL}`);
            })
    }
}

const checkCard = (state, action) => {
    const idx = state.data.findIndex(card => {
        return card.id === action.id;
    });
    const updatedArr = [...state.data];
    const updatedCard = updatedArr[idx];

    updatedCard.isChecked = action.isChecked;
    updatedArr[idx] = updatedCard;

    return updatedArr;
}

const updateCard = (state, action) => {
    const idx = state.data.findIndex(card => {
        return card.id === action.card.id;
    });
    const updatedArr = [...state.data];

    updatedArr[idx] = {...action.card};

    return updatedArr;
}

const deleteChecked = state => {
    return state.data.filter(card => !card.isChecked);
}

const createCard = state => {
    const newCard = {
        id: uuidv4(),
        title: '',
        text: '',
        isChecked: false
    }
    return state.data.concat(newCard);
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                data: action.cards
            }
        case actionTypes.SAVE_CARD:
            return {
                ...state,
                data: updateCard(state, action)
            }
        case actionTypes.CHECK_CARD:
            return {
                ...state,
                data: checkCard(state, action)
            }
        case actionTypes.DELETE_CHECKED:
            return {
                ...state,
                data: deleteChecked(state)
            }
        case actionTypes.ADD_CARD:
            return {
                ...state,
                data: createCard(state)
            }
        case actionTypes.READ_ONLY:
            return {
                ...state,
                readOnlyMode: !state.readOnlyMode
            }
        default:
            return state;
    }
}

export default reducer;