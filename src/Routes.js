import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Animal from './Components/Animal/Animal'
import SubType from './Components/SubType/SubType'
import AllTheSnakes from './Components/Type/AllTheSnakes'
import AllTheLizards from './Components/Type/AllTheLizards'
import AllTheTurtles from './Components/Type/AllTheTurtles'
import Login from './Components/Login/Login'
import Clearance from './Components/Clearance/Clearance'
import FAQ from './Components/FAQ/FAQ'


export default (
  <Switch>
    <Route exact path = '/' component = {Dashboard}/>
    <Route path = '/allthesnakes' component = {AllTheSnakes}/>
    <Route path ='/allthelizards' component = {AllTheLizards}/>
    <Route path ='/alltheturtles' component = {AllTheTurtles}/>
    <Route path = '/subtype' component = {SubType}/>
    <Route path = '/animal' component = {Animal}/>
    <Route path = '/login' component = {Login}/>
    <Route path = '/clearance' component = {Clearance}/>
    <Route path = '/faq' component = {FAQ}/>
  </Switch>
)