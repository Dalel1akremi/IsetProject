import React from "react";
import './Login.css';
const Login = () => {
    return (
		
		<div className="login_container">
			<div className="login_form_container">
				<div className="right">
						<h1 id="a">Log In</h1>
                        <form className="form_container">
						<input
							type="email"
							placeholder="Email"
							name="email"
							className="input"
						/>
                        <br></br>
						<input
							type="password"
							placeholder="Password"
							name="password"
							className="input"
						/>
                        <br></br>
						<button type="submit" className="red_btn">
							connect
						</button>
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default Login;
