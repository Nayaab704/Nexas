const Login = () => {
    return (  
        <div className="login">
            <div className="login-field">
                <div className="login-headings">
                    <h3>PeerMe Login</h3>
                    <p>Enter your login details below</p>
                </div>
                <div className="login-inputs">
                    <p>Email Address</p>
                    <input />
                    <div className="password-line">
                        <p>Password</p>
                        <a href="/">Forgot Password?</a>
                    </div>
                    <input />
                </div>
                <div className="login-buttons">
                    <button className="login-button">
                        Login
                    </button>
                    <div className="signup-line">
                        <p>Not registered?</p>
                        <a href="/">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Login;