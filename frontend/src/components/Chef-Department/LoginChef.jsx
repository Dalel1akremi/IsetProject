import { useState } from "react";
import axios from "axios";

import "./ChefDepart.css";


const LoginChef = () => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const AuthC = async (e) => {
        e.preventDefault();
        try {
		const { data: res } = await axios.post('http://localhost:3000/LoginChef', {
					
		email: email,
		password: password
	});
				localStorage.setItem("token",res.data);
				window.location = "/DashboardChef";
        } catch (error) {
			if (error.response)   {
                setMsg(error.response.data.msg);
            }
        }
    }

    return (
		
		<div className="login_container">
			<div className="login_form_container">
				<div className="right">
					<form  onSubmit={AuthC}  className="form_container" >
						<h1 id="x">Login to Your Account Chef</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} 
							onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} 
							onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						{msg && <div className="error_msg">{msg}</div>}
						<button type="submit" className="green_btn">
							Sing In
						</button>
					</form>
				</div>
				<div className="left ">
					<h1>New Here ?</h1>
					<a href="/RegisterChef">
						<button type="button" className="white_btn">
							Sing Up
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default LoginChef;
