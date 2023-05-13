import './App.css'
import { Boton } from './components/Boton';
import { Ref } from './components/Cachorro';
import { Navbar }   from './components/navbar';
import { User } from './components/user';

function App() {
 
  const scrollToTop = () => {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"  
});

}
  return (
    
      <div>
      <Navbar title="Cachorra" />
      <Ref text="Cachorro"/>
      
      <Boton name="Go up" scrollToTop= {scrollToTop} />
      <User data="Nombre"/>
      <User data="Edad"/>  
      <User data="mail"/>
      </div>
     
    
  )
}

export default App
