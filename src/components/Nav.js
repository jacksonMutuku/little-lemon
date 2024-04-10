import {Link} from 'react-router-dom';
const Navigation =function(){
    return(
        <nav>
            <ul className="navBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/reservation">Reservations</Link></li>
                {/* <li><Link to="/booking">Booking</Link></li> */}
                <li><Link to="/order-online">Order Online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>

    )
}

export default Navigation;