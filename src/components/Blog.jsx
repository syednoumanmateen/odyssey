import React from 'react'
import { useNavigate } from 'react-router'
import blog1 from '../images/blog&events/blog1.jpg'
import blog2 from '../images/blog&events/blog2.jpg'
import blog3 from '../images/blog&events/blog3.jpg'
import blog4 from '../images/blog&events/blog4.jpg'
import Swiperlist from './Swiperlist'

const Blog = () => {

  let Blog = [
    {
      "icon": blog1,
      "date": "MAY 23, 2022",
      "title": "Can We Stop Treating Restaurants As Status Symbols",
      "description": "Nunc sem purus dui faucibus id amet habitant pellentesque. Condimentum sed semper risus, arcu. Ornare adipiscing urna."
    }, {
      "icon": blog2,
      "date": "MAY 23, 2022",
      "title": "How To Pair Wines And Cheese",
      "description": "Lacus risus pretium quis quisque donec nec fringilla ipsum. Sed mi id est semper vel posuere libero. Habitant nulla velit sed id ac."
    }, {
      "icon": blog3,
      "date": "MAY 23, 2022",
      "title": "The Spicy Chicken You Never Knew You Loved",
      "description": "Accumsan, pellentesque amet gravida luctus etiam nisi, id elit. Egestas feugiat fames aliquet felis eget molestie mollis."
    }, {
      "icon": blog4,
      "date": "MAY 23, 2022",
      "title": "Emerging Trends in Restaurant Health",
      "description": "Quam diam sed mattis in pulvinar cursus ornare et amet. Vulputate curabitur enim diam at nam lectus facilisi id ut. Et ut amet sit viverra."
    }
  ]

  const navigate = useNavigate()

  let blogDetails = (e, k) => {
    // let param = Object.assign({}, e, { index: k })
    navigate('/blogDetails/' + e.title)
    // navigate({
    //   pathname: '/blogDetails',
    //   search: `?${createSearchParams(param)}`
    // });
  }

  return (
    <>
      <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist />
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div className='row pb-3 mb-1 brd-b-grey'>
              <div className="col-12">
                <h1 className='title-style theme-color'>BLOG AND EVENTS</h1>
              </div>
            </div>
            <div className='row brd-b-grey mb-5'></div>
            {
              Blog.map((e, ki) => {
                return (
                  <>
                    <div key={ki}>
                      <div className="row my-5 pb-5 brd-b-grey">
                        <div className="col-6" onClick={() => blogDetails(e, ki)}>
                          <img style={{ borderRadius: '25px' }} width={400} src={e.icon} alt={e.title} />
                        </div>
                        <div className="col-6 p-4">
                          <div className='theme-color fs-6'>{e.date}</div>
                          <div className='fs-4 my-3' onClick={() => blogDetails(e, ki)}>{e.title}</div>
                          <p className='color-grey'>{e.description}</p>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
