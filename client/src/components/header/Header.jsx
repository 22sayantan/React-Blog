import './header.css'
import header_background from '../../images/hero_background.jpg';


function Header() {
  return (
    <div className='header'>
       <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
       </div>
       <img className='headerImg' src={header_background} alt="" />
    </div>
  )
}


export default Header;