import React from 'react';


class CreateProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			no_of_years_worked: 0,
			availability: '',
			location: '',
			education: '',
			experience: '',
			achievements: '',
			courses: '',
			certification: '',
			skills: '',
			languages: ''
		}
	}
	onNoOfYears = (event) => {
		this.setState({no_of_years_worked: event.target.value})
	}
	onAvailabilityChange = (event) => {
		this.setState({availability: event.target.value})
	}
	onLocationChange = (event) => {
		this.setState({location: event.target.value})
	}
	onEducationChange = (event) => {
		this.setState({education: event.target.value})
	}
	onExperienceChange = (event) => {
		this.setState({experience: event.target.value})
	}
	onAchievementsChange = (event) => {
		this.setState({achievements: event.target.value})
	}
	onCoursesChange = (event) => {
		this.setState({courses: event.target.value})
	}
	onCertificationChange = (event) => {
		this.setState({certification: event.target.value})
	}
	onSkillsChange = (event) => {
		this.setState({skills: event.target.value})
	}
	onLanguagesChange = (event) => {
		this.setState({languages: event.target.value})
	}
	onSubmitProfile = () => {
		const data = {
			no_of_years_worked: this.state.no_of_years_worked,
			availability: this.state.availability,
			location: this.state.location,
			education: this.state.education,
			experience: this.state.experience,
			achievements: this.state.achievements,
			courses: this.state.courses,
			certification: this.state.certification,
			skills: this.state.skills,
			languages: this.state.languages
		}
		this.props.loadUser(data);
		this.props.onRouteChange('home');
	}
	render() {
	    return (
	    	<div>
	    		<nav class="pa3 pa4-ns">
				  <a class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns" href="#" title="Home">Welcome {this.props.user.name}</a>
				  <div class="tc pb3">
				    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
				    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>
				    <a class="link dim gray f6 f5-ns dib mr3" href="#" title="Store">Store</a>
				    <a class="link dim gray f6 f5-ns dib" href="#" title="Contact">Contact</a>
				  </div>
				</nav>
				<p>Create your profile below</p>
		    	<form class="pa4 black-80">
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Number of years worked </label>
				    <input 
				    	onChange={this.onNoOfYears}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Enter number of years you have worked in your field.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Availability </label>
				    <input 
				    	onChange={this.onAvailabilityChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Enter your availability in case of a job offer.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Location </label>
				    <input 
				    	onChange={this.onLocationChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Enter the location you prefer to work in.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Education </label>
				    <input 
				    	onChange={this.onEducationChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Enter your highest level of education</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Experience </label>
				    <input 
				    	onChange={this.onExperienceChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Enter your past work experience</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Achievements </label>
				    <input 
				    	onChange={this.onAchievementsChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Any awards or medals you have won.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Courses </label>
				    <input 
				    	onChange={this.onCoursesChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Any professional courses you have taken</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Certification </label>
				    <input 
				    	onChange={this.onCertificationChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">Any relevant Certification you posses.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Skills </label>
				    <input 
				    	onChange={this.onSkillsChange}
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">List the skills you have acquired so far.</small>
				  </div>
				  <div class="measure">
				    <label for="name" class="f6 b db mb2">Languages </label>
				    <input
				    	onChange={this.onLanguagesChange} 
				    	id="name" 
				    	class="input-reset ba b--black-20 pa2 mb2 db w-100" 
				    	type="text" 
				    	aria-describedby="name-desc"
				    />
				    <small id="name-desc" class="f6 black-60 db mb2">List the languages you are proficient in. </small>
				  </div>
				  <div class="mt3">
				    <input 
			    		onClick={this.onSubmitProfile}
			    		class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" 
			    		type="submit" 
			    		value="Submit Profile"
			    	/>
				  </div>
				</form>
	    	</div>
	    );
	}
}

export default CreateProfile;