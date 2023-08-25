import './about.scss'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <section className='about'>
      <h1>This is about page</h1>
      <Link to='/'><button>Home</button></Link>
    </section>
  )
}
