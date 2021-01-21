import { useContext, useEffect, useRef, useState } from 'react';
import Card from './Card';
import './index.css';
import { PersonsContext } from '../../context/persons-context';

const CardList = props => {
    const personsContext = useContext(PersonsContext);

    const [persCount, setPersCount] = useState( personsContext.persons.length );
    const scrollerRef = useRef( null );

    useEffect(() => {
        if ( persCount < personsContext.persons.length ) {
            scrollerRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
        setPersCount( personsContext.persons.length );
    }, [persCount, personsContext.persons.length]);

    const list = () => personsContext.persons.map( person => {
        return <Card
            person={person}
            key={person.id} />
        });

    return <div>
        {list()}
        <div ref={scrollerRef} className="scroller" />
    </div>
}

export default CardList;