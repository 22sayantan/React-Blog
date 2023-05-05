import './topbar.css';
import Img from '../../images/Jack.png'
import {Outlet,Link} from "react-router-dom";

function topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <link to="/">HOME</link>
                </li>
                <li className="topListItem">
                    <Link to="/about">ABOUT</Link>
                </li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>                
            </ul>
        </div>
        <div className="topRight">
            <img className='topImg' src={Img} alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default topbar;
