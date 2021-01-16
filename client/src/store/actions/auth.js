import * as actions from '../actions/actions'

export const logout = (dispatch) => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    localStorage.removeItem('expireDate');
    dispatch({ type: actions.LOG_OUT });
    window.location = "/";
}