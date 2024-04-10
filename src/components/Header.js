
import './../App.css';
import logo from './../assets/Logo.svg'
import Navigation from './Nav';



const Header = () =>{
    return(
        <>
            <img src={logo} alt="little lemon logo"/>
            <Navigation/>
        </>
    )
}
export default Header;