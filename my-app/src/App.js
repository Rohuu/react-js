import './App.css';
// import Header from './components/Header';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

import ReactSiteNavbar from './components/ReactSiteNavbar';
import ReactSiteMainContent from './components/ReactSiteMainContent';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <MainContent/>
      <Footer/> */}

      <ReactSiteNavbar/>
      <ReactSiteMainContent/>
    </div>
  );
}

export default App;
