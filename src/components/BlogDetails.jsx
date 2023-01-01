import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Swiperlist from './Swiperlist';
import './Swiperlist.css'

const BlogDetails = () => {
  let searchParams = useParams();
  let ctx;
  const [Blog] = useState([
    {
      "date": "MAY 23, 2022",
      "css": 'slideBlogDetails1',
      "title": "Can We Stop Treating Restaurants As Status Symbols"
    }, {
      "date": "MAY 23, 2022",
      "css": 'slideBlogDetails2',
      "title": "How To Pair Wines And Cheese"
    }, {
      "date": "MAY 23, 2022",
      "css": 'slideBlogDetails3',
      "title": "The Spicy Chicken You Never Knew You Loved"
    }, {
      "date": "MAY 23, 2022",
      "css": 'slideBlogDetails4',
      "title": "Emerging Trends in Restaurant Health"
    }
  ])

  Blog.map((e, k) => {
    if (e.title === searchParams.data) {
      ctx = <div className="container-fluid text-light">
        <div className="row bg-dark">
          <div className="col-6 m-0 p-0" style={{ backgroundColor: '#07232700' }}>
            <Swiperlist name={e.title} css={e.css} />
          </div>
          <div className="col-6 p-5 m-0 odyssey-bg">
            <div className='pb-3 mb-1 brd-b-grey'>
              <div className='theme-color blog-title mb-2' key={k} > {e.title}</div >
              <div className='mb-3'>{e.date}</div>
            </div>
            <div className="brd-b-grey"></div>
            <p className='color-grey pt-4'>Cum euismod lectus molestie blandit nibh pellentesque dolor enim praesent. Libero sit et quis at mauris nulla velit. Ultricies arcu tellus morbi neque. Aenean tristique in massa ultricies orci purus. Pulvinar sed viverra ut tristique mi in.</p>
            <p className='color-grey'>Nec dictum mi volutpat odio id tellus.Nec, quisque felis, senectus tellus, sit faucibus sed. Hendrerit volutpat integer faucibus vel dolor elementum consequat. Malesuada est tellus vulputate pellentesque vulputate a at varius ut.</p>
            <p className='brd-l-theme ps-3 fs-5 my-5 mx-3' style={{ color: 'white' }}>Cum euismod lectus molestie blandit nibh pellentesque dolor enim praesent. Libero sit et quis at mauris nulla velit. Ultricies arcu tellus morbi neque. Aenean tristique in massa ultricies orci purus. Pulvinar sed.</p>
            <p className='color-grey'>Phasellus diam ac diam netus morbi vitae erat. Sapien nunc rhoncus pulvinar urna, euismod. Est velit habitasse feugiat purus cursus donec. Ac quam in in viverra neque, porttitor metus, sapien in. Eleifend libero neque, turpis arcu. Vitae magna proin egestas dolor, in porttitor sed.</p>
            <p className='text-light fs-3 my-4'>Nunc aliquam habitant egestas.</p>
            <p className='color-grey'>Maecenas porta amet morbi arcu viverra purus arcu, ac tincidunt. Eu id lectus sit sed amet aenean volutpat, eu. Lobortis morbi placerat arcu enim nibh sed. Quis blandit id non dignissim mauris sodales velit. Risus fringilla felis pretium, sed tortor egestas.</p>
          </div>
        </div>
      </div>
    }
    return e
  });

  return (
    <>
      {ctx}
    </>
  )
}

export default BlogDetails
