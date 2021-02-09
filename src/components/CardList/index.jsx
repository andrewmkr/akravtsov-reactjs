import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';
import './index.css';

const CardList = props => {
    const state = useSelector(state => state);
    const [cardsCount, setCardsCount] = useState( state.cards.length );
    const scrollerRef = useRef( null );

    useEffect(() => {
        if ( cardsCount && cardsCount < state.cards.length ) {
            scrollerRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
        setCardsCount( state.cards.length );
    }, [cardsCount, state.cards.length]);

    const list = () => state.cards.map(card => {
        return <Card
            card={card}
            key={card.id} />
    });

    return <div>
        {list()}
        <div ref={scrollerRef} className="scroller" />
    </div>
}

export default CardList;