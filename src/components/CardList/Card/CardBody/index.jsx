import { useContext } from 'react';
import { CardContext } from '../../../../context/card-context';
import './index.css';

const CardBody = props => {
    const cardContext = useContext(CardContext);

    const editModeBody = <div>
        <textarea 
            className="text-input"
            value={props.card.text}
            placeholder="Текст"
            onChange={( event ) => cardContext.updateCardProperty( props.card.id, 'text', event.target.value )} >
        </textarea>
    </div>;

    const readModeBody = <div>
        <p className="text-output">{props.card.text}</p>
    </div>;

    return props.card.isEditMode ? editModeBody : readModeBody;
};

export default CardBody;