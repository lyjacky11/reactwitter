import { auth } from "../firebase";
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

function Register() {
    const [firstNameField, setFirstNameField] = useState("");
    const [lastNameField, setLastNameField] = useState("");
    const [emailField, setEmailField] = useState("");
    const [pwdField, setPwdField] = useState("");
    const [authError, setAuthError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        document.title = `Register | Reactwitter`;
    }, []);

    const handleAuth = async (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(emailField, pwdField)
            .then(() => {
                const user = auth.currentUser;
                user.updateProfile({
                    displayName: `${firstNameField} ${lastNameField}`,
                })
                    .then(() => {
                        history.push("/home");
                    })
                    .catch((err) => {
                        setAuthError(err.message);
                    });
            })
            .catch((err) => {
                setAuthError(err.message);
            });
    };

    return (
        <div className="login__container">
            <form onSubmit={handleAuth}>
                <h5>First Name:</h5>
                <input type="text" id="firstName" placeholder="ex. John" value={firstNameField} onChange={(e) => setFirstNameField(e.target.value)} />
                <h5>Last Name:</h5>
                <input type="text" id="lastName" placeholder="ex. Doe" value={lastNameField} onChange={(e) => setLastNameField(e.target.value)} />
                <h5>Email:</h5>
                <input type="email" id="email" placeholder="ex. user@domain.com" value={emailField} onChange={(e) => setEmailField(e.target.value)} />
                <h5>Password:</h5>
                <input type="password" id="password" placeholder="Password" value={pwdField} onChange={(e) => setPwdField(e.target.value)} />
                <br />
                <button type="submit" className="login__button">
                    Create Account
                </button>
                {authError && <p>ERROR: {authError}</p>}
            </form>
            <br />
            <div>
                Already have an account?<br /><Link to="/login"><button type="button" className="login__button">Log In</button></Link>
            </div>
        </div>
    )
}

export default Register;
