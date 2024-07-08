import "./Testimonials.css";
import quoteImg from '../../assets/quote.png';


export default function Testimonials () {
    return (
        <div className="testimonials-container">
            <div className="iam">Testimonials</div>
            <div className='my-work'>What My Instructors Say</div>
        
            <div id="slider">
                <input type="radio" name="slider" id="slide1" checked></input>
                <input type="radio" name="slider" id="slide2" checked></input>
                <input type="radio" name="slider" id="slide3" checked></input>
                <input type="radio" name="slider" id="slide4" checked></input>
                <div id="slides">
                    <div id="overflow">
                    <img src={quoteImg} className="quote-sign" alt="quote"></img>
                        <div className="inner">
                            <div className="slide slide_1">
                                <div className="slide-content">
                                    <p>I wanted to take a moment to acknowledge your outstanding work so far. your dedication to excellence is evident in your work.
                                    </p>
                                    <p className="quote-name">JC - Central Grader</p>
                                </div>
                            </div>
                            <div className="slide slide_2">
                                <div className="slide-content">
                                    <p className="quote-txt">You have done a fantastic job and should be proud of your work Eduardo! Keep up the awesome job!
                                    </p>
                                    <p className="quote-name">Chris Baird - Central Grader</p>
                                </div>
                            </div>
                            <div className="slide slide_3">
                                <div className="slide-content">
                                    <p>I'm truly impressed, Eduardo, by how you've built upon your skills to create something so unique and visually appealing. Your clean coding practices and the deployment of a comprehensive repository are commendable achievements. Keep up the great work and maintain this exceptional momentum!
                                    </p>
                                    <p className="quote-name">Kayvon Kazemini - Central Grader</p>
                                </div>
                            </div>
                            <div className="slide slide_4">
                                <div className="slide-content">
                                    <p>I have to say how impressed I was to see you build upon the skills you acquired thus far to build something so beautiful and unique!
                                    </p>
                                    <p className="quote-name">JC - Central Grader</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="controls">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>
                <div id="bullets">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                </div>
            </div>
        </div>
    )
}