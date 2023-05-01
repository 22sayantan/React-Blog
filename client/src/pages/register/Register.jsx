import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="loginTitle">Register</span>
        <form action="" className="registerForm">
        <label htmlFor="">User Name</label>
            <input className='registerInput' type="text" placeholder='John Doe'/>
            <label htmlFor="">Email</label>
            <input className='registerInput' type="email" placeholder='example123@email.com'/>
            <label htmlFor="">Password</label>
            <input className='registerInput' type="password" placeholder='e.g:Exp@456'/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}