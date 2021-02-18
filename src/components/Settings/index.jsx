import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { FcCheckmark } from "react-icons/fc";

import * as actionTypes from '../../store/types';
import { StyledDiv, StyledLabel, ReadOnlySpan, ReadOnlyInput} from '../../styled-components/buttons';

const Settings = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    return <StyledDiv>
        {state.auth.user.type === 'admin' ?
            <React.Fragment>
                <h1>Настройки</h1>
                <StyledLabel>
                    Только просмотр
                    <ReadOnlySpan>
                        {state.cards.readOnlyMode && <FcCheckmark size={19} />}
                    </ReadOnlySpan>
                    <ReadOnlyInput
                        type="checkbox"
                        checked={state.cards.readOnlyMode}
                        onChange={() => dispatch({type: actionTypes.READ_ONLY})} />
                </StyledLabel>
            </React.Fragment> : 
            <h1>Недостаточно доступа для просмотра страницы</h1>
        }
    </StyledDiv>
}

export default Settings;