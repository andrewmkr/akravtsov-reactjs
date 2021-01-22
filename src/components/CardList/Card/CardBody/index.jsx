import { useContext } from 'react';
import { PersonsContext } from '../../../../context/persons-context';

const CardBody = props => {
    const personsContext = useContext(PersonsContext);
    const department = props.person.department === '' ? 'Отдел не указан' : props.person.department;
    const age = props.person.age === '' ? 'Не указан' : props.person.age;

    const editModeBody = <div>
        <p><input
            type="text"
            value={props.person.department}
            placeholder="Отдел"
            onChange={( event ) => personsContext.updatePersonProperty( props.person.id, 'department', event.target.value )} /></p>
        <p>Возраст: <input
            type="text"
            value={props.person.age}
            onChange={( event ) => personsContext.updatePersonProperty( props.person.id, 'age', event.target.value )} /></p>
    </div>;

    const readModeBody = <div>
        <p>{department}</p>
        <p>Возраст: {age}</p>
    </div>;

    return props.person.isEditMode ? editModeBody : readModeBody;
};

export default CardBody;