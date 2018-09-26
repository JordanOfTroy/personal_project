let nodemailer = require('nodemailer')
let smtpTransport = require('nodemailer-smtp-transport')
require('dotenv').config()


let {RGE,EPW} = process.env
console.log(RGE, EPW)
let transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: RGE,
    pass: EPW
  },
  tls: {
    rejectUnauthorized: false
  }
  
}))

let mailOptions = {
  from: 'customer_support@serpentsedge.com',
  to: 'jordantroysmithson@gmail.com',
  subject: 'Order Confirmation',
  text: 'Thank you for your purchase form SerpentsEdge.com.'
}

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error)
  } else {
    console.log('email has been sent', info)
  }
})



// service: 'gmail',
//   secure: false,
//   port: 25,
//   auth: {
//     user: 'jordantroysmithson@gmail.com',
//     pass: EPW
//   },
//   tls: {
//     rejectUnauthorized: false
//   }