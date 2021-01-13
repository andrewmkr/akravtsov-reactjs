import "./index.css";

const readOnlySwitcher = props => <p className="read-only-switcher read-only-switcher-layout">
    <label>
        <input 
            type="checkbox"
            checked={props.checkbox}
            onChange={props.change} />
        Только просмотр
    </label>
</p>;

export default readOnlySwitcher;