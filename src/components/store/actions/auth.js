import * as actionTypes from './actionTypes';
import axios from 'axios';

// actionTypes.AUTH_START is a constant
export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

// In this case a token is also returned is a constant
export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

// AUTH_FAIL is returned with an error if auth fails
export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

// The credentials are removed from the localStorage
// loggin out the user
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}


export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        // Call to authStart() (see above)
        dispatch(authStart());
        // we post username and password the api auth system, a token is returned
        // if the call was successful
        axios.post('http://127.0.0.1/rest-auth/login/', {
            username: username,
            password: password
        })
        .then(res => {
            // token is the key (token) returned by the rest-auth on a successfull login
            const token = res.data.key;
            // expiration date will be the time the user will be logged in before the system kick him(her) out
            const expirationDate = new Date(new Date().getTime() + 3600 + 1000);
            // the token and expirationDate are stored using the browser
            // localStorage api so we have this vars persisting in time
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            // Then we call authSuccess because we're logged in
            dispatch(authSuccess(token));
            // then we set a timer of 1 hour to logout the user
            // see above in checkAuthTimeOut definition
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        // Call to authStart() (see above)
        dispatch(authStart());
        // we post username and password the api auth system, a token is returned
        // if the call was successful
        axios.post('http://127.0.0.1/rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
        .then(res => {
            // token is the key (token) returned by the rest-auth on a successfull login
            const token = res.data.key;
            // expiration date will be the time the user will be logged in before the system kick him(her) out
            const expirationDate = new Date(new Date().getTime() + 3600 + 1000);
            // the token and expirationDate are stored using the browser
            // localStorage api so we have this vars persisting in time
            localStorage.setItem('token',token);
            localStorage.setItem('expirationDate',expirationDate);
            // Then we call authSuccess because we're logged in
            dispatch(authSuccess(token));
            // then we set a timer of 1 hour to logout the user
            // see above in checkAuthTimeOut definition
            dispatch(checkAuthTimeOut(3600));
        })
        .catch(err => {
            dispatch(authFail(err));
        });
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined){
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()){
                dispatch(logout()); // Expiration date has already passed
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeOut( (expirationDate.getTime() - new Date.getTime()) / 1000 ) );
            }
        }
    }
}