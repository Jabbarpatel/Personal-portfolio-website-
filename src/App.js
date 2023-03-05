import Navbaar from './Componenets/Navbaar'
import './App.css'
import Intro from './Componenets/Intro/Intro';
import './Componenets/Intro/Intro.css'
import Services from './Componenets/Services/Services';
import Experience from './Componenets/Experience/Experience';
import Works from './Componenets/Works/Works';
import Portfolio from './Componenets/Portfolio/Portfolio';
import Testimoniel from './Componenets/Testimoniels/Testimoniel';
import Footer from './Componenets/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbaar/>
    <Intro/>
    <Services/>
    <Experience/>   
    <Works/>
    <Portfolio/>
    <Testimoniel/>
    <Footer/>
    </div>
  );
}
export default App;
