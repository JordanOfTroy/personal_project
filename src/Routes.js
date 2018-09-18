import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Animal from './Components/Animal/Animal'
import SubType from './Components/SubType/SubType'
import Type from './Components/Type/Type'


export default (
  <Switch>
    <Route exact path = '/' component = {Dashboard}/>
    <Route path = '/type' component = {Type}/>
    <Route path = '/subtype' component = {SubType}/>
    <Route path = '/animal' component = {Animal}/>
    {/* <Route path = '' component = {}/> */}
  </Switch>
)