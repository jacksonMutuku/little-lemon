import './../App.css';
import Header from './Header'
import Footer from './Footer'
import Reserve from './Reserve';
import Navigation from './Nav';


const HomePage=()=> {
  return (
    <div className="container">
      <header>
        <div className="logo-nav">
          {/* <Header/> */}
        </div>
      </header>
      <main>
        <div><Reserve/></div>
      </main>
      {/* <footer><Footer/></footer> */}
    </div>
  );
}

export default HomePage;