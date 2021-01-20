import { TiPencil } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import "./index.css";

const cardHeader = props => {
    const name = props.person.name === '' ? 'Имя не указано' : props.person.name;

    const editModeHeader = <p>
        <input 
            className="head"
            type="text"
            placeholder="Имя и фамилия"
            value={props.person.name}
            onChange={( event ) => props.updateProperty( props.person.id, 'name', event.target.value )} />
        { 
            !props.isReadOnly?
                <span>
                    <GiCancel 
                        title="Отменить изменения"
                        className="icon-button"
                        onClick={() => props.onCancel( props.person.id )} />
                    <AiOutlineCheck 
                        title="Сохранить"
                        className='icon-button'
                        onClick={() => props.onSave( props.person.id )} />
                </span> : null
        }
    </p>;

    const readModeHeader = <p className="head">
        {name}
        <input 
            className="color-switcher" 
            type="checkbox" 
            checked={props.person.isChecked} 
            onChange={() => props.updateProperty( props.person.id, 'isChecked', props.person.isChecked ? false : true )} />
        { 
            !props.isReadOnly ?
                <TiPencil 
                    title="Редактировать"
                    className="icon-button" 
                    onClick={() => props.editMode( props.person.id )} /> : null
        }
    </p>;

    return props.person.isEditMode ? editModeHeader : readModeHeader;
};

export default cardHeader;