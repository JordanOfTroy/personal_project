import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Clearance from './Components/Clearance/Clearance'
import FAQ from './Components/FAQ/FAQ'
import Animal from './Components/Animal/Animal'
import SubType from './Components/SubType/SubType'
import Type from './Components/Type/Type'
import Account from './Components/Account/Account'


export default (
  <Switch>
    <Route exact path = '/' component = {Dashboard}/>
    <Route path = '/type/:id' component = {Type} />
    <Route path = '/subtype' component = {SubType}/>
    <Route path = '/animal' component = {Animal}/>
    <Route path = '/login' component = {Login}/>
    <Route path = '/clearance' component = {Clearance}/>
    <Route path = '/faq' component = {FAQ}/>
    <Route path = '/account' component = {Account} />
  </Switch>
)