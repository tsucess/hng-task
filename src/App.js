import './App.css';
import DisplayPic from './DisplayPic';
import Link from './Link';
import Footer from './Footer';
import SocialMedia from './SocialMedia';

function App() {

      
  return (
    <div className="App">
      <header className="App-header">
      <DisplayPic />
      </header>
       <Link />
       <SocialMedia />
       <Footer />
    </div>
  );
}

export default App;
