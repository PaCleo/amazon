import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

export const signOut = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    window.location.href = "/Login";
};


function Login() {

    const [name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [user, setUser] = useState();
    const cachedUser = localStorage.getItem('usuario');

    const signIn = async e => {
        e.preventDefault();
        if (!cachedUser) {
            const response = await Axios.post("http://15.229.4.24:3002/auth/login", {
                name: name,
                password: Password
            }).then((response) => {
                setUser(response.data);
                localStorage.setItem('usuario', response.data.user.name);
                localStorage.setItem('token', `Bearer ${response.data.token}`);
            });
        };
    };
    if (user) {
        window.location.href = "/";
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form onSubmit={signIn}>
                    <h5>E-mail</h5>
                    <input
                        type="text"
                        placeholder='username'
                        value={name}
                        onChange={({ target }) => { setName(target.value); }}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder='password'
                        value={Password}
                        onChange={({ target }) => { setPassword(target.value); }}
                    />
                    <button type='submit'
                        className='login_signInButton'>
                        Login
                    </button>
                </form>
                <p>
                    By signin-in you agree to Amazon's FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-
                    Based Ads Notice.
                </p>

                <Link to='/register'>
                    <button
                        className='login_registerButton'>Create your Amazon Account
                    </button>
                </Link>
            </div>
        </div>
    );
}



export default Login;