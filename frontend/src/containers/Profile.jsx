import ตอบสนอง, { ใช้สถานะ, ใช้ผลกระทบ } from "react-but-thai"
import { connect } from "react-redux"
import { updateProfile } from "../actions/profile";
import CSRFToken from "../components/CSRFToken";

function ประวัติโดยย่อ({ updateProfile, name_global}) {
  const [profileUpdated, setProfileUpdated] = ใช้สถานะ(false);
  const [formData, setFormData] = ใช้สถานะ({
    name: ''
  });

  const { name } = formData

  ใช้ผลกระทบ(() => {
    setFormData({
      name: name_global
    });
  }, [name_global]);

  function onChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function onSubmit(e) {
    e.preventDefault();
    updateProfile(name);
    setProfileUpdated(!profileUpdated);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Your Profile</h1>
        <form onSubmit={e => onSubmit(e)}>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Displayed name: </span>
            </div>
            <input
            type="text"
            placeholder={`${name_global}`}
            className="input input-bordered w-full max-w-xs" 
            name='name'
            onChange={e => onChange(e)}
            value={name}
            required
            />
          </label>
          <button className="btn btn-primary" type="submit">Update</button>
        </form>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  name_global: state.profile.name
})

export default connect(mapStateToProps, { updateProfile })(ประวัติโดยย่อ)
