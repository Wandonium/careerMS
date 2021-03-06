import React from 'react';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: ''
		}
	}
	onEmailChange = (event) => {
		console.log("on email change...");
		this.setState({signInEmail: event.target.value});
	}
	onPasswordChange = (event) => {
		console.log("on password change...");
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		const email = this.props.user.email;
		const psswrd = this.props.user.password;
		if(email === this.state.signInEmail && psswrd === this.state.signInPassword)
			this.props.onRouteChange('home');
		else {
			this.props.onRouteChange('onError');
		}
	}
	render() {
		const { onRouteChange } = this.props;
	    return (
	      <article class="bg-blue br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
	        <main class="pa4 black-80">
	          <form class="measure center">
	            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
	              <legend class="f4 fw6 ph0 mh0">Sign In</legend>
	              <div class="mt3">
	                <label class="db fw6 lh-copy f6" for="email-address">Sign In As</label>
	                 <select>
	                  <option value="job-seeker">Job Seeker</option>
	                  <option value="admin">Admin</option>
	                </select> 
	              </div>
	              <div class="mt3">
	                <label class="db fw6 lh-copy f6" for="email-address">Email</label>
	                <input
	                	onChange={this.onEmailChange} 
	                	class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	                	type="email" 
	                	name="email-address"  
	                	id="email-address" 
	                />
	              </div>
	              <div class="mv3">
	                <label class="db fw6 lh-copy f6" for="password">Password</label>
	                <input 
	                	onChange={this.onPasswordChange}
	                	class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
	                	type="password" 
	                	name="password"  
	                	id="password" 
	                />
	              </div>
	              <label class="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
	            </fieldset>
	            <div class="">
	              <input 
	              	onClick={this.onSubmitSignIn}
	              	class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
	              	type="submit" 
	              	value="Sign in" 
	              />
	            </div>
	            <div class="lh-copy mt3">
	              <p onClick={() => onRouteChange('register')} class="f6 link dim black db">Sign up</p>
	              <a href="#0" class="f6 link dim black db">Forgot your password?</a>
	            </div>
	          </form>
	        </main>
	      </article>
	    );
	}
}

export default Login;