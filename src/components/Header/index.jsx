import Title from './Title';
import ButtonBar from './ButtonBar';
import './index.css';

const header = props => <div >
    <div className="header header-layout">
        <Title>{props.children}</Title>
        <ButtonBar />
    </div>
    <div className="placeholder" />
</div>;

export default header;