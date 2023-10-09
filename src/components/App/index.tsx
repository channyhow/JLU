import Header from '../Header';
import './styles.scss';
import Socials from '../Socials';
import About from '../About';
import Education from '../Education';
import Experience from '../Experience';
import Copyright from '../Copyright';
import Contact from '../Contact';
import Background from '../Background';

function App() {
  return (
    <div className="app">
      <Background />
      <div className="app__header">
        <Header />
        <Socials />
      </div>
      <div className="app__body">
        <About />
        <Education />
        <Experience />
        <Contact />
        <Copyright />
      </div>
    </div>
  );
}

export default App;
