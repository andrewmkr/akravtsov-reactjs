import { useDispatch } from 'react-redux';

import * as actionTypes from '../../../store/types';
import { StyledLabel } from '../../../styled-components/buttons';

const ButtonBar = () => {
    const dispatch = useDispatch();

    return <div>
        <StyledLabel onClick={() => dispatch({type: actionTypes.ADD_CARD})}>
            Добавить карточку
        </StyledLabel>
        <StyledLabel onClick={() => dispatch({type: actionTypes.DELETE_CHECKED})}>
            Удалить выбранные карточки
        </StyledLabel>
    </div>;
};

export default ButtonBar;