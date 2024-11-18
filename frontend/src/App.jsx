import { ใช้สถานะ } from 'react-but-thai'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function แอป() {
  const [เคาน์เตอร์, เซ็ตเคาน์เตอร์] = ใช้สถานะ(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">สหกรณ์</h1>
      <div className="card">
        <button className='btn btn-accent rounded-full' onClick={() => เซ็ตเคาน์เตอร์((เคาน์เตอร์) => เคาน์เตอร์ + 1)}>
          ปุ่มหมายเลข {เคาน์เตอร์}
        </button>
        <p>
          ทำงานบนเครื่องของพวกเรา
        </p>
      </div>
      <p className="read-the-docs">
        พัฒนาด้วย ตอบสนองแต่ไทย
      </p>
    </>
  )
}

export default แอป
