import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar';

export default function Setting() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle"></span>
          <span className="settingsDeleteTitle"></span>
        </div>
        <form action="" className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="settingsPP">
            <img src="" alt="" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}}/>
          </div>
          <label htmlFor="">User Name</label>
          <input type="text" placeholder='username'/>
          <label htmlFor="">Email</label>
          <input type="email" placeholder='username@gmail.com'/>
          <label htmlFor="">Password</label>
          <input type="password"/>
          <button className="settingsSubmit"></button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
