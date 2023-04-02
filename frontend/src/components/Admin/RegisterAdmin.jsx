import { useState } from "react";
import axios from "axios";
import "./RegisterAdmin.css";
const RegisterAdmin = () => {
	const [name,setName] = useState('');
	const [email, setEmail] = useState('');
	const [cin, setCin] = useState('');
	const [code_previlege, setCode_previlege] = useState('');
	const [confPassword, setConfPassword] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
	const RegisterA= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/RegisterAdmin', {
                name:name,
                email: email,
				cin:cin,
				code_previlege:code_previlege,
                password: password,
				confPassword:confPassword
            });
            window.location = "/LoginAdmin";
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }


	return (
		<div className="signup_container">
			<div className="signup_form_container">
				<div className="left">
					<h1>Welcome Back</h1>
					<a href="/loginAdmin">
						<button type="button" className="white_btn">
							Sign in
						</button>
					</a>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={RegisterA}  >
						<h1 id="x">Create Account Admin</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={name} onChange={(e) => setName(e.target.value)} 
							required
							className="input"
						/>
						
					<input
							type="text"
							placeholder="code_previlege"
							name="code_previlege"
							value={code_previlege} onChange={(e) => setCode_previlege(e.target.value)} 
							required
							className="input"
						/> 
						<input
							type="text"
							placeholder="numero cin"
							name="Numero cin"
							value={cin} onChange={(e) => setCin(e.target.value)} 
							required
							className="input"
						/> 
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={email} onChange={(e) => setEmail(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={password} onChange={(e) => setPassword(e.target.value)}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="confPassword"
							name="confpassword"
							value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
							required
							className="input"
						/>
							{msg && <div className="error_msg">{msg}</div>}
						<button type="submit" className="green_btn">
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default RegisterAdmin;
