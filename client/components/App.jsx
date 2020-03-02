import React from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

//Component Imports
import Home from './Home'
import LocationMeetups from './LocationMeetups'
import AddPostForm from './AddPostForm'
import Locations from './Locations'
import Nav from './Nav'
import Register from './Register'
import Login from './Login'


class App extends React.Component{
 

  render() {
  return (
    <Router>
      <div>
        <Route path="/" component={Nav} />
        <h3 className='logo'>BUDS</h3>
        <Switch> 
          <Route exact path="/" component={Home} />
          <Route path='/addpostform' component={AddPostForm} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route exact path='/:activity' component={Locations} />
          <Route exact path='/:activity/:location' component={LocationMeetups}/>
        </Switch> 
      </div>
    </Router>
  )}
}

export default App
