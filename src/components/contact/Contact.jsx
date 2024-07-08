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
                <p className='cont-title'>Address:</p>
                <p className='cont'>123 Brighton BN2</p>
            </div>
            <div className='contact-box'>
                <p className='cont-title'>Email:</p>
                <p className='cont'> xxx.xxxxx.xxxxxxxx@gmail.com</p>
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