require('dotenv').config()
const bcrypt = require('bcryptjs'),
      stripe = require('stripe')(process.env.STRIPE_SECRET)
let session_id_count = 1


module.exports = {


  getTheType: (req, res) => {
    const db = req.app.get('db')
    let {typeid} = req.params
    db.get_the_type({typeid}).then(types => {
      // console.log(types)
      res.status(200).send(types)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  },

  getBySubtype: (req, res) => {
    // console.log('shots fired')
    const db = req.app.get('db')
    let {subid} = req.params
    db.get_by_subtype({subid}).then(subTypes => {
      // console.log(subType)
      res.status(200).send(subTypes)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  },

  register: (req, res) => {
    let {username, password, firstname, lastname, email, image} = req.body
    const db = req.app.get('db')
    console.log(username, password, firstname, lastname, email, image)
    db.get_by_username({username}).then(user => {
      if (user.length > 0) {
        res.status(200).send('Username taken. Please try again.')
      } else {
        const salt = bcrypt.genSaltSync(10),
              hash = bcrypt.hashSync(password, salt)
              console.log(hash)
        db.add_user({username, hash, firstname, lastname, email, image}).then((user) => {
          req.session.user.session_id = session_id_count
          session_id_count++
          req.session.user = user[0]
          console.log(req.session.user)
          res.status(200).send(user[0])
        })
      }
    })
  },

  login: (req, res) => {
    const db = req.app.get('db')
    let {username, password} = req.body
    db.get_by_username({username}).then(user => {
      if (user.length) {
        let validPassword = bcrypt.compareSync(password, user[0].password)
        // console.log('vpw:',validPassword, 'PW:', password, 'user-PW:', user[0].password)
        if (validPassword) {
          req.session.user.session_id = session_id_count
          session_id_count++
          req.session.user = user[0]
          console.log(req.session.user)
          res.status(200).send(user[0])
        } else {
          res.status(200).send('Invalid Password')
        }
      } else {
        res.status(200).send('Username does not exist')
      }
    })
  },


  updateUserInfo: (req, res) => {
    const db = req.app.get('db')
    let {username, firstName, lastName, email, id} = req.body
    db.update_user_info({username, firstName, lastName, email, id}).then(user => {
      req.session.user = user[0]
      console.log(req.session)
    }).then((user => {
      res.status(200).send(user[0])
    }))
    .catch(err => {
      res.status(500).send(err)
    })
  },


  getByUsername: (req, res) => {
    res.status(200).send(req.session.user)
  },


  logout: (req, res) => {
    req.session.destroy()
  },


  handlePayment: (req, res) => {
    const { amount, token:{id}} = req.body
    stripe.charges.create(
        {
            amount: amount,
            currency: "usd",
            source: id,
            description: "Test charge from Travis"
        },
        (err, charge) => {
            if(err) {
                console.log(err)
                return res.status(500).send(err)
            } else {
                console.log(charge)
                return res.status(200).send(charge)
            }
        }
    )
},

  addToCart: (req, res) => {
    // console.log(req.body.id)
    // console.log(req.session.user.id)
    let pID = req.body.id,
        uID = req.session.user.id,
        db = req.app.get('db')
    db.add_to_cart({pID, uID})
    // console.log('i wurked')
  },


  getCartContent: (req, res) => {
    let id = req.session.user.id,
        db = req.app.get('db')
    db.get_cart_content({id}).then(items => {
      // console.log(items)
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  },


  order66: (req, res) => {
    // console.log('fire ONE')
    let pID = req.params.id,
        uID = req.session.user.id,
        db = req.app.get('db')
    db.order66({pID, uID}).then(items => {
      res.status(200).send(items)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  }


}