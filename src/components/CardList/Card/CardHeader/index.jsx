import { TiPencil } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';

import "./index.css";

const CardHeader = props => {

    const editModeHeader = <p>
        <input 
            className="head head-input"
            type="text"
            placeholder="Заголовок"
            value={props.card.title}
            onChange={(event) => props.onUpdate('title', event.target.value)} />
        { 
            !props.readOnly ?
                <span>
                    <GiCancel 
                        title="Отменить изменения"
                        className="icon-button"
                        onClick={props.onCancel} />
                    <AiOutlineCheck 
                        title="Сохранить"
                        className='icon-button'
                        onClick={props.onSave} />
                </span> : null
        }
    </p>;

    const readModeHeader = <p className="head">
        {props.card.title}
        <input 
            className="color-switcher" 
            type="checkbox" 
            checked={props.card.isChecked} 
            onChange={props.onCheck} />
        { 
            !props.readOnly ?
                <TiPencil 
                    title="Редактировать"
                    className="icon-button" 
                    onClick={props.onEdit} /> : null
        }
    </p>;

    return props.card.isEditMode ? editModeHeader : readModeHeader;
};

export default CardHeader;