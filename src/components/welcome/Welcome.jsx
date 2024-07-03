import { useEffect } from 'react';
import './Welcome.css';

function Welcome() {

    useEffect(()=>{

    },[]);
    
    return (
        <div className="welcome-container">
            <div className='top-container'>
                <img src="src/assets/triangle1.png" className="top-triangle" alt="triangle"></img>
            </div>
            <div className='bottom-container'>
                <img src="src/assets/triangle2.png" className="bottom-triangle" alt="triangle"></img>
            </div>
        </div>
    )
}

export default Welcome;