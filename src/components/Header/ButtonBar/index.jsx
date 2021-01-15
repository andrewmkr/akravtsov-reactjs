import styled from "styled-components";
import { FcCheckmark } from "react-icons/fc";

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

const buttonBar = props => <div>
    <StyledLabel>
        Только просмотр
        <ReadOnlySpan>
            {props.checkbox ? <FcCheckmark size={19} /> : null}
        </ReadOnlySpan>
        <ReadOnlyInput
            type="checkbox"
            checked={props.checkbox}
            onChange={props.change} />
    </StyledLabel>
    <StyledLabel onClick={props.createCard}>
        Добавить карточку
    </StyledLabel>
    <StyledLabel onClick={props.delete}>
        Удалить выбранные карточки
    </StyledLabel>
</div>;

export default buttonBar;