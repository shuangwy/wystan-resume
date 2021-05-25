import React, { useContext, createContext, useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import { Login } from './page';
import './index.css';
import {
    Route,
    HashRouter,
    Switch,
    useHistory,
    useLocation,
    Redirect,
    withRouter
} from 'react-router-dom';
import { routes } from './page/route'

function App () {
    useEffect(() => {
        console.log('this is enter')
    }, []);

    return (
        <HashRouter>
            <ProvideAuth>
                <Switch>
                    {routes.map(({ path, component, title, ...rest }) => {
                        return <Route path={path} key={path} render={() => {
                            document.title = title || 'wystan'
                            const Cmp = withRouter(component)
                            return <Cmp />
                        }} {...rest} />
                    })}
                    <Route path='/login' component={withRouter(LoginPage)} />
                    <PrivateRoute path='/protected'>
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </ProvideAuth>
        </HashRouter>
    );
}

const fakeAuth = {
    isAuthenticated: false,
    signIn (cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signOut (cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
};

const authContext = createContext();

function ProvideAuth ({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>
        {children}
    </authContext.Provider>;
}

function useAuth () {
    return useContext(authContext);
}

function useProvideAuth () {
    const [user, setUser] = useState(null);

    const signIn = (cb) => {
        return fakeAuth.signIn(() => {
            setUser('user');
            cb();
        });
    };

    const signOut = (cb) => {
        return fakeAuth.signOut(() => {
            setUser(null);
            cb();
        });
    };

    return {
        user,
        signIn,
        signOut,
    };
}

// function AuthButton () {
//     let history = useHistory();
//     let auth = useAuth();

//     return auth.user ? (
//         <p>
//             Welcome!
//             {' '}
//             <button
//                 onClick={() => {
//                     auth.signOut(() => history.push('/'));
//                 }}
//             >
//                 Sign out
//             </button>
//         </p>
//     ) : (
//         <p>You are not logged in.</p>
//     );
// }

function PrivateRoute ({ children, ...rest }) {
    let auth = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />}
        />
    );
}
function ProtectedPage () {
    return <h3>Protected</h3>;
}

function LoginPage () {
    let history = useHistory();
    let location = useLocation();
    let auth = useAuth();

    let { from } = location.state || { from: { pathname: '/' }};
    let login = () => {
        auth.signIn(() => {
            history.replace(from);
        });
    };

    return <Login loginApp={login} />;
}
export default App;
