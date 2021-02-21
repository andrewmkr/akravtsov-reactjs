import { useSelector } from 'react-redux';

import './index.css';
import Spinner from '../Spinner';
import PageNotFound from '../PageNotFound';
import Card from '../CardList/Card';

const FullCard = props => {
    const state = useSelector(state => state);
    const card = state.cards.cards.find(card => card.id === props.match.params.id);

    const cardContent = () => {
        if (state.cards.cards.length) {
            return card ? <div className="full-card-wrapper">
                <Card card={card} isFullMode={true} />
            </div> : <PageNotFound />
        } else {
            return <div className="full-card-wrapper">
                <Spinner />
            </div>
        }
    }

    return cardContent();
}

export default FullCard;