import './MyStack.css';
import htmlImg from '../../assets/html-icon.png';
import cssImg from '../../assets/css-icon.png';
import javascriptImg from '../../assets/javascript-icon.png';
import reactImg from '../../assets/react-icon.png';
import jqueryImg from '../../assets/jquery-icon.png';
import wordpressImg from '../../assets/wordpress-icon.png';
import technologiesImg from '../../assets/technologies.png';


export default function MyStack() {
    return (
        <div className="my-stack-container about-container">
            <div>
                <div className="iam">
                    My Stack
                </div>
                <div className="hellothere">
                    These are my favourite technologies
                </div>
                <div className="tech-list-container">
                    <div className="tech-list">
                        <div className='item-container'>
                            <img src={htmlImg} className="icon" alt='html'></img>
                            <div className="item">
                                HTML5
                            </div>
                        </div>
                        <div className='item-container'>
                            <img src={cssImg} className="icon" alt='css'></img>
                            <div className="item">
                                CSS3
                            </div>
                        </div>
                        <div className='item-container'>
                            <img src={javascriptImg} className="icon" alt='javascript'></img>
                            <div className="item">
                                Javascript
                            </div>
                        </div>
                    </div>
                    <div className="tech-list">
                        <div className='item-container'>
                            <img src={reactImg} className="icon" alt='react'></img>
                            <div className="item">
                                React.js
                            </div>
                        </div>
                        <div className='item-container'>
                            <img src={jqueryImg} className="icon" alt='jquery'></img>
                            <div className="item">
                                JQuery
                            </div>
                        </div>
                        <div className='item-container'>
                            <img src={wordpressImg} className="icon" alt='wordpress'></img>
                            <div className="item">
                                Wordpress</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={technologiesImg} className='developer' alt="developer"></img>
            </div>
        </div>
    )
}