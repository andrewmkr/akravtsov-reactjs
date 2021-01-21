import "./index.css";
import { PersonsContext } from '../../../context/persons-context';
import { useContext } from "react";

const Title = props => {
    const personsContext = useContext( PersonsContext );

    return <div className="title title-layout">
        <h1>
            {props.children}
            <span className="badge badge-layout">
                Всего: {personsContext.persons.length}
            </span>
        </h1>
    </div>
};

export default Title;