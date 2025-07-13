import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Menu from "./pages/menu";
import Navbar from "./navbar";

export default function Router() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path={"/home"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/*"} element={<Navigate to={"/home"} />} />
        </Route>

        <Route path="/menu" element={<Menu />}>
          <Route path={"details"} element={<h1>Details</h1>} />
          <Route path={"user"} element={<h1>User</h1>} />
          <Route path={"data"} element={<h1>Data</h1>} />
        </Route>
      </Routes>
    </>
  );
}
// Just a test to trigger green square
