import './MyStack.css';

export function MyStack() {
    return (
        <div className="my-stack-container about-container">
            <div>
                <div className="iam">My Stack</div>
                <div className="hellothere">These are my favourite technologies</div>
                <div className="tech-list-container">
                    <div className="tech-list">
                        <div className='item-container'>
                            <img src='src/assets/html-icon.png' className="icon" alt='html'></img>
                            <div className="item">HTML5</div>
                        </div>
                        <div className='item-container'>
                            <img src='src/assets/css-icon.png' className="icon" alt='css'></img>
                            <div className="item">CSS3</div>
                        </div>
                        <div className='item-container'>
                            <img src='src/assets/javascript-icon.png' className="icon" alt='javascript'></img>
                            <div className="item">Javascript</div>
                        </div>
                    </div>
                    <div className="tech-list">
                        <div className='item-container'>
                            <img src='src/assets/react-icon.png' className="icon" alt='react'></img>
                            <div className="item">React.js</div>
                        </div>
                        <div className='item-container'>
                            <img src='src/assets/jquery-icon.png' className="icon" alt='jquery'></img>
                            <div className="item">JQuery</div>
                        </div>
                        <div className='item-container'>
                            <img src='src/assets/wordpress-icon.png' className="icon" alt='wordpress'></img>
                            <div className="item">Wordpress</div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src="src/assets/technologies.png" className='developer' alt="developer"></img>
            </div>
        </div>
    )
}