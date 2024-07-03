import "./Testimonials.css";

export function Testimonials () {
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
                        <div className="inner">
                            <div className="slide slide_1">
                                <div className="slide-content">
                                    <h2>Slide 1</h2>
                                    <p>Content for slide 1</p>
                                </div>
                            </div>
                            <div className="slide slide_2">
                                <div className="slide-content">
                                    <h2>Slide 2</h2>
                                    <p>Content for slide 2</p>
                                </div>
                            </div>
                            <div className="slide slide_3">
                                <div className="slide-content">
                                    <h2>Slide 3</h2>
                                    <p>Content for slide 3</p>
                                </div>
                            </div>
                            <div className="slide slide_4">
                                <div className="slide-content">
                                    <h2>Slide 4</h2>
                                    <p>Content for slide 4</p>
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



{/*         
            <section className="container">
                <div className="testimonial">
                    <div className="testi-content">
                        <div className="slide">
                            <img src="src/assets/quote.png" className="image" alt="quote"></img>
                            <div id="slide-1">
                            <p className="quote">
                                I have to say how impressed I was to see you build upon the skills you acquired thus far to build something so beautiful and unique!
                            </p>
                            
                            <div className="quote-details">
                                <span className="quote-name">JC - </span>
                                <span className="quote">Central Grader</span>
                            </div>
                            </div>
                        </div>

                        <div className="slide">
                            <img src="src/assets/quote.png" className="image" alt="quote"></img>
                            <div id="slide-2">
                                <p className="quote">
                                I wanted to take a moment to acknowledge your outstanding work so far. your dedication to excellence is evident in your work.
                                </p>
                                
                                <div className="quote-details">
                                    <span className="quote-name">JC - </span>
                                    <span className="quote">Central Grader</span>
                                </div>
                            </div>
                        </div>

                        <div className="slide">
                            <img src="src/assets/quote.png" className="image" alt="quote"></img>
                            <div id="slide-3">
                            <p className="quote">
                            You have done a fantastic job and should be proud of your work Eduardo! Keep up the awesome job!
                            </p>
                                
                                <div className="quote-details">
                                    <span className="quote-name">-Chris Baird - </span>
                                    <span className="quote">Central Grader</span>
                                </div>
                            </div>
                        </div>

                        <div className="slide">
                            <img src="src/assets/quote.png" className="image" alt="quote"></img>
                            <div id="slide-4">
                            <p className="quote">
                                I'm truly impressed, Eduardo, by how you've built upon your skills to create something so unique and visually appealing. Your clean coding practices and the deployment of a comprehensive repository are commendable achievements. Keep up the great work and maintain this exceptional momentum!
                            </p>
                            
                            <div className="quote-details">
                                <span className="quote-name">Robin Clarke - </span>
                                <span className="quote">Central Grader</span>
                            </div>
                            </div>
                        </div>

                        <div className="slide">
                            <img src="src/assets/quote.png" className="image" alt="quote"></img>
                            <div id="slide-5">
                            <p className="quote">
                                The UI is polished and the page is very responsive. I like your ideas for future development and I think this website serves as a great portfolio piece Nice job!
                            </p>
                            
                            <div className="quote-details">
                                <span className="quote-name">Kayvon Kazemini - </span>
                                <span className="quote">Central Grader</span>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-nav">
                    </div>
                </div>
            </section> */}
