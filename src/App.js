import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className = 'main'>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
    </>
  );
}

export default App;
