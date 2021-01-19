const cardBody = props => {
    const department = props.person.department === '' ? 'Отдел не указан' : props.person.department;
    const age = props.person.age === '' ? 'Не указан' : props.person.age;
    
    if ( props.person.isEditMode )
        return <div>
            <p><input
                type="text"
                value={props.person.department}
                placeholder="Отдел"
                onChange={( event ) => props.updateProperty( props.person.id, 'department', event.target.value )} /></p>
            <p>Возраст: <input
                type="text"
                value={props.person.age}
                onChange={( event ) => props.updateProperty( props.person.id, 'age', event.target.value )} /></p>
        </div>;
    else
        return <div>
            <p>{department}</p>
            <p>Возраст: {age}</p>
        </div>;
};

export default cardBody;