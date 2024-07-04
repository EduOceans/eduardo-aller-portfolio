import './Projects.css';
import hotelImg from '../../assets/hotel.png';
import portfolioImg from '../../assets/portfolio.png';
import quizImg from '../../assets/quiz.png';
import musicImg from '../../assets/music.png';
import weatherImg from '../../assets/weather.png';
import passwordImg from '../../assets/password.png';


function Projects() {
    return (
        <div className='projects-container' id='projects'>
            <div className='cards-title'>Projects</div>
            <div className='my-work'>Take a look at my Work</div>
            <div className='bootcamp-work'>These are examples of the work I did at the Fronted Development Bootcamp with edX</div>
            <section class="container-fluid my-5" id="work">
                <div class="row mx-5 justify-content-around">
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">
                        <div class="card">
                            <img src={hotelImg} class="card-img-top" alt="hotel"></img>
                            <div className='card-title'>Suitestay Hotel</div>
                        </div>
                    </div>
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">  
                        <div class="card">
                            <img src={portfolioImg} class="card-img-top" alt="portfolio"></img>
                            <div className='card-title'>Portfolio Template</div>
                        </div>
                    </div>
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">
                        <div class="card">
                            <img src={quizImg} class="card-img-top" alt="quiz-game"></img>
                            <div className='card-title'>Quiz Game</div>
                        </div>
                    </div>
                </div>
                 <div class="row mx-5 justify-content-around cards-bottom">
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">
                        <div class="card">
                            <img src={musicImg} class="card-img-top" alt="music"></img>
                            <div className='card-title'>Photo Music</div>
                        </div>
                    </div>
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">
                        <div class="card">
                            <img src={weatherImg} class="card-img-top" alt="weather-search"></img>
                            <div className='card-title'>Weather Search</div>
                        </div>
                    </div>
                    <div class="card-container col-lg-4 col-md-5 col-sm-12">
                        <div class="card">
                            <img src={passwordImg} class="card-img-top" alt="password-generator"></img>
                            <div className='card-title'>Password Generator</div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='stack'></div>
        </div>
    )
}

export default Projects;

