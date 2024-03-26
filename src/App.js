import './App.css';
import Navigation from './components/Nav';
import Header from './components/Header'
import Footer from './components/Footer'
import Reserve from './components/Main';
function App() {
  return (
    <div className="container">
      <header>
        <div className="logo-nav">
          <Header/>
          <Navigation/>
        </div>
      </header>
      <main>
        <div className="main-section"><Reserve/></div>
      </main>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
