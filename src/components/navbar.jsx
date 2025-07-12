import { NavLink } from "react-router";
function Navbar(){
    return(<>
    <div className="navBar">
        <NavLink className="link" to={"/home"}>Home</NavLink>
        <NavLink className="link" to={"/about"}>About Us</NavLink>
        <NavLink className="link" to={"/contact"}>Contact Us</NavLink>
        <NavLink className="link" to={"/menu"}>Menu</NavLink>
    </div>
    </>)
}

export default Navbar;