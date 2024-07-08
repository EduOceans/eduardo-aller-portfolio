import { useRef, useEffect, useState } from 'react';
import './About.css';
import developerImg from '../../assets/developer.png';
import { useSpring, animated } from 'react-spring';

function Number ({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10},
    });
    return <animated.div>{number.to((n) => n.toFixed(1))}</animated.div>
}

export default function About() {

    const myRef = useRef ();
    const [myElementIsVisible, setMyElementIsVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current);
    }, [])

    return (
        <div className="about-container">
            <div className="developer-container">
                <img src={developerImg} className='developer' alt="developer"></img>
                <div className='counter-container'>
                    <h1 ref={myRef} className='counter'>
                        <Number n={99.4}/>%
                        <span className='bootcamp-grade'>Bootcamp
                            <span>Grade</span>
                         </span>
                    </h1>

                </div>
            </div>
            <div className='welcome'>
                <div className='iam'>
                    I'm a Web Developer
                </div>
                <div className='hellothere'>
                    Hello there!
                </div>
                <div className='description'>
                    I’m Eduardo Aller, a passionate web developer transitioning from a career as a chef to the dynamic world of tech. Recently, I completed an intensive Front-End Development Bootcamp with edX, achieving a total score of 99.4%. Through this program, I mastered HTML, CSS, JavaScript, and React, gaining practical experience through hands-on projects and real-world scenarios. My background in culinary arts has honed my attention to detail and creativity, which I now bring to crafting dynamic, responsive websites. Explore my projects and join me on this exciting journey in web development.
                </div>
            </div>
        </div>
    )
}