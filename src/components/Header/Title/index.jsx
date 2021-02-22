import { useSelector } from 'react-redux';

import "./index.css";

const Title = props => {
    const state = useSelector(state => state);

    return <div className="title title-layout">
        <h1>
            {props.children}
            <span className="badge badge-layout">
                Всего: {state.cards.data.length}
            </span>
        </h1>
    </div>
};

export default Title;