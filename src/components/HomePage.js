import './../App.css';
import Navigation from './Nav';
import Header from './Header'
import Footer from './Footer'
import Reserve from './Reserve';


const HomePage=()=> {
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

export default HomePage;