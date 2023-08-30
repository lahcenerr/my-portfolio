import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w0xqs57', 'template_arwkyjw', form.current, 'Q61uqyROCBfazhUxL')
      .then((result) => {
            console.log(result.text);
            e.target.reset()
       }, (error) => {
            console.log(error.text);
       });
  };

  return (
<section className="contact" id='contact'>
<h1 className="contact-title">Contact Me</h1>
  <div className="contacts">
    <form action="" className="contact-details"  ref={form} onSubmit={sendEmail}>
        <div className="name"><input className="inputName" type="name"  placeholder='Name' name='your_name'/></div>
        <div className="email"><input type="email" className="inputEmail" placeholder='Email' name='your_email'/></div>
        <div className="text"><textarea rows="10" type="name" className="textArea" name='message'/></div>
        <div className="submit-button"><button className="button" type="submit" onClick={() => alert("Email sent")}>Submit</button></div>
    </form>
    <br />
    
  </div>
    

</section>
  )
}

export default Contact
