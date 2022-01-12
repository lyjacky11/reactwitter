import { auth } from "../firebase";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
    const [emailField, setEmailField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [authError, setAuthError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        document.title = `Login | Reactwitter`;
    }, []);

    const handleAuth = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(emailField, pwdField);
            setAuthError(null);
            history.push('/home');
        } catch (error) {
            setAuthError(error.message);
        }
    };

    return (
        <div className="login__container">
            <form onSubmit={handleAuth}>
                <h5>Email:</h5>
                <input className="login__input" type="email" id="email" placeholder="ex. user@domain.com" value={emailField} onChange={(e) => setEmailField(e.target.value)} />
                <h5>Password:</h5>
                <input className="login__input" type="password" id="password" placeholder="Password" value={pwdField} onChange={(e) => setPwdField(e.target.value)} />
                <br />
                <button type="submit" className="login__button">
                    Log In
                </button>
                {authError && <p>ERROR: {authError}</p>}
            </form>
            <br />
            <div>
                Don't have an account?<br /><Link to="/register"><button type="button" className="login__button">Register now!</button></Link>
            </div>
        </div>
    )
}

export default Login;
