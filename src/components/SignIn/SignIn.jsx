import { Component } from "react";
import Input from "../Form/Input/Input";
import Button from "../UI/Button/Button";
import './SignIn.scss';
import {auth,signInWhithGoogle} from '../../firebase/firebase.utils'
class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			email:'',
			password:''
		 }
	}
	handleSubmit=async e=>{
		e.preventDefault();
		const {email,password} = this.state;
		try {
			await auth.signInWithEmailAndPassword(email,password);
			this.setState({email:'',password:''})
		} catch (error) {
			console.log(error)
		}
	}
	handleChange=e=>{
		const {value,name} = e.target;
		this.setState({[name]:value});
	}
	render() { 
		return (
			<div className='sign-in'>
				<h2 className='title'>
					i Already have an acounts
				</h2>
				<span>
					sign in with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<Input 
						name ='email' 
						type="email" 
						value={this.state.email}
						onChange={this.handleChange}
						label='Email'
						required
					/> 
					<Input 
						name ='password' 
						label='Password'
						onChange={this.handleChange}
						type="password" value={this.state.password} required/> 
					<div className='buttons'>
						<Button type='submit'>Submit</Button>
						<Button onClick={signInWhithGoogle} isGoogleButton>SIGN IN WHITH GOOGLE</Button>
					</div>
				</form>
			</div>
		);
	}
}
 
export default SignIn;