import './App.css'
import { Footer } from './pages/footer/footer';
import { NavBar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';

function App() {

  const myJsx = (
  <>
      <NavBar/>
      <Home />
       <Footer/>  
  </>
 
  );
  return myJsx;
}



export default App
