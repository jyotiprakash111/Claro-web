import { Redirect, Route } from 'react-router-dom';
import User from '../shared/user';

interface props {
    component: any;
    [x: string]: any;
}

const PrivateRoute = ({ component: Component, ...rest }: props) => {
    return (
        <Route
            {...rest}
            render={(props) => User.authenticated ? <Component {...props} />
                : <Redirect to={{ pathname: '/customer/login', state: { from: props.location } }} />
            }
        />
    )
}

export default PrivateRoute;