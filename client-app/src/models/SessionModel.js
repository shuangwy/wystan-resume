import callApi, { AsyncAction } from '../services/call';
// import { cookie } from '../utils/helper';
// import RouterModel from './RouterModel';
import md5 from 'blueimp-md5'
const KEEP_ACCESS_TOKEN = 'KEEP_ACCESS_TOKEN';
const KEEP_LOGIN_USER = 'KEEP_LOGIN_USER';
const LOGOUT = 'LOGOUT';
const REMOVE_ACCESS_TOKEN = 'REMOVE_ACCESS_TOKEN';
const REMOVE_LOGIN_USER = 'REMOVE_LOGIN_USER';
const REMOVE_IS_LOGIN_SUCCESS = 'REMOVE_IS_LOGIN_SUCCESS';
const CRYPTO_KEY = 'WYSTAN_S_WANG'
const SessionModel = (function () {
    const name = 'SessionModels';
    const LOGIN_REQUEST_ACTION = AsyncAction(`${name}/LOGIN`);
    return {
        name,
        state: {
            access: {
                defaultState: 'wystanshuang',
                reducers: {
                    [LOGIN_REQUEST_ACTION.REQUEST]: (state, action) => {
                        return 123;
                    },
                    [LOGIN_REQUEST_ACTION.FAILURE]: (state, action) => {
                        return 123;
                    },
                    [LOGIN_REQUEST_ACTION.SUCCESS]: (state, action) => {
                        console.log('state', state, action);
                        return 123;
                    },
                },
            },
            isFetching: {
                defaultState: false,
                reducers: {
                    [LOGIN_REQUEST_ACTION.REQUEST]: () => true,
                    [LOGIN_REQUEST_ACTION.SUCCESS]: () => false,
                    [LOGIN_REQUEST_ACTION.FAILURE]: () => false,
                },
            },
        },
        actions: {
            login: ({ username, password, onSuccess, onFailure }) => {
                return callApi({
                    uri: '/api/user/login',
                    method: 'POST',
                    params: { username: username, password: md5(password, CRYPTO_KEY) },
                    LOGIN_REQUEST_ACTION,
                    onSuccess,
                    onFailure,
                })
            },
            keepAccessToken: ({ accessToken }) => ({
                type: KEEP_ACCESS_TOKEN,
                payload: accessToken,
            }),
            removeAccessToken: () => ({
                type: REMOVE_ACCESS_TOKEN,
            }),
            /* ???????????????????????? */
            keepLoginUser: ({ loginUser }) => ({
                type: KEEP_LOGIN_USER,
                payload: loginUser,
            }),
            removeLoginUser: () => ({
                type: REMOVE_LOGIN_USER,
            }),
            /* ???????????????????????? */
            loginSuccess: () => ({
                type: LOGIN_REQUEST_ACTION.SUCCESS,
            }),
            removeIsLoginSuccess: () => ({
                type: REMOVE_IS_LOGIN_SUCCESS,
            }),
            /* ???????????? */
            logout: () => ({
                type: LOGOUT,
            }),
        },
        selectors: (state) => {
            const currentState = state[name];
            return {
                getLoginUser: () => currentState.loginUser,
                getIsLoginSuccess: () => currentState.isLoginSuccess,
                getIsLoginFetching: () => currentState.isLoginFetching,
                getAccessToken: () => currentState.accessToken,
            };
        },
    // state: {
    //     accessToken: {},
    //     loginUser: {},
    //     isLoginSuccess: false,
    //     isLoginFetching: false,
    // },
    // reducers: {
    //     accessToken: (state = SessionModel.state.accessToken, action) => {
    //         const { type, payload } = action;
    //         const accessToken = payload;
    //         // [KEEP_ACCESS_TOKEN]: (state, action)=>{
    //         //     const { type, payload } = action;
    //         //     const accessToken = payload;
    //         //     return {
    //         //         ...state,
    //         //         ...accessToken
    //         //     };
    //         // }
    //         switch (type) {
    //             case KEEP_ACCESS_TOKEN:
    //                 return {
    //                     ...state,
    //                     ...accessToken
    //                 };
    //             case LOGOUT:
    //             case REMOVE_ACCESS_TOKEN:
    //                 return {};
    //             default:
    //                 return state;
    //         }
    //     },
    //     loginUser: (state = SessionModel.state.loginUser, action) => {
    //         const { type, payload } = action;
    //         const loginUser = payload;
    //         switch (type) {
    //             case KEEP_LOGIN_USER:
    //                 return { ...state, ...loginUser };
    //             case LOGOUT:
    //             case REMOVE_LOGIN_USER:
    //                 return {};
    //             default:
    //                 return state;
    //         }
    //     },
    //     isLoginSuccess: (state = SessionModel.state.isLoginSuccess, action) => {
    //         switch (action.type) {
    //             case LOGIN_REQUEST_ACTION.REQUEST:
    //                 console.log(11111, '123')
    //                 return true;
    //             case LOGOUT:
    //                 cookie.clear();
    //                 return false;
    //             case REMOVE_IS_LOGIN_SUCCESS:
    //                 return false;
    //             default:
    //                 return state;
    //         }
    //     },
    //     isLoginFetching: (state = SessionModel.state.isLoginFetching, action) => {
    //         switch (action.type) {
    //             case LOGIN_REQUEST_ACTION.REQUEST:
    //                 console.log(11111, '456')
    //                 return true;
    //             case LOGIN_REQUEST_ACTION.SUCCESS:
    //             case LOGIN_REQUEST_ACTION.FAILURE:
    //                 return false;
    //             default:
    //                 return state;
    //         }
    //     }
    // }
    };
})();
export default SessionModel;
