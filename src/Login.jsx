import React, { useState } from 'react';
import './Login.css';

function Login() {
	const [form,setform] = useState({username:"",password:""});
	const handler = (e) =>{
		setform({...form,[e.target.name]:e.target.value})
	}
	const submithandler = (e) =>{
		e.preventDefault();
		alert("Submitted Successfully")

	}
	
	return(
  <div>
 
	<div className="login-container">
	  <h1>Login</h1>
	  <form onSubmit={submithandler}>
		<div className="form-group">
		  <label htmlFor="username">Username:</label>
		  <input type="text" id="username" name="username" value={form.username} onChange={handler} required />
		</div>
		<div className="form-group">
		  <label htmlFor="password">Password:</label>
		  <input type="password" id="password" name="password" value={form.password} onChange={handler} required />
		</div>
		<button type="submit">Login</button>
	  </form>
	</div>
  
  </div>
	)
  
}

export default Login;
