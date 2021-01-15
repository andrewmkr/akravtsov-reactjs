const cardBody = props => {
    if ( props.person.isEditMode )
        return <div>
            <p><input
                type="text"
                value={props.person.department}
                onChange={( event ) => props.updateProperty( props.person.id, 'department', event.target.value )} /></p>
            <p>Возраст: <input
                type="text"
                value={props.person.age}
                onChange={( event ) => props.updateProperty( props.person.id, 'age', event.target.value )} /></p>
        </div>;
    else
        return <div>
            <p>{props.person.department}</p>
            <p>Возраст: {props.person.age}</p>
        </div>;
};

export default cardBody;