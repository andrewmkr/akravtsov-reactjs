import Card from './Card';

const cardList = props => props.persons.map( person => {
    return <Card
        person={person}
        editMode={props.editMode}
        updateProperty={props.updateProperty}
        cancel={props.cancel}
        save={props.save}
        isReadOnly={props.isReadOnly}
        key={person.id} />
    });

export default cardList;