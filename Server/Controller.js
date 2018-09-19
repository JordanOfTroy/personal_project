module.exports = {


  getTheType: (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params
    db.get_the_type({id}).then(types => {
      console.log(types)
      res.status(200).send(types)
    })
    .catch(err => {
      res.status(500).send(err)
    })

  },

  login: (req, res) => {
    const db = req.app.get('db')
    let {username, password} = req.body 
    

  }



}