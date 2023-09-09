import './App.css';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';
// import ReactSiteNavbar from './components/ReactSiteNavbar';
// import ReactSiteMainContent from './components/ReactSiteMainContent';

import Navbar from './airbnb-project/Navbar';
import Hero from './airbnb-project/Hero';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <MainContent/>
      <Footer/> */}

      {/* <ReactSiteNavbar/>
      <ReactSiteMainContent/> */}

      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
