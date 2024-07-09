import './Contact.css';

function Contact() {
    return (
<div className="contact-container" id='contact'>
    <div className="iam">Contact Me</div>
    <div className='my-work'>I want to hear from you</div>
    <div className='bootcamp-work'>Please fill out the form on this section to contact me. Or feel free to call between 9:00 a.m. and 5:00 p.m.</div>
    <div className='form-container'>
    <div className='map'>
        <iframe 
            title='map'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1932.7626575331358!2d-0.1715743298607827!3d50.825233394145705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585dece68588d%3A0xc6ac02207ef05c7e!2sKings%20House!5e0!3m2!1sen!2suk!4v1720515870088!5m2!1sen!2suk"
            width="300"
            height="360" 
            style={{ border: 0 }} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
        <div className='contact-details'>
            <div className='contact-box'>
                <p className='cont-title'>Address:</p>
                <span className='cont'>Kings House</span>
                <span className='cont'>8 Queen's Gardens</span>
                <span className='cont'>Brighton</span>
                <span className='cont'>BN3 2QU</span>
            </div>
            <div className='contact-box'>
                <p className='cont-title'>Email:</p>
                <p className='cont'> edu.oceans@gmail.com</p>
            </div>
            <div className='contact-box'>
                <p className='cont-title'>Phone number:</p>
                <p className='cont'>+447858833392</p>
            </div>
        </div>
        <form>      
            <input name="name" type="text" className="feedback-input" placeholder="Name" />   
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    </div>
</div>
    )
}

export default Contact;