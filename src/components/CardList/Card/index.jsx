import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import './index.css';

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

export default withLoadingDelay( card );