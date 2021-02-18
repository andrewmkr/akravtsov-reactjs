import styled from "styled-components";

export const StyledDiv = styled.div`
    width: 450px;
    margin-right: auto;
    margin-left: auto;

    h1 {
        text-align: center;
    }

    label {
        margin-left: 120px;
    }
`;

export const StyledLabel = styled.label`
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

export const ReadOnlySpan = styled.span`
    float: left;
    height: 19px;
    width: 19px;
    background-color: #eee;
    margin-right: 8px;
    border: 1px solid #000;
`;

export const ReadOnlyInput = styled.input`
    opacity: 0;
`;