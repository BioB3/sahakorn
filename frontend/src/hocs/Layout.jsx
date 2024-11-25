import ตอบสนอง, { ชิ้นส่วน } from "react-but-thai"
import แถบนำทาง from "../components/Navbar"

function เค้าโครง({children}) {
  return (
    <>
      <ชิ้นส่วน>
        <แถบนำทาง />
        {children}
      </ชิ้นส่วน>
    </>
  )
}

export default เค้าโครง
