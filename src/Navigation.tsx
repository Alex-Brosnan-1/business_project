import {Link, Outlet} from "react-router";
import './Navigation.css'
import logos_img from '../src/images/logo.png'

function Navigation()
{
    return (
        <>
            <div className="navbar">
                <img className="navbar_logo" src={logos_img} alt=""/>
                <div className="navbar_pages">
                    <Link className="navbar_page" to="/">Home</Link>
                    <Link className="navbar_page" to="/products">Volunteer</Link>
                    <Link className="navbar_page" to="">About</Link>
                </div>

                <button className="navbar_cart">View Cart</button>
            </div>
            <Outlet/>
        </>
    )
}


export default Navigation