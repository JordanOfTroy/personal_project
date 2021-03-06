import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Clearance from './Components/Clearance/Clearance'
import FAQ from './Components/FAQ/FAQ'
import SubType from './Components/SubType/SubType'
import Type from './Components/Type/Type'
import Account from './Components/Account/Account'
import Register from './Components/Register/Register'
import Cart from './Components/Cart/Cart'
import About from './Components/About/About'


export default (
  <Switch>
    <Route exact path = '/' component = {Dashboard}/>
    <Route path = '/type/:typeid' component = {Type} />
    <Route path = '/subtype/:subid' component = {SubType}/>
    <Route path = '/login' component = {Login}/>
    <Route path = '/clearance' component = {Clearance}/>
    <Route path = '/faq' component = {FAQ}/>
    <Route path = '/account' component = {Account} />
    <Route path = '/register' component = {Register}/>
    <Route path = '/cart' component = {Cart} />
    <Route path = '/about' component = {About} />
    {/* <Route path = '/logout' component = {Dashboard} /> */}
  </Switch>
)