import { Link } from 'react-router-dom'
import './register.scss'

const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nemo fuga omnis necessitatibus provident a, expedita soluta quasi aliquid labore consequuntur hic alias architecto ducimus possimus id nam aperiam nobis.</p>
        <span>Already have an account?</span>
        <Link to='/login'>
        <button>Login</button>
        </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form >
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='username' />
            <input type="password" placeholder='Password' />
            <input type="text" placeholder='Name' />
            <div><button>Register</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
