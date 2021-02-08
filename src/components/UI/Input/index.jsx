import './index.css';

const input = props => {
    const classes = ['input-element', 'input-element-layout'];
    let inputElement = null;
    let validationError = null;

    if (props.invalid && props.touched) {
        classes.push('input-invalid');
        validationError = <p className="error-message">{props.errorMessage}</p>
    }

    const input = <input
        className={classes.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed} />;

    switch (props.elementType) {
        case ('input'):
            inputElement = input;
            break;
        default:
            inputElement = input;
    }
    
    return <div>
        {inputElement}
        {validationError}
    </div>
};

export default input;