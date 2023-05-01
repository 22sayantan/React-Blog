import './login.css'

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <label htmlFor="">Email</label>
            <input className='loginInput' type="email" placeholder='example123@email.com'/>
            <label htmlFor="">Password</label>
            <input className='loginInput' type="password" placeholder='e.g:Exp@456'/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}
