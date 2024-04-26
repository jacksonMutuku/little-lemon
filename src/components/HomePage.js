import './../App.css';
import Reserve from './Reserve';

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
    </div>
  );
}

export default HomePage;