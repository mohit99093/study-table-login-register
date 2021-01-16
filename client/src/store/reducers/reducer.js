import * as actions from "../actions/actions";

let initialState = {
    //auth
    idToken: localStorage.getItem('idToken') || null,
    userId: localStorage.getItem('userId') || null,
    userName: localStorage.getItem('userName') || null,
};

let expireDate = localStorage.getItem('expireDate');

if (expireDate) {
    let remainingTime = expireDate - new Date().getTime();
    console.log(remainingTime / 1000 + "s remaining of session.");
    if (remainingTime <= 0) {
        localStorage.removeItem('idToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('expireDate');
        initialState = {
            ...initialState,
            idToken: null,
            userId: null
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.LOG_IN: return authSuccess(state, action);
        case actions.LOG_OUT: return logOut(state, action);
        default:
            return state;
    }
};

function authSuccess(state, action) {
    return {
        ...state,
        idToken: action.idToken,
        userId: action.userId,
        userName:action.userName
    }
}

function logOut(state, action) {
    return {
        ...state,
        idToken: null,
        userId: null,
        useName:null
    }
}

export default reducer;