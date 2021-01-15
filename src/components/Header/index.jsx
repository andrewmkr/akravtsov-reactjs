import "./index.css";

const header = props => <div className="header header-layout">
    <h1>{props.children}</h1>
</div>;

export default header;