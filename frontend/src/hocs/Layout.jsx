import ตอบสนอง, { ชิ้นส่วน, ใช้ผลกระทบ } from "react-but-thai"
import แถบนำทาง from "../components/Navbar"
import { connect } from "react-redux"
import { checkAuthenticated } from "../actions/auth"
import { loadUser } from "../actions/profile"

function เค้าโครง({children, checkAuthenticated}) {
  ใช้ผลกระทบ(() => {
    checkAuthenticated();
    loadUser();
  }, []);

  return (
    <>
      <ชิ้นส่วน>
        <แถบนำทาง />
        {children}
      </ชิ้นส่วน>
    </>
  )
}

export default connect(null, { checkAuthenticated })(เค้าโครง)
