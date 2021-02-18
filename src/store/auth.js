import { createSlice } from '@reduxjs/toolkit';
import { users } from './users';

const initialState = {
    user: {
        userName: undefined,
        type: 'usual'
    }
}

const checkUserCredentials = (action) => {
    const user = users.find(user => user.email === action.payload.userName);
    if (!user) {
        alert('Пользователь не найден');
        return {userName: undefined, type: 'usual'};
    } else if (user.password === action.payload.password) {
        sessionStorage.setItem('userName', user.email);
        sessionStorage.setItem('userType', user.type);
        return {userName: user.email, type: user.type};
    } else {
        alert('Неверный пароль');
        return {userName: undefined, type: 'usual'};
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.user = checkUserCredentials(action);
        },
        logout(state) {
            sessionStorage.removeItem('userName');
            sessionStorage.removeItem('userType');
            state.user = initialState.user;
        },
        getSession(state) {
            state.user.userName = sessionStorage.getItem('userName');
            state.user.type = sessionStorage.getItem('userType');
        }
    }
});

export const { login, logout, getSession } = authSlice.actions;
export default authSlice.reducer;