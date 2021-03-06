import { Component } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/action";
import Input from "../Form/Input/Input";
import Button from "../UI/Button/Button";
import './SignUp.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			displayName:'',
			email:'',
			password:'',
			confirmPassword:''
		 }
	}
	handleSubmit=async e=>{
		e.preventDefault();

		const {email,password,confirmPassword,displayName} = this.state;
		if (password !== confirmPassword) {
			alert('pass dont match');
			return;
		} 
		this.props.signUpStart({displayName,email,password})
		
	}
	handleChange=e=>{
		const {value,name} = e.target;
		this.setState({[name]:value});
	}
	render() { 
		return (
			<div className='sign-up'>
				<h2 className='title'>
					i Do not have an acount
				</h2>
				<span>
					sign up with your email and password
				</span>
				<form onSubmit={this.handleSubmit}>
					<Input 
						name ='displayName' 
						type="text" 
						value={this.state.displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/> 
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
						type="password" 
						value={this.state.password} 
						required/> 
					<Input 
						name ='confirmPassword' 
						label='Confirm Password'
						onChange={this.handleChange}
						type="password" 
						value={this.state.confirmPassword} 
						required
						/> 
					<div className='buttons'>
						<Button type='submit'>Submit</Button>
					</div>
				</form>
			</div>
		);
	}
}
const mapDispatchProps = dispatch=>({
	signUpStart:(userCredentials)=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchProps)( SignUp);