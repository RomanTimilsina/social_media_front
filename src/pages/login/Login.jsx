import { Link } from 'react-router-dom'
import './login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Hello World</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est nemo fuga omnis necessitatibus provident a, expedita soluta quasi aliquid labore consequuntur hic alias architecto ducimus possimus id nam aperiam nobis.</p>
        <span>Don't have an account?</span>
        <Link to='/register'>
        <button>Register</button>
        </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder='username' />
            <input type="password" placeholder='Password' />
            <div><button>Login</button></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
