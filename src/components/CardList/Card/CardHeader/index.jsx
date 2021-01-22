import { TiPencil } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import "./index.css";
import { PersonsContext } from '../../../../context/persons-context';
import { useContext } from 'react';

const CardHeader = props => {
    const personsContext = useContext(PersonsContext);
    const name = props.person.name === '' ? 'Имя не указано' : props.person.name;

    const editModeHeader = <p>
        <input 
            className="head"
            type="text"
            placeholder="Имя и фамилия"
            value={props.person.name}
            onChange={( event ) => personsContext.updatePersonProperty( props.person.id, 'name', event.target.value )} />
        { 
            !personsContext.isReadOnly ?
                <span>
                    <GiCancel 
                        title="Отменить изменения"
                        className="icon-button"
                        onClick={() => personsContext.cancelChanges( props.person.id )} />
                    <AiOutlineCheck 
                        title="Сохранить"
                        className='icon-button'
                        onClick={() => personsContext.saveChanges( props.person.id )} />
                </span> : null
        }
    </p>;

    const readModeHeader = <p className="head">
        {name}
        <input 
            className="color-switcher" 
            type="checkbox" 
            checked={props.person.isChecked} 
            onChange={() => personsContext.updatePersonProperty( props.person.id, 'isChecked', props.person.isChecked ? false : true )} />
        { 
            !personsContext.isReadOnly ?
                <TiPencil 
                    title="Редактировать"
                    className="icon-button" 
                    onClick={() => personsContext.editMode( props.person.id )} /> : null
        }
    </p>;

    return props.person.isEditMode ? editModeHeader : readModeHeader;
};

export default CardHeader;