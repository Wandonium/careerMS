import React from 'react';
import './Home.css';


class Home extends React.Component {
	render() {
		const { onRouteChange, user } = this.props;
	    return (
	     	<div>
	     		<header class="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
				  <nav class="f6 fw6 ttu tracked">
				    <a class="link dim white dib mr3" href="#" title="Home">Home</a>
				    <a class="link dim white dib mr3" href="#" title="About">About</a>
				    <a class="link dim white dib mr3" href="#" title="Store">Dashboard</a>
				    <a class="link dim white dib" href="#" title="Contact">Contact</a>
				  </nav>
				</header>

				<div class="flex flex-column">
					<section class="ba br3 w-75 mt6 ml6">
						<div class="pa4 tc">
						  <img
						      src="http://tachyons.io/img/logo.jpg"
						      class="br-100 ba h3 w3 dib" alt="avatar" />
						  <p>{user.name}</p>
						  <ul class="list pl0">
						  	<li>Experience: {user.no_of_years_worked}</li>
						  	<li>Availability: {user.availability}</li>
						  	<li>Location: {user.location}</li>
						  </ul>
						</div>
						</section>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Education</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.education}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Experience</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.experience}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Achievements</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.achievements}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Courses</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.courses}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Certification</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.certification}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Skills</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						      {user.skills}
						    </p>
						  </div>
						</article>

						<article class="center mw5 mw6-ns hidden ba mv4">
						  <h1 class="f4 bg-near-black white mv0 pv2 ph3">Languages</h1>
						  <div class="pa3 bt">
						    <p class="f6 f5-ns lh-copy measure mv0">
						     {user.languages}
						    </p>
						  </div>
						</article>
				</div>
	     	</div>
	    );
	}
}

export default Home;