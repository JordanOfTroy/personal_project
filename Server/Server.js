require('dotenv').config()
const express = require('express'),
      session = require('express-session'),
      axios = require('axios'),
      massive = require('massive'),
      ctrl = require('./Controller'),
      checkUserSession = require('./Middleware/checkUserSession')

const app = express()

const {
SESSION_SECRET,
CONNECTION_STRING,
SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())

app.use(checkUserSession)

/***************************************************************** */

app.get(`/api/type/:id`, ctrl.getTheType )

app.post('/api/login', ctrl.login)
app.post('/api/register', ctrl.register)

/***************************************************************** */


app.listen(SERVER_PORT, () => {
  console.log(`You're a ${SERVER_PORT}, Harry.`)
})