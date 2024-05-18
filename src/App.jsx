
import './App.css'
import header from '/header.png'

function App() {

  return (
    <>
        <img src={header} alt="header-image" className='header-image' />
        <div className="body-container">
          <div className="hero-section">
            <div className='flx-top'>
            <div className='left-sec'>
              <h5 className='ls1'>Powered by Razorpay and 
              Axis Bank</h5>
              <p className='ls2'>This joint initiative between Axis Bank and Razorpay aims to make accepting payments a seamless experience for fast-growing businesses.</p>
              <p className='ls3'>Let’s simplify payments together!</p>
            </div>

            <div className='right-sec'>
              <div className="login-field">
                <h3 className='log-h'>Login to Dashboard</h3>
                <div className="form-cont">
                  <label>Email or Mobile Number</label>
                  <input type="text" placeholder="" name="uname" className='field' required />
                  <button className='btn'>Next</button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div>

          </div>
        </div>

    </>
  )
}

export default App
