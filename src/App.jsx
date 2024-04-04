import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


function App() {
  
  const restBase = 'http://localhost:8888/liwen-profolio/wp-json/wp/v2/'

  return (
    <Router basename="/wp-headless-react">
      <header id="masthead" className="site-header">
        <div className="site-branding">
          <p className="site-title">Headless WordPress App</p>
        </div>
        <nav className="site-navigation">
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path='/' element={<Home restBase={restBase} />} />
          <Route path='/about' element={<About restBase={restBase} />} />
          <Route path='/contact' element={<Contact restBase={restBase} />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">Created by liwen.</p>
      </footer>
    </Router>
  )
}

export default App
