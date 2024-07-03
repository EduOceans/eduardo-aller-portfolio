import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainContent from './components/main-content/MainContent';
import Welcome from './components/welcome/Welcome';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Circle from './components/circle/Circle';

function App() {

  return (
    <>
      <div className="App">
        <div className='background-img'>
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App;
