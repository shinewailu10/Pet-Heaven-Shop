import React, { useState } from "react";
import { Login } from "./Login";
import { Registration } from "./Registration";


function Registering() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    
    <div className="Register">
      {
        currentForm === "register" ?  <Registration onFormSwitch={toggleForm}/>: <Login onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Registering;