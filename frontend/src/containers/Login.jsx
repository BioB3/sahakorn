import ตอบสนอง, { ใช้สถานะ, ใช้ผลกระทบ } from "react-but-thai"
import { useNavigate, Link as ลิงค์ } from "react-router-dom"
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'

function เข้าสู่ระบบ({ login, isAuthenticated }) {
  const [formData, setFormData] = ใช้สถานะ({
    username: '',
    password: '',
  });

  const { username, password } = formData

  const navigate = useNavigate();

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault();
    login(username, password);
  };

  ใช้ผลกระทบ(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <div className="container mt-5">
        <h1>Login with your Account</h1>
        <form onSubmit={e => onSubmit(e)}>
          <CSRFToken />
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Username: </span>
            </div>
            <input
            type="text"
            placeholder="Username*"
            className="input input-bordered w-full max-w-xs" 
            name='username'
            onChange={e => onChange(e)}
            value={username}
            required
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password: </span>
            </div>
            <input
            type="password"
            placeholder="Password*"
            className="input input-bordered w-full max-w-xs" 
            name='password'
            onChange={e => onChange(e)}
            value={password}
            minLength='6'
            required
            />
          </label>
          <button className="btn btn-primary" type="submit">Login</button>
        </form>
        <p className="mt-3">
          Don't have an Account? <ลิงค์ to='/register'>Sign Up</ลิงค์>
        </p>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(เข้าสู่ระบบ);
