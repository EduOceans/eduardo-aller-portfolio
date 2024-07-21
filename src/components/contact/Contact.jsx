import './Contact.css';
import React from 'react';
import Swal from 'sweetalert2'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e28b6bda-095a-42c0-9b87-4a4723b3efed");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully!",
            icon: "success"
          })
        }
      };

    return (
<div className="contact-container fade-in" id='contact'>
    <div className="iam">Contact Me</div>
    <div className='my-work'>I want to hear from you</div>
    <div className='bootcamp-work'>Please fill out the form on this section to contact me. Or feel free to call between 9:00 a.m. and 5:00 p.m.</div>
    <div className='form-container'>
    
        <div className='contact-details'>
            <div className='contact-box'>
                <p className='cont-title'>Address:</p>
                <span className='cont'>Kings House</span>
                <span className='cont'>8 Queen's Gardens</span>
                <span className='cont'>BN3 2QU</span>
                <span className='cont'>Brighton</span>
            </div>
            <div className='contact-box'>
                <p className='cont-title'>Email:</p>
                <p className='cont'> edu.aller.torralbo@gmail.com</p>
            </div>
            <div className='contact-box'>
                <p className='cont-title'>Phone number:</p>
                <p className='cont'>+447858011764</p>
            </div>
        </div>
        <form onSubmit={onSubmit}>      
            <input name="name" type="text" className="feedback-input" placeholder="Name" required/>   
            <input name="email" type="text" className="feedback-input" placeholder="Email" required/>
            <textarea name="text" className="feedback-input" placeholder="Comment" required></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    </div>
    <div className='map'>
        <iframe 
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1932.7626575331358!2d-0.1715743298607827!3d50.825233394145705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585dece68588d%3A0xc6ac02207ef05c7e!2sKings%20House!5e0!3m2!1sen!2suk!4v1720515870088!5m2!1sen!2suk"
            width="1200"
            height="360" 
            style={{ border: 0, borderRadius: "8px" }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</div>
    )
}

export default Contact;