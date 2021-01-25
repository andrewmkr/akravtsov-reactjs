import CardHeader from './CardHeader';
import CardBody from './CardBody';
import withLoadingDelay from '../../../hoc/withLoadingDelay';
import './index.css';
import PropTypes from 'prop-types';

const card = props => {
    const cardClasses = [ 'card', 'card-layout' ];

    cardClasses.push( props.card.isChecked ? 'card-checked-border' : 'card-unchecked-border' );

    return <div className={cardClasses.join(' ')}>
        <CardHeader
            card={props.card} />
        <hr />
        <CardBody
            card={props.card} />
    </div>
};

card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        isChecked: PropTypes.bool,
        isEditMode: PropTypes.bool
    })
};

export default withLoadingDelay( card );