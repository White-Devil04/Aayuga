import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Webgi3D from './Components/Webgi3D.jsx';
import Services from './Components/Services.jsx';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Webgi3D/>
      <Home/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;