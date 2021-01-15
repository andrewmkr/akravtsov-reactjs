import Title from './Title';
import ButtonBar from './ButtonBar';
import './index.css';

const header = props => <div >
    <div className="header header-layout">
    <Title>{props.children}</Title>
    <ButtonBar
        checkbox={props.checkbox}
        change={props.change}
        delete={props.delete}
        createCard={props.createCard} />
    </div>
    <div className="placeholder" />
</div>;

export default header;