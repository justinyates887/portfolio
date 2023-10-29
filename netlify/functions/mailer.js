import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

var transport = {
    host: 'smtp.zoho.com',
    port: 465,
    secure: true, //ssl
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}
var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
  var name = req.body.fullName
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `
  var mail = {
    from: `"Justin Yates"<${process.env.USER}>`,
    to: process.env.REC_EMAIL,
    subject: 'New Message from Portfolio Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(err)
      res.json({
        status: 401
      })
    } else {
      res.json({
       status: 200
      })
    }
  })
})

api.use(router);

export const handler = serverless(api);
