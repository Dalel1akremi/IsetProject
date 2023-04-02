
import React from "react";
import Home from "./components/Etudiants/Home";
import Login from "./components/Etudiants/Login";
import Signup from "./components/Etudiants/Singup";
import { Fragment } from "react";
import { BrowserRouter,Route,Redirect} from "react-router-dom";
import './App.css'





function App() {
	const user = localStorage.getItem("token");
	return (
    
    <Fragment>
      <BrowserRouter>
      <Route  path="/signup" ><Signup/></Route>
		 	<Route path="/login" ><Login/></Route>
       {user && <Route path="/" ><Home/></Route>} 
			{! user && <Route  exact path="/" > <Redirect  to="/login" /></Route>}
      </BrowserRouter>
    </Fragment>

	);
}

export default App;