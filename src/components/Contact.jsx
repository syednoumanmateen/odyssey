import React from 'react'
import map from '../images/map.png'
import Swiperlist from './Swiperlist'

const Contact = () => {
  return (
    <>
      <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist/>
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div className='row pb-3 mb-1 brd-b-grey'>
              <div className="col-6 brd-r-grey">
                <h1 className='title-style theme-color'>CONTACT</h1>
              </div>
              <div className="col-6">
                <div className='ms-4 fs-5'>
                  <div className='mb-1'>Mon: <span className='color-grey'>Closed</span>
                  </div><div className='mb-1'>Tue - Fri:<span className='color-grey'> 9 am to 7 pm</span>
                  </div><div className='mb-1'>Sat - Sun:<span className='color-grey'> 9 am to 4 pm</span></div>
                </div></div>
            </div>
            <div className='row brd-b-grey'></div>
            <div className='row my-5'>
              <div className="col-6 brd-r-grey">
                <div className='theme-color fs-6 mb-2'>Call US</div>
                <div className='fs-4'>1 800-123-4567</div>
              </div>
              <div className="col-6 text-end">
                <div className='theme-color fs-6 mb-2'>Location</div>
                <div className='fs-4'>5678  Seltice Way Coeur D Alene</div>
              </div>
            </div>
            <img src={map} style={{ borderRadius: '25px' }} width={810} alt="Map" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
