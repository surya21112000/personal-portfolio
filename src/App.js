import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BounceLoader from "react-spinners/BounceLoader";
import {useState,useEffect,useLayoutEffect} from 'react'
function App() {

  const [loading, setLoading] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const override: CSSProperties = {
    display: "block",
    left:width<700?"40%":"48%",
    borderColor: "red",
    marginTop:width<700?"100%":"22%",
    marginRight:"-36%",
    
  };
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // Simulate a delay of 2 seconds before setting loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="App" style={{background:"#fcde7c"}} >
      {loading && <BounceLoader
        color={'#9e9e1a'}
        loading={true}
        cssOverride={override}
        size={80}
        
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
      {!loading &&
      <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer /></div>
      }
    </div>
  );
}

export default App;
