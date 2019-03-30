import React, { Component } from 'react';
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import CreateProfile from './components/CreateProfile/CreateProfile'
import OnError from './components/OnError/OnError'
import './App.css';


const initialState = {
  user : {
    name: 'Dummy name',
    email: 'Dummy email',
    password: 'Dummy password',
    education: 'Dummy',
    no_of_years_worked: 0,
    availability: 'Dummy',
    location: 'Dummy',
    experience: 'Dummy',
    achievements: 'Dummy',
    courses: 'Dummy',
    certification: 'Dummy',
    skills: 'Dummy',
    languages: 'Dummy'
  },
  route: 'SignIn',
  isSignedIn: false
}
class App extends Component {
  constructor () {
    super();
    this.state = initialState;
  }

  onRouteChange = (theRoute) => {
    if(theRoute === 'SignOut'){
      this.setState(initialState)
    } else if(theRoute === 'home') {
      this.setState({isSignedIn: true})
    } else if(theRoute === 'onError') {
      this.setState({isSignedIn: false})
    } else if(theRoute === 'CreateProfile') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: theRoute})
  }

  loadUser = (data) => {
    this.setState({user : {
    name: data.name,
    email: data.email,
    password: data.password,
    education: data.education,
    no_of_years_worked: data.no_of_years_worked,
    availability: data.availability,
    location: data.location,
    experience: data.experience,
    achievements: data.achievements,
    courses: data.courses,
    certification: data.certification,
    skills: data.skills,
    languages: data.languages
    }})
  }

  render() {
    const { route } = this.state;
    return (
      <div>
        {
          (route === 'SignIn' || route === 'SignOut') 
          ? <Login onRouteChange={ this.onRouteChange } user={this.state.user}/>
          : (
             ( route === 'home')
             ? <Home user={this.state.user}/>
             : (
                (route === 'onError')
                ? <OnError />
                : (
                    (route === 'CreateProfile')
                    ? <CreateProfile user={this.state.user} loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
                    : <Register onRouteChange={ this.onRouteChange } loadUser={this.loadUser} />
                  )
              )
            )
        }
      </div>
    );
  }
}

export default App;
