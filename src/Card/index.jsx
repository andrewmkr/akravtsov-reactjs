import { TiPencil } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import "./index.css";

const Card = props => {
    const cardClasses = [ 'card', 'card-layout' ];

    cardClasses.push( props.person.isChecked ? 'card-checked-border' : 'card-unchecked-border' );

    const cardHead = () => {
        if ( props.person.isEditMode ) 
            return <p>
                <input 
                    className="head"
                    type="text"
                    value={props.person.name}
                    onChange={( event ) => props.updateProperty( 'name', event.target.value )} />
                <GiCancel 
                    title="Отменить изменения"
                    className="icon-button"
                    onClick={props.cancel} />
                <AiOutlineCheck 
                    title="Сохранить"
                    className='icon-button'
                    onClick={props.save} />
            </p>;
        else 
            return <p className="head">
                {props.person.name}
                <input 
                    className="color-switcher" 
                    type="checkbox" 
                    checked={props.person.isChecked} 
                    onChange={() => props.updateProperty( 'isChecked', props.person.isChecked ? false : true )} />
                <TiPencil 
                    title="Редактировать"
                    className="icon-button" 
                    onClick={props.editMode} />
            </p>;
    };

    const cardBody = () => {
        if ( props.person.isEditMode )
            return <div>
                <p><input
                    type="text"
                    value={props.person.department}
                    onChange={( event ) => props.updateProperty( 'department', event.target.value )} /></p>
                <p>Возраст: <input
                    type="text"
                    value={props.person.age}
                    onChange={( event ) => props.updateProperty( 'age', event.target.value )} /></p>
            </div>;
        else
            return <div>
                <p>{props.person.department}</p>
                <p>Возраст: {props.person.age}</p>
            </div>;
    };

    return (
        <div className={cardClasses.join( ' ' )}>
            {cardHead()}
            <hr/>
            {cardBody()}
        </div>
    )
};

export default Card;