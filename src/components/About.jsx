import React from 'react'
import About1 from '../images/About1.jpg'
import About2 from '../images/About2.jpg'
import carrer from '../images/carrer.jpg'
import Swiperlist from '../components/Swiperlist'

const About = () => {
  return (
    <>
      <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist/>
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div className='row pb-3 mb-1 brd-b-grey'>
              <div className="col-12">
                <h1 className='title-style theme-color'>ABOUT ODYSSEY</h1>
              </div>
            </div>
            <div className='row brd-b-grey'></div>
            <div className='brd-b-grey pb-5 mb-5'>
              <div className='mt-5 mb-3 pb-4 fs-1 fw-bolder'>Our Story</div>
              <p className='color-grey'>Ac a at tempor, aliquam integer. Fusce sed nibh nisi, ullamcorper massa risus pulvinar. Suspendisse tortor at cras senectus quis facilisi posuere. Sollicitudin vel blandit amet mauris accumsan lobortis. Magna vel turpis odio blandit pharetra sed nascetur sed. Vivamus nisl quam sed congue nec.</p>
              <p className='color-grey'>Pulvinar scelerisque diam nunc eu rhoncus nunc quis senectus. Dignissim arcu tellus mauris sagittis. Molestie molestie imperdiet mus amet, habitasse non, a maecenas malesuada. Sed aliquam amet cursus.</p>
              <img style={{ borderRadius: '25px' }} className="my-3" width={810} src={About1} alt='About' />
              <p className='color-grey'>Eget nunc, non adipiscing risus sit lacinia. Arcu tristique in quis cras eu. Mollis bibendum nunc aliquam maecenas commodo. Dignissim morbi nibh odio nisi, mattis. Sit nunc cursus turpis cursus nisi. Volutpat hac eget a nunc.Et lacus, dolor nunc arcu sem. Odio egestas nulla feugiat nunc, nisl.</p>
              <img style={{ borderRadius: '25px' }} className="my-3" width={810} src={About2} alt='About' />
              <p className='color-grey'>Arcu lacus duis aliquam diam aliquet commodo. Pretium eu quam vitae blandit nulla. Dis viverra est risus ipsum euismod porta. Tortor cursus dictumst posuere mauris nibh sagittis nibh sed velit. Tellus, nunc quam facilisi maecenas malesuada eget quis tristique non. Nibh mattis scelerisque amet, id.</p>
              <p className='color-grey'>A enim, scelerisque urna tincidunt convallis ac augue venenatis enim. Interdum nisi in amet justo eu mauris.Ligula lobortis nunc semper mattis lacinia ullamcorper. Ornare in arcu lectus proin magna tortor nibh nibh. Convallis vitae a viverra pellentesque sed eu. Pellentesque aliquam id vel habitant habitant turpis.</p>
            </div>
            <div className='pb-5'>
              <div className='mt-5 mb-3 pb-4 fs-1 fw-bolder'>Careers</div>
              <p className='color-grey'>Scelerisque feugiat rutrum condimentum volutpat. Lectus neque, adipiscing aliquam potenti iaculis vel egestas eros augue. Mauris etiam semper congue est accumsan lorem. Ac mattis diam nunc id nulla enim in turpis non. Quis lacinia eget posuere hac vehicula. Dui tempor viverra faucibus dictumst id.</p>
              <img style={{ borderRadius: '25px' }} className="my-3" width={810} src={carrer} alt='About' />
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default About
