import React from 'react';


class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		}
	}
	onNameChange = (event) => {
		this.setState({name: event.target.value})
	}
	onEmailChange = (event) => {
		this.setState({email: event.target.value})
	}
	onPasswordChange = (event) => {
		this.setState({password: event.target.value})
	}
	onSubmitRegister = () => {
		const data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password
		}
		this.props.onRouteChange('CreateProfile');
		this.props.loadUser(data);
	}
	render() {
	    return (
	    	<article class="bg-blue br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">	
		      <main class="pa4 black-80">
				  <form action="sign-up_submit" method="get" accept-charset="utf-8">
				    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
				      <legend class="f4 fw6 ph0 mh0">Sign Up</legend>
				      <div class="mt3">
				        <label class="db fw4 lh-copy f6" for="email-address">Name</label>
				        <input 
				        	onChange={this.onNameChange}
				        	class="pa2 input-reset ba bg-transparent w-100 measure" 
				        	type="text" 
				        	name="name"  
				        	id="name"
				        />
				      </div>
				      <div class="mt3">
				        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
				        <input 
				        	onChange={this.onEmailChange}
				        	class="pa2 input-reset ba bg-transparent w-100 measure" 
				        	type="email" 
				        	name="email-address"  
				        	id="email-address"
				        />
				      </div>
				      <div class="mt3">
				        <label class="db fw4 lh-copy f6" for="password">Password</label>
				        <input 
				        	onChange={this.onPasswordChange}
				        	class="b pa2 input-reset ba bg-transparent" 
				        	type="password" 
				        	name="password"  
				        	id="password"
				        />
				      </div>
				    </fieldset>
				    <div class="mt3">
				    	<input 
				    		onClick={this.onSubmitRegister}
				    		class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
				    		type="submit" 
				    		value="Sign Up"
				    	/>
				    </div>
				  </form>
				</main>
			</article>
	    );
	}
}

export default Register;