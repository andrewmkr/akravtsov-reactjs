import { TiPencil } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import "./index.css";
import { CardContext } from '../../../../context/card-context';
import { useContext } from 'react';

const CardHeader = props => {
    const cardContext = useContext( CardContext );
    const title = props.card.title === '' ? 'Заголовок не указан' : props.card.title;

    const editModeHeader = <p>
        <input 
            className="head"
            type="text"
            placeholder="Заголовок"
            value={props.card.title}
            onChange={( event ) => cardContext.updateCardProperty( props.card.id, 'title', event.target.value )} />
        { 
            !cardContext.isReadOnly ?
                <span>
                    <GiCancel 
                        title="Отменить изменения"
                        className="icon-button"
                        onClick={() => cardContext.cancelChanges( props.card.id )} />
                    <AiOutlineCheck 
                        title="Сохранить"
                        className='icon-button'
                        onClick={() => cardContext.saveChanges( props.card.id )} />
                </span> : null
        }
    </p>;

    const readModeHeader = <p className="head">
        {title}
        <input 
            className="color-switcher" 
            type="checkbox" 
            checked={props.card.isChecked} 
            onChange={() => cardContext.updateCardProperty( props.card.id, 'isChecked', props.card.isChecked ? false : true )} />
        { 
            !cardContext.isReadOnly ?
                <TiPencil 
                    title="Редактировать"
                    className="icon-button" 
                    onClick={() => cardContext.editMode( props.card.id )} /> : null
        }
    </p>;

    return props.card.isEditMode ? editModeHeader : readModeHeader;
};

export default CardHeader;