import { useContext, useEffect, useRef, useState } from 'react';
import Card from './Card';
import './index.css';
import { CardContext } from '../../context/card-context';

const CardList = props => {
    const cardContext = useContext( CardContext );

    const [cardsCount, setCardsCount] = useState( cardContext.cards.length );
    const scrollerRef = useRef( null );

    useEffect(() => {
        if ( cardsCount && cardsCount < cardContext.cards.length ) {
            scrollerRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
        setCardsCount( cardContext.cards.length );
    }, [cardsCount, cardContext.cards.length]);

    const list = () => cardContext.cards.map( card => {
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