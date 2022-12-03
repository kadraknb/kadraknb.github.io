// send email node.js?

{
  /* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js">
</script>
<script type="text/javascript"> */
}
(function () {
  emailjs.init('YOUR_USER_ID') // please encrypted user id for malicious attacks
})()
// set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
const templateParams = {
  to_name: 'xyz',
  from_name: 'abc',
  message_html: 'Please Find out the attached file'
}

emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams).then(
  function (response) {
    console.log('SUCCESS!', response.status, response.text)
  },
  function (error) {
    console.log('FAILED...', error)
  }
)
// </script>
