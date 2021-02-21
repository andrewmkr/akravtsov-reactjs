import { useSelector } from 'react-redux';

import Title from './Title';
import ButtonBar from './ButtonBar';
import './index.css';

const Header = props => {
    const state = useSelector(state => state);

    return <div>
        <div className="header header-layout">
            <Title>{props.children}</Title>
            {!state.cards.readOnlyMode && <ButtonBar />}
        </div>
        <div className={state.cards.readOnlyMode ? 'placeholder' : 'placeholder-big'} />
    </div>;
}

export default Header;