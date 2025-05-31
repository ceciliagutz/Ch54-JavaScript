import './App.css'
import { Footer } from './pages/footer/footer';
import { NavBar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';

function App() {

  const myJsx = (
  <>
      <NavBar title="Día de Harry Potter"/>
      <Home  name="Cecilia Black" hogwartsHome="Gryffindor" />
      <Home name="CeciSirius Black" hogwartsHome="Slytherin"/>
       <Products/>
       <Footer/>  
  </>
 
  );
  return myJsx;
}



export default App
