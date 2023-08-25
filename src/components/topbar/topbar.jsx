import "./topbar.css";
import Img from "../../images/Jack.png";
import { Outlet,NavLink } from "react-router-dom";

function Topbar() {
  return (
    <>
      <section className="top">
        <div className="topLeft">
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-twitter"></i>
          <i className="topIcon fa-brands fa-pinterest"></i>
          <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
                <NavLink to='/'>Home</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/write">WRITE</NavLink>
            </li>
            <li className="topListItem">
              <NavLink to="/logout">LOGOUT</NavLink>
            </li>
          </ul>
        </div>
        <div className="topRight">
          <img className="topImg" src={Img} alt="" />
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <div><Outlet/></div>
      </section>
    </>
  );
}

export default Topbar;
