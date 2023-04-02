import { useState } from "react";
import axios from "axios";
import './Singup.css';


const Signup = () => {
	const [firstname,setFirstName] = useState('');
	const [lastname,setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [cin, setCin] = useState('');
	const [num_insc, setNum_insc] = useState('');
	const [confPassword, setConfPassword] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
	const Register= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/RegisterEtu', {
                firstname:firstname,
				lastname:lastname,
                email: email,
				cin:cin,
				num_insc:num_insc,
                password: password,
				confPassword:confPassword
            });
            window.location = "/login";
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
					<a href="/login">
						<button type="button" className="white_btn">
							Sing in
						</button>
					</a>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={Register}  >
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={firstname} onChange={(e) => setFirstName(e.target.value)} 
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={lastname} onChange={(e) => setLastName(e.target.value)} 
							required
							className="input"
						/>
					
					<input
							type="text"
							placeholder="Numero d'insecrit"
							name="Numero d'insecrit"
							value={num_insc} onChange={(e) => setNum_insc(e.target.value)} 
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

export default Signup;
