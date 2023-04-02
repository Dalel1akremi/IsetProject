
import React from "react";
import { Fragment } from "react";
import { BrowserRouter,Route,} from "react-router-dom";


import LoginChef  from "./components/Chef-Department/LoginChef";
import RegisterChef from "./components/Chef-Department/RegisterChef";
import RegisterEtu from "./components/Etudiants/RegisterEtu";
import LoginEtu from "./components/Etudiants/LoginEtu";
import LoginAdmin from "./components/Admin/LoginAdmin";
import RegisterAdmin from "./components/Admin/RegisterAdmin";





function App() {

	return (
    
    <Fragment>
      <BrowserRouter>
      <Route  path="/RegisterEtu"><RegisterEtu/></Route>
		  <Route  path="/LoginEtu"><LoginEtu/></Route>
      <Route  path="/RegisterChef"><RegisterChef/></Route>
		  <Route  path="/Loginchef"><LoginChef/></Route>
      <Route  path="/RegisterAdmin"><RegisterAdmin/></Route>
		  <Route  path="/LoginAdmin"><LoginAdmin/></Route>
      
      </BrowserRouter>
    </Fragment>

	);
}

export default App;