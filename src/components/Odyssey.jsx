import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Common.css'
import Swiperlist from './Swiperlist';

const Odyssey = () => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist />
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div style={{ marginRight: '135px' }} className="mb-5">
              <h1 className="title-style mb-5">
                <span className='theme-color title-style'>Resturant</span> Of European Cuisine
              </h1>
              <p className='fs-5 color-grey'>
                We use only the finest local ingredients available and offer seasonal specials throughout the year.
              </p>
            </div>
            <button onClick={() => navigate('bookatable')} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={`btn btn-lg py-3 px-4" ${hover ? "btn-light" : 'btn-warning'}`} style={{ borderRadius: '50px' }}>BOOK A TABLE</button>

            <div className='row footer'>
              <div className="col-6">
                <div className='theme-color fs-6 mb-2'>Call US</div>
                <div className='fs-4'>1 800-123-4567</div>
              </div>
              <div className="col-6 text-end">
                <div className='theme-color fs-6 mb-2'>Location</div>
                <div className='fs-4'>5678  Seltice Way Coeur D Alene</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Odyssey
