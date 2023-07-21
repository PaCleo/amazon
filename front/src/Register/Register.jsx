import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';


function Login() {
    const [emailReg, setEmailReg] = useState('');
    const [PasswordReg, setPasswordReg] = useState('');
    const [nameReg, setNameReg] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/auth/register", {
            name: nameReg,
            email: emailReg,
            password: PasswordReg,
        }).then((response) => {
            console.log(response);
        });

    };

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
                <h1>Create Your Account</h1>
                <form>

                    <h5>Name</h5>
                    <input
                        type="text" value={nameReg}
                        onChange={e => setNameReg(e.target.value)}
                    />

                    <h5>E-mail</h5>
                    <input
                        type="text" value={emailReg}
                        onChange={e => setEmailReg(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input
                        type="password" value={PasswordReg}
                        onChange={e => setPasswordReg(e.target.value)}
                    />

                    <button
                        onClick={register}
                        className='login_signInButton'>
                        Create
                    </button>
                </form>

                <p>
                    By signin-in you agree to Amazon's FAKE CLONE Conditions of Use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest-
                    Based Ads Notice.
                </p>
            </div>
        </div>
    );
}

export default Login;