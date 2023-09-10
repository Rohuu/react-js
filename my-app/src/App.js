import './App.css';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import ReactSiteNavbar from './components/ReactSiteNavbar';
// import ReactSiteMainContent from './components/ReactSiteMainContent';

import Navbar from './airbnb-project/Navbar';
import Hero from './airbnb-project/Hero';
import Card from './airbnb-project/Card';
import img1 from "./airbnb-project/img/katie-zaferes.png";
import img2 from "./airbnb-project/img/katie-zaferes.png";  

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <MainContent/>
      <Footer/> */}

      {/* <ReactSiteNavbar/>
      <ReactSiteMainContent/> */}

      <Navbar/>
      {/* <Hero/> */}
      <Card
      img={img1}
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life Lessons with Katie Zaferes"
      price={136}
      />
      
      <Card
      img={img2}
      rating="4.7"
      reviewCount={9}
      country="INDIA"
      title="Not so famous athlete"
      price={147}
      />
    </div>
  );
}

export default App;
