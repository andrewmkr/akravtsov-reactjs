import "./Card.css"

const card = (props) => {
    return (
        <div className="Card">
            <h3 className="head">{props.name}</h3><hr/>
            <p>{props.department}</p>
            <p>Возраст: {props.age}</p>
        </div>
    )
};

export default card;