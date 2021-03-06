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
SERVER_PORT,
ENVIRONMENT
} = process.env

massive(CONNECTION_STRING).then(db => app.set('db', db))

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(express.json())

app.use(checkUserSession)

app.use((req, res, next) => {
  if (ENVIRONMENT === 'dev') {
    req.app.get('db').set_data()
    .then(userData => {
      req.session.user = userData[0]
      next()
    })
  } else {
    next()
  }
})

app.use( express.static( `${__dirname}/../build` ) )

/***************************************************************** */

app.get(`/api/type/:typeid`, ctrl.getTheType )
app.get('/api/user', ctrl.getByUsername)
app.get('/logout', ctrl.logout)
app.get('/api/subtype/:subid', ctrl.getBySubtype)
app.get('/api/cartcontent', ctrl.getCartContent)

app.post('/api/login', ctrl.login)
app.post('/api/register', ctrl.register)
app.post('/api/payment', ctrl.handlePayment)
app.post('/api/addtocart', ctrl.addToCart)
app.post('/api/sendemail', ctrl.sendEmail)

app.put('/edituserinfo', ctrl.updateUserInfo)

app.delete(`/api/order66/:id`, ctrl.order66)
app.delete('/api/emptycart', ctrl.emptyCart)

/***************************************************************** */


app.listen(SERVER_PORT, () => {
  console.log(`You're a ${SERVER_PORT}, Harry.`)
})