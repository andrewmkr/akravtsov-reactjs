import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import './index.css';
import PropTypes from 'prop-types';

const card = props => {
    const cardClasses = [ 'card', 'card-layout' ];

    cardClasses.push( props.person.isChecked ? 'card-checked-border' : 'card-unchecked-border' );

    return <div className={cardClasses.join(' ')}>
        <CardHeader
            person={props.person}
            editMode={props.editMode}
            updateProperty={props.updateProperty}
            onCancel={props.onCancel}
            onSave={props.onSave}
            isReadOnly={props.isReadOnly} />
        <hr />
        <CardBody
            person={props.person}
            updateProperty={props.updateProperty} />
    </div>
};

card.propTypes = {
    person: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
        department: PropTypes.string,
        isChecked: PropTypes.bool,
        isEditMode: PropTypes.bool
    }),
    editMode: PropTypes.func,
    updateProperty: PropTypes.func,
    onCancel: PropTypes.func,
    onSave: PropTypes.func,
    isReadOnly: PropTypes.bool
};

export default withLoadingDelay( card );