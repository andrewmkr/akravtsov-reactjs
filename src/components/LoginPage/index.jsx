import { useState } from 'react';

import './index.css';
import Input from '../UI/Input';

const LoginPage = () => { 
    const [inputs, setInputs] = useState({
        email: {
            elementType: 'input',
            elementConfig: {
                type: 'email',
                placeholder: 'Ваш Email'
            },
            value: '',
            validation: {
                required: true,
                regexp: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
            },
            valid: false,
            touched: false,
            errorMessage: 'Введите email. Например: ivanov@mail.com'
        },
        password: {
            elementType: 'input',
            elementConfig: {
                type: 'password',
                placeholder: 'Ваш пароль'
            },
            value: '',
            validation: {
                required: true,
                minLength: 8,
                regexp: /^(?=.*[a-zA-Z])(?=.*\d).*$/
            },
            valid: false,
            touched: false,
            errorMessage: 'Не менее 8 символов. Пароль должен содержать по крайней мере одну цифру и одну букву'
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.regexp) {
            isValid = rules.regexp.test(value) && isValid;
        }
        
        return isValid;
    }

    const inputChangedHandler = (event, inputId) => {
        const updatedInputs = {...inputs};
        const updatedFormElement = {...updatedInputs[inputId]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedInputs[inputId] = updatedFormElement;

        let formIsValid = true;
        for (let inputId in updatedInputs) {
            formIsValid = updatedInputs[inputId].valid && formIsValid;
        }

        setInputs(updatedInputs);
        setFormIsValid(formIsValid);
    }

    const formElementsArray = [];

    for (let key in inputs) {
        formElementsArray.push({
            id: key,
            config: inputs[key]
        });
    }

    return (
        <form className="Login-form Login-form-layout">
            <p className="welcome-text welcome-text-layout">Добро пожаловать</p>
            {formElementsArray.map(formElement => (
                <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType} 
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    errorMessage={formElement.config.errorMessage}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <button disabled={!formIsValid}>Войти</button>
        </form>
    );
}

export default LoginPage;