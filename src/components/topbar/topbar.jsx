import "./topbar.css";
import Img from "../../images/Jack.png";
import { Outlet, NavLink, Link } from "react-router-dom";

function Topbar() {
  return (
    <>
      <section className="top">
        <div className="topLeft">
          <Link to="https://www.facebook.com/">
            <i className="topIcon fa-brands fa-square-facebook"></i>
          </Link>
          <Link to="https://twitter.com/">
            <i className="topIcon fa-brands fa-twitter"></i>
          </Link>
          <Link to="https://in.pinterest.com/">
            <i className="topIcon fa-brands fa-pinterest"></i>
          </Link>
          <Link to="https://www.instagram.com/">
            <i className="topIcon fa-brands fa-instagram"></i>
          </Link>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/write">Write</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/logout">Logout</NavLink>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img className="topImg" src={Img} alt="" />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default Topbar;
