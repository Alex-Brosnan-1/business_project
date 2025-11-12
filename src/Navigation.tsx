import {Link, Outlet} from "react-router";
import './Navigation.css'

function Navigation()
{
    return (
        <>
            <div className="navbar">
                <img className="navbar_logo" src="../public/logo.png"/>
                <div className="navbar_pages">
                    <Link className="navbar_page" to="/">Home</Link>
                    <Link className="navbar_page" to="/products">Volunteer</Link>
                    <Link className="navbar_page" to="/about">About</Link>
                </div>

                <button className="navbar_cart">View Cart</button>
            </div>
            <Outlet/>
        </>
    )
}


export default Navigation