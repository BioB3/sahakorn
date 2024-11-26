import ตอบสนอง, { ใช้สถานะ } from "react-but-thai"
import { useNavigate, Link as ลิงค์ } from "react-router-dom"
import { connect } from 'react-redux'
import { register } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'

function ลงทะเบียน({ register, isAuthenticated }) {
  const [formData, setFormData] = ใช้สถานะ({
    username: '',
    password: '',
    re_password: ''
  });

  const [accountCreated, setAccountCreated] = ใช้สถานะ(false);

  const { username, password, re_password } = formData

  const navigate = useNavigate();

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault();
    if (password === re_password) {
      register(username, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    navigate('/profile');
  } else if (accountCreated) {
    navigate('/login');
  }

  return (
    <>
      <div className="container mt-5">
        <h1>Register for an Account</h1>
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

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Confirm Password: </span>
            </div>
            <input
            type="password"
            placeholder="Confirm Password*"
            className="input input-bordered w-full max-w-xs" 
            name='re_password'
            onChange={e => onChange(e)}
            value={re_password}
            minLength='6'
            required
            />
          </label>
          <button className="btn btn-primary" type="submit">Register</button>
        </form>
        <p className="mt-3">
          Already have an Account? <ลิงค์ to='/login'>Sign In</ลิงค์>
        </p>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(ลงทะเบียน);
