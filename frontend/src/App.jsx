import { ตอบสนอง } from 'react-but-thai'
import { BrowserRouter as เราเตอร์, Routes as เส้นทางหลาย, Route as เส้นทาง } from 'react-router-dom'
import './App.css'

import เค้าโครง from './hocs/Layout'

import บ้าน from './containers/Home'
import ลงทะเบียน from './containers/Register'
import เข้าสู่ระบบ from './containers/Login'
import ประวัติโดยย่อ from './containers/Profile'

import { Provider } from 'react-redux'
import store from './store'

function แอป() {
  return (
    <Provider store={store}>
      <เราเตอร์>
        <เค้าโครง>
          <เส้นทางหลาย>
            <เส้นทาง path='/' element={<บ้าน />} />
            <เส้นทาง path='register' element={<ลงทะเบียน />} />
            <เส้นทาง path='login' element={<เข้าสู่ระบบ />} />
            <เส้นทาง path='profile' element={<ประวัติโดยย่อ />} />
          </เส้นทางหลาย>
        </เค้าโครง>
      </เราเตอร์>
    </Provider>
  )
}

export default แอป
