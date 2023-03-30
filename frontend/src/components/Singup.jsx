import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import './Singup.css';


const Signup = () => {
	const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [num_insc, setNum_insc] = useState('');
    const [cin, setCin] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
	const Register= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/RegisterEtu', {
                name:name,
				cin:cin,
				num_insc:num_insc,
                email: email,
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
							placeholder="name"
							name="name"
							value={name} onChange={(e) => setName(e.target.value)} 
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="CIN"
							name="password"
							value={cin} onChange={(e) => setCin(e.target.value)}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="NUM_insc"
							name="NUM_insc"
							value={num_insc} onChange={(e) => setNum_insc(e.target.value)} 
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
							name="password"
							value={confPassword} onChange={(e) => setConfPassword(e.target.value)}
							required
							className="input"
						/>
						{/* {error && <div className="error_msg">{error}</div>} */}
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
