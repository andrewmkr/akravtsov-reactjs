import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Spinner from '../Spinner';
import PageNotFound from '../PageNotFound';

import './index.css';
import * as actionTypes from '../../store/types';

const FullCard = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const stateCard = state.cards.find(card => card.id === props.match.params.id);
    const [card, setCard] = useState({
        id: '',
        title: '',
        text: '',
        isChecked: false
    });

    useEffect(() => {
        if (stateCard) setCard({...stateCard});
    },[stateCard]);

    const updateCardProperty = (property, value) => {
        const obj = {...card};
        Object.defineProperty(obj, property, {value: value});
        setCard(obj);
    }

    const saveChanges = () => {
        dispatch({type: actionTypes.SAVE_CARD, card: card});
        history.push('/');
    }

    const cancelChanges = () => {
        history.push('/');
    }

    const cardContent = () => {
        if (state.cards.length) {
            return stateCard ? <div className="Full-card-wrapper Full-card-wrapper-layout">
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={card.title} 
                    onChange={event => updateCardProperty('title', event.target.value)} />
                <textarea
                    placeholder="Текст"
                    value={card.text}
                    onChange={event => updateCardProperty('text', event.target.value)} />
                <button className='full-card-button full-card-save' onClick={saveChanges}>Сохранить</button>
                <button className='full-card-button full-card-cancel' onClick={cancelChanges}>Отмена</button>
            </div> : <PageNotFound />
        } else {
            return <div className="spinner-wrapper">
                <Spinner />
            </div>
        }
    }

    return cardContent();
}

export default FullCard;