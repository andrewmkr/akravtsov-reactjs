import "./index.css"

const Card = props => {
    const cardClasses = [ 'card', 'card-layout' ];

    props.checkbox ? cardClasses.push( 'card-checked-border' ) : cardClasses.push( 'card-unchecked-border' );

    return (
        <div className={cardClasses.join( ' ' )}>
            <p className="head">
                {props.name}
                <input 
                    className="color-switcher" 
                    type="checkbox" 
                    checked={props.checkbox} 
                    onChange={props.checkboxChange} />
            </p>
            <hr/>
            <p>{props.department}</p>
            <p>Возраст: {props.age}</p>
        </div>
    )
};

export default Card;