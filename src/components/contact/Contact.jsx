import './Contact.css';

function Contact() {
    return (
<div className="contact-container" id='contact'>
    <div className="iam">Contact Me</div>
    <div className='my-work'>I want to hear from you</div>
    <div className='bootcamp-work'>Please fill out the form on this section to contact me. Or feel free to call between 9:00 a.m. and 5:00 p.m.</div>
    <div className='form-container'>
        <div className='contact-details'>
            <div className='contact-box'>
                <img src='src/assets/location-icon.png' className='location-icon' alt='location'></img>
                Address: 199 New Church Road, Brighton BN3 4ED
            </div>
            <div className='contact-box'>Email</div>
            <div className='contact-box'>Phone number</div>
        </div>
        <form>      
            <input name="name" type="text" class="feedback-input" placeholder="Name" />   
            <input name="email" type="text" class="feedback-input" placeholder="Email" />
            <textarea name="text" class="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
        </form>
    </div>
</div>
    )
}

export default Contact;