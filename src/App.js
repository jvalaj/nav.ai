import './App.css';
import LandingPage from './pages/landingPage';
import Navbar from './components/navbar';
import Footer from './components/footer';
function App() {
  return (
    <div className="App bg-gradient-to-tr from-gray-700 to-neutral-900 font-raleway">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
