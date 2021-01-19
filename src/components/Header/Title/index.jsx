import "./index.css";

const title = props => <div className="title title-layout">
    <h1>{props.children}</h1>
</div>;

export default title;