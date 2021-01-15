import { useEffect, useRef, useState } from 'react';
import Card from './Card';
import './index.css';

const CardList = props => {
    const [persCount, setPersCount] = useState( props.persons.length );
    const scrollerRef = useRef( null );

    useEffect(() => {
        if ( persCount < props.persons.length ) {
            scrollerRef.current.scrollIntoView({ behavior: 'smooth' }); 
        }
        setPersCount( props.persons.length );
    }, [persCount, props.persons.length]);

    const list = () => props.persons.map( person => {
        return <Card
            person={person}
            editMode={props.editMode}
            updateProperty={props.updateProperty}
            cancel={props.cancel}
            save={props.save}
            isReadOnly={props.isReadOnly}
            key={person.id} />
        });

    return <div>
        {list()}
        <div ref={scrollerRef} className="scroller" />
    </div>
}

export default CardList;