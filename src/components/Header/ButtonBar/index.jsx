import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import { FcCheckmark } from "react-icons/fc";
import * as actionTypes from '../../../store/types';


const StyledLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
    margin-bottom: 15px;
    margin-left: 23px;
    border: 3px solid #b6531a;
    border-radius: 3px;
    padding: 5px;
    box-shadow: 3px 3px 3px #c29c87;
    background-color: white;

    &:hover {
        background-color: #c9d6da;
    }

    &:active {
        box-shadow: 0 0 0 #c29c87;
        transform translateY(3px);
    }
`;

const ReadOnlySpan = styled.span`
    float: left;
    height: 19px;
    width: 19px;
    background-color: #eee;
    margin-right: 8px;
    border: 1px solid #000;
`;

const ReadOnlyInput = styled.input`
    opacity: 0;
`;

const ButtonBar = props => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return <div>
        <StyledLabel>
            Только просмотр
            <ReadOnlySpan>
                {state.readOnlyMode && <FcCheckmark size={19} />}
            </ReadOnlySpan>
            <ReadOnlyInput
                type="checkbox"
                checked={state.readOnlyMode}
                onChange={() => dispatch({type: actionTypes.READ_ONLY})} />
        </StyledLabel>
        <StyledLabel onClick={() => dispatch({type: actionTypes.ADD_CARD})}>
            Добавить карточку
        </StyledLabel>
        <StyledLabel onClick={() => dispatch({type: actionTypes.DELETE_CHECKED})}>
            Удалить выбранные карточки
        </StyledLabel>
    </div>;
};

export default ButtonBar;