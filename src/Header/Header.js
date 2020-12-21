import "./Header.css";

const header = (props) => {
    return (
        <div className="Header">
            <h1>{props.children}</h1>
        </div>
    )
};

export default header;