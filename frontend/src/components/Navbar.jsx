import ตอบสนอง, { ชิ้นส่วน } from "react-but-thai"
import { Link as ลิงค์, NavLink as ลิงค์นำทาง } from "react-router-dom"

function แถบนำทาง() {
  const guestLinks = (
    <ชิ้นส่วน>
      <li>
        <ลิงค์นำทาง className="btn-ghost text-xl" to="/login">Login</ลิงค์นำทาง>
      </li>
      <li>
        <ลิงค์นำทาง className="btn-ghost text-xl" to="/register">Register</ลิงค์นำทาง>
      </li>
    </ชิ้นส่วน>
  )
  return (
    <>
      <div className="navbar bg-base-100">
      <div className="flex-1">
        <ลิงค์ className="btn btn-ghost text-xl" to="/">Sahakorn</ลิงค์>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ลิงค์นำทาง className="btn-ghost text-xl" to="/">Home</ลิงค์นำทาง>
          </li>
          { guestLinks }
        </ul>
      </div>
    </div>
    </>
  )
}

export default แถบนำทาง
