import { useState } from "react";
import axios from "axios";
import "./RegisterChef.css";
const RegisterChef= () => {
	const [firstname,setFirstname] = useState('');
	const [lastname,setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [cin, setCin] = useState('');
	const [nom_dep, setNom_dep] = useState('');
	const [code_dautorisation, setCode_dautorisation] = useState('');
	const [confPassword, setConfPassword] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
	const RegisterC= async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/RegisterChef', {
                firstname:firstname,
				lastname:lastname,
                email: email,
				cin:cin,
				code_dautorisation:code_dautorisation,
                nom_dep:nom_dep,
                password: password,
				confPassword:confPassword
            });
            window.location = "/LoginChef";
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
					<a href="/LoginChef">
						<button type="button" className="white_btn">
							Sing in
						</button>
					</a>
				</div>
				<div className="right">
					<form className="form_container" onSubmit={RegisterC}  >
						<h1 id="x">Create Account Chef </h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							value={firstname} onChange={(e) => setFirstname(e.target.value)} 
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							value={lastname} onChange={(e) => setLastname(e.target.value)} 
							required
							className="input"
						/>
					
					<input
							type="text"
							placeholder="code_dautorisation"
							name="code_dautorisation"
							value={code_dautorisation} onChange={(e) => setCode_dautorisation(e.target.value)} 
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
							type="text"
							placeholder="nom_dep"
							name="nom_dep"
							value={nom_dep} onChange={(e) => setNom_dep(e.target.value)}
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
export default RegisterChef