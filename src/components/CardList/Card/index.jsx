import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import './index.css';
import PropTypes from 'prop-types';
import * as actionTypes from '../../../store/types';

const Card = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();
    const cardClasses = [ 'card', 'card-layout' ];
    const [card, setCard] = useState({
        ...props.card,
        isEditMode: false
    });

    useEffect(() => {
        if (state.cards.readOnlyMode) {
            cancelChanges();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.cards.readOnlyMode]);

    const checkCard = () => {
        const obj = {...card};
        obj.isChecked = !obj.isChecked;
        setCard(obj);
        dispatch({type: actionTypes.CHECK_CARD, id: card.id, isChecked: obj.isChecked});
    }

    const editMode = () => {
        const obj = {...card};
        obj.isChecked = false;
        obj.isEditMode = true;
        setCard(obj);
        dispatch({type: actionTypes.CHECK_CARD, id: card.id, isChecked: false});
    }

    const updateCardProperty = (property, value) => {
        const obj = {...card};
        Object.defineProperty(obj, property, {value: value});
        setCard(obj);
    }

    const saveChanges = () => {
        const obj = {...card};
        obj.isEditMode = false;
        obj.isChecked = false;
        setCard(obj);
        dispatch({type: actionTypes.SAVE_CARD, card: obj});
    }

    const cancelChanges = () => {
        const obj = {
            ...props.card,
            isEditMode: false
        }
        setCard(obj);
    }

    const doubleClickHandler = () => history.push('/card/' + card.id);
    
    cardClasses.push(card.isChecked ? 'card-checked-border' : 'card-unchecked-border');
    cardClasses.push(props.isFullMode ? 'full-mode' : 'list-mode');

    return <div className={cardClasses.join(' ')} onDoubleClick={!card.isEditMode && !props.isFullMode ? doubleClickHandler : undefined}>
        <CardHeader
            card={card}
            readOnly={state.cards.readOnlyMode}
            onCheck={checkCard}
            onEdit={editMode}
            onUpdate={updateCardProperty}
            onCancel={cancelChanges}
            onSave={saveChanges} />
        <hr />
        <CardBody
            card={card}
            readOnly={state.cards.readOnlyMode}
            onUpdate={updateCardProperty} />
    </div>
};

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        isChecked: PropTypes.bool
    })
};

export default withLoadingDelay(Card);