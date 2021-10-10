import React, {useContext, useState} from 'react';
import {Wrapper} from './Login.styles';
import Button from '../common/Button';
import {Context} from '../../context';
import {useNavigate} from 'react-router-dom';
import API from '../../API';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError]       = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate        = useNavigate();

    const handleSubmit = async () => {
        setError(false);

        try {
            const requestToken = await API.getRequestToken();
            const sessionId    = await API.authenticate(requestToken, username, password);

            setUser({
                sessionId: sessionId.session_id,
                username
            });

            navigate('/');
        } catch (error) {
            setError(true);
        }
    };

    const handleInput = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;

        if (name === 'username') {
            setUsername(value);
        }

        if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <Wrapper>
            {error && <div className="error">There was an error!</div>}
            <label>Username:</label>
            <input type="text" value={username} name="username" onChange={handleInput}/>
            <input type="password" value={password} name="password" onChange={handleInput}/>
            <Button text="Login" callback={handleSubmit}/>
        </Wrapper>
    );
};

export default Login;