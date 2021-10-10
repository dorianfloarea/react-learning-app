import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Context} from '../../context';
import {Wrapper} from './LoginLink.styles';

const LoginLink = () => {
    const [user, setUser] = useContext(Context);

    const logOut = () => {
        setUser(undefined);
    }

    return (
        <Wrapper>
            {!user && (
                <Link to="/login">
                    <span>Log in</span>
                </Link>
            )}
            {user && (
                <span className="loggedin">
                    Logged in as: {user.username}. | <Link to="#" onClick={logOut}>Log out</Link>
                </span>
            )}
        </Wrapper>
    );
};

export default LoginLink;