import React from 'react';


class Error extends React.Component {
	render() {
	    return (
	    	<section class="vh-100 bg-washed-blue baskerville">
			  <header class="tc ph5 lh-copy">
			      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">Fatal Error.</h1>
			      <h2 class="tc f1-l fw1">Wrong username or password.</h2>
			  </header>
			  <p class="fw1 i tc mt4 mt5-l f4 f3-l">Please enter valid details or check with admin!</p>
			  <ul class="list tc pl0 w-100 mt5">
			    <li class="dib"><a class="f5 f4-ns link black db pv2 ph3 hover-light-purple" href="/">Click here to try again</a></li>
			  </ul>
			</section>
	    );
	}
}

export default Error;