const bcrypt = require('bcryptjs')
let session_id_count = 1


module.exports = {


  getTheType: (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params
    db.get_the_type({id}).then(types => {
      // console.log(types)
      res.status(200).send(types)
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
          req.session.user_id = user[0].id 
          req.session.user.username = user[0].username 
          res.status(200).send(`all's good in da hood!`)
        })
      }
    })
  },

  login: (req, res) => {
    const db = req.app.get('db')
    let {username, password} = req.body
    db.get_by_username({username}).then(user => {
      if (user.length > 0) {
        let validPassword = bcrypt.compareSync(password, user[0].password)

        console.log('vpw:',validPassword, 'PW:', password, 'user-PW:', user[0].password)
        if (validPassword) {
          req.session.user.session_id = session_id_count
          session_id_count++
          req.session.user_id = user[0].id 
          req.session.user.username = user[0].username 
          res.status(200).send()
        } else {
          res.status(200).send('Invalid Password')
        }
      } else {
        res.status(200).send('Username does not exist')
      }
    })
  }



}