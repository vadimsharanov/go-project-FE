import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import useFetch from "../../hooks/useFetch"
const Authentication = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [{ response, isLoading, error }, doFetch] = useFetch("/users/login");
		console.log(response, isLoading, error);
	
	const handleSubmit = (e) => {
		e.preventDefault()
		doFetch({
			method: "post",
			data: {
				user: {
					email: email,
					password:password
				}
			}
		})
	}

	return (
		<div className="auth-page" >
			<div className="container page" >
				<div className="row">
					<div className="col-md-6 offset-md-3 col-xs-12" >
						<h1 className="text-xs-center">Login</h1>
						<p className="text-xs-center">
							 <Link to="register">Need an account?</Link> 
						</p>
						<form onSubmit={handleSubmit} >
							<fieldset>
								<fieldset className="form-group">
									<input type="email"
									 className="form-control form-control-lg" 
									 placeholder="Email" 
									 value={email}
									 
									 onChange={(e)=> setEmail(e.target.value)}
									 />
								</fieldset>
							</fieldset>

							<fieldset>
								<fieldset className="form-group">
									<input 
									type="password"
									className="form-control form-control-lg"
									placeholder="Password"
									value={password}
									onChange={(e)=> setPassword(e.target.value)}
									/>
								</fieldset>
							</fieldset>

							<button className="btn btn-lg btn-primary pull-xs-right" type="sumbit" disabled={isLoading} >Sign in</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Authentication