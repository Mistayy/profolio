import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './styles/styles.scss';
//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/PageHome'
import About from './pages/PageAbout';
import Project from './pages/PageProject';
import ProjectDetail from './pages/PageProjectDetail';



function App() {
  
  const restBase = 'http://localhost:8888/liwen-profolio/wp-json/wp/v2/'

  return (
    <Router basename="/">
      <div className="site-wrapper">
        <Header />
        <main id="main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/project' element={<Project />} />
            <Route path="/projectDetail/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
