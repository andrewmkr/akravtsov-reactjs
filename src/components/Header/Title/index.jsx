import "./index.css";
import { CardContext } from '../../../context/card-context';
import { useContext } from "react";

const Title = props => {
    const cardContext = useContext( CardContext );

    return <div className="title title-layout">
        <h1>
            {props.children}
            <span className="badge badge-layout">
                Всего: {cardContext.cards.length}
            </span>
        </h1>
    </div>
};

export default Title;