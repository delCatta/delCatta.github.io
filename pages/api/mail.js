const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default (req, res) => {
  const body = JSON.parse(req.body)
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    ${body.message}\r\n
    `
  const data = {
    to: "dev.cattarinich@gmail.com",
    from: 'diego@catta.dev',
    subject: '[Portfolio] Contact Form.',
    text: message,
    html: message.replace(/\r\n/g, '<br/>')
  }
  console.log(data);
  var sendgridResp = mail.send(data);
  console.log(sendgridResp);
  res.status(200).json({ status: 'Ok' })
}
