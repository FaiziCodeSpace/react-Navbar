import { NavLink, Outlet } from "react-router";

function Menu() {
  return (
    <>
      <ul className="menu-container">
        <NavLink className={"m-link"} to={"details"}>Details</NavLink>
        <NavLink className={"m-link"} to={"user"}>Users</NavLink>
        <NavLink className={"m-link"} to={"data"}>Data</NavLink>
      </ul>
      <Outlet/>
    </>
  );
}

export default Menu;
