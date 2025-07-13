import { NavLink, Outlet } from "react-router";

function Menu() {
  return (
    <>
      <ul className="menu-container">
        <NavLink className={"m-link"} to={"details"}>Details</NavLink>
        <NavLink className={"m-link"} to={"user"}>Users</NavLink>
        <NavLink className={"m-link"} to={"data"}>Data</NavLink>
      </ul>
      <p className={"b-home"}>Go back to <NavLink  to={"home"}>Home</NavLink></p>
      <Outlet/>
    </>
  );
}

export default Menu;
