import React, { useState } from 'react'
import './Common.css'
import Swiperlist from './Swiperlist';

const Bookatable = () => {
  let formCss = {
    backgroundColor: "black",
    border: 'none',
    color: 'white',
    borderRadius: '25px'
  }

  const [hover, setHover] = useState(false);

  return (
    <>
      <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist/>
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div className='row pb-3 mb-1 brd-b-grey'>
              <div className="col-7 brd-r-grey">
                <h1 className='title-style theme-color'>RESERVATION</h1>
              </div>
              <div className="col-5">
                <p className='fs-5 ps-4 color-grey'>Id et risus quam aliquam mi. Vestibulum, felis vestibulum risus diam ut ac eget varius etiam.</p>
              </div>
            </div>
            <div className='row brd-b-grey'></div>
            <div className='mt-5 mb-3 pb-4 fs-1 fw-bolder'>Book a Table</div>
            <form>
              <div className="row">
                <div className="col-6 mb-4">
                  <label forHtml="first" className="form-label">FIRST NAME</label>
                  <input type="text" id="first" style={formCss} className="form-control p-3 placeholder" placeholder='FIRST NAME' />
                </div>
                <div className="col-6 mb-4">
                  <label forHtml="last" className="form-label">Last NAME</label>
                  <input type="text" id="last" style={formCss} className="form-control p-3 placeholder" placeholder='Last NAME' />
                </div>
                <div className="col-12 mb-4">
                  <label forHtml="phone" className="form-label">PHONE</label>
                  <input type="number" id="phone" style={formCss} className="form-control number p-3 placeholder" placeholder='PHONE' />
                </div>
                <div className="col-12 mb-4">
                  <label forHtml="email" className="form-label">EMAIL</label>
                  <input type="email" id="email" style={formCss} className="form-control number p-3 placeholder" placeholder='EMAIL' />
                </div>
                <div className="col-4 mb-5">
                  <label forHtml="guest" className="form-label">NUMBER OF GUESTS</label>
                  <input type="number" id="guest" style={formCss} className="form-control number p-3 placeholder" placeholder='NUMBER OF GUESTS' />
                </div>
                <div className="col-4 mb-5">
                  <label forHtml="date" className="form-label">DATE</label>
                  <input type="date" id="date" style={formCss} className="form-control number p-3 placeholder" placeholder='DATE' />
                </div>
                <div className="col-4 mb-5">
                  <label forHtml="time" className="form-label">TIME</label>
                  <input type="time" id="time" style={formCss} className="form-control number p-3 placeholder" placeholder='TIME' />
                </div>
                <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`btn btn-lg py-3 px-4" ${hover ? "btn-light" : 'btn-warning'}`} style={{ borderRadius: '50px' }}>Reserve</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookatable
