import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiperlist.css";

const Swiperlist = (props) => {
  const menu = [
    {
      "label": "Menu",
      "path": "/menu"
    }, {
      "label": "Book A Table",
      "path": "/bookatable"
    }, {
      "label": "Contact",
      "path": "/contact"
    }, {
      "label": "Blog",
      "path": "/blog"
    }, {
      "label": "About",
      "path": "/about"
    }
  ]

  let Blog = ["Can We Stop Treating Restaurants As Status Symbols", "How To Pair Wines And Cheese", "The Spicy Chicken You Never Knew You Loved", "Emerging Trends in Restaurant Health"];

  const [slide, setSlide] = useState("")
  let sliders;

  Blog.map((e, k) => {
    if (!props.name && (props.name !== e)) {
      if (slide === "Menu") {
        sliders = <>
          <SwiperSlide className="slideMenu1 slide"></SwiperSlide>
          <SwiperSlide className="slideMenu2 slide"></SwiperSlide>
        </>
      } else if (slide === "Book A Table") {
        sliders = <>
          <SwiperSlide className="slideBook1 slide"></SwiperSlide>
          <SwiperSlide className="slideBook2 slide"></SwiperSlide>
        </>
      } else if (slide === "Contact") {
        sliders = <>
          <SwiperSlide className="slideContact1 slide"></SwiperSlide>
          <SwiperSlide className="slideContact2 slide"></SwiperSlide>
        </>
      } else if (slide === "Blog") {
        sliders = <>
          <SwiperSlide className="slideBlog1 slide"></SwiperSlide>
          <SwiperSlide className="slideBlog2 slide"></SwiperSlide>
        </>
      } else if (slide === "About") {
        sliders = <>
          <SwiperSlide className="slideAbout1 slide"></SwiperSlide>
          <SwiperSlide className="slideAbout2 slide"></SwiperSlide>
        </>
      } else {
        sliders = <>
          <SwiperSlide className="slideBrand1 slide"></SwiperSlide>
          <SwiperSlide className="slideBrand2 slide"></SwiperSlide>
          <SwiperSlide className="slideBrand3 slide"></SwiperSlide>
        </>
      }
    } else {
      sliders = <>
        <SwiperSlide key={k} className={`slide-blog ${props.css}`}></SwiperSlide>
      </>
    }
    return e;
  })

  return (
    <div>
      <Swiper
        style={{ height: '948px' }}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2000
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sliders}
      </Swiper>
      <nav className="position-menu">
        <div className="mb-4" onClick={() => setSlide("")}>
          <Link className="navbar-brand text-light fs-2 fw-bold text-decoration-none" to="/">ODYSSEY</Link>
        </div>
        {
          menu.map((e, k) => {
            return (
              <ul key={k}>
                <li className="mb-15 theme-color">
                  <Link onClick={() => setSlide(e.label)} className="text-decoration-none text-light link fs-5" to={e.path}>{e.label}</Link>
                </li>
              </ul>
            )
          })
        }
      </nav>
    </div>
  )
}

export default Swiperlist
