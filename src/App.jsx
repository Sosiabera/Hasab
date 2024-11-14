import './App.css';
import Navbar from './Layouts/Navbar';
import Footer from './Layouts/Footer';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Landing />

      <div className="flex-grow ">
       
       
      </div>

      <Footer />
    </div>
  );
}

export default App;
