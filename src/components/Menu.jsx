import React from 'react'
import Swiperlist from './Swiperlist'

const Menu = () => {

  const List = [
    {
      "label": "Lunch Menu",
      "subList": [
        {
          "title": "In amet dui egestas.",
          "description": "Luctus congue in leo massa dui tortor. Phasellus neque aliquet vivamus in posuere nibh facilisi.",
          "price": "29"
        }, {
          "title": "Egestas netus sit sit.",
          "description": "Pharetra nisl, nibh mus dui. Velit etiam et pellentesque convallis. Et, quis eleifend orci venenatis aliquam pharetra.",
          "price": "12"
        }, {
          "title": "Scelerisque.",
          "description": "Sit dignissim nunc vulputate dolor, in ut. At quisque non nisl felis. Diam ut fringilla enim suspendisse.",
          "price": "16"
        }, {
          "title": "Auctor nullam vel.",
          "description": "Ac consectetur integer dui enim tellus, mattis vestibulum ipsum mi. Mattis nunc odio orc.",
          "price": "7"
        }, {
          "title": "Interdum proin.",
          "description": "Cursus nunc, netus montes, orci, turpis arcu nec, mauris vestibulum. Pharetra fermentum convallis.",
          "price": "20"
        }
      ]
    }, {
      "label": "Dinner Menu",
      "subList": [
        {
          "title": "Commodo viverra.",
          "description": "Urna id ultricies fringilla sed pulvinar hac. Duis faucibus etiam non netus augue metus in elementum.",
          "price": "27"
        }, {
          "title": "Accumsan vitae.",
          "description": "Hendrerit cras sit sit scelerisque nisi, cras purus ultricies sit. Viverra euismod nisl laoreet.",
          "price": "9"
        }, {
          "title": "Varius faucibus.",
          "description": "Metus quis fermentum nisl, molestie suspendisse. Tempor arcu libero ut lorem sit magnis vestibulum.",
          "price": "24"
        }, {
          "title": "Pellentesque nisl.",
          "description": "Suspendisse vitae mattis ultrices sem orci quam elementum est mi. Mi ipsum magna justo lorem.",
          "price": "10"
        }, {
          "title": "Eu nunc sollicitudin.",
          "description": "Vitae aliquam eget augue ullamcorper est. Tristique in aliquam, gravida varius nullam.",
          "price": "8"
        }
      ]
    }, {
      "label": "Seafood",
      "subList": [
        {
          "title": "Ipsum quis eget.",
          "description": "Tempor ultricies eget dictumst semper. Iaculis lorem vitae accumsan velit scelerisque.",
          "price": "21"
        }, {
          "title": "Vel consectetur nisl.",
          "description": "Urna dignissim amet, tincidunt tincidunt elit id. Condimentum et augue cursus at turpis lorem eros.",
          "price": "29"
        }, {
          "title": "Faucibus.",
          "description": "A in consequat sed massa id justo. Lacinia volutpat vivamus eget ut sed. Interdum.",
          "price": "13"
        }
      ]
    }, {
      "label": "Drinks",
      "subList": [
        {
          "title": "Ipsum rutrum eu.",
          "description": "Fermentum faucibus elit tincidunt nisl, id nullam. Ipsum.",
          "price": "7"
        }, {
          "title": "Sodales volutpat.",
          "description": "Libero commodo tellus laoreet porttitor urna integer.",
          "price": "9"
        }, {
          "title": "Suspendisse.",
          "description": "Adipiscing praesent libero nunc aliquam. Fermentum eget.",
          "price": "1"
        }
      ]
    }
  ]

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
                <h1 className='title-style theme-color'>MENU</h1>
              </div>
              <div className="col-6">
                <p className='fs-5 ps-4 color-grey'>Eget vestibulum dignissim enim, vel nunc. Orci, vel urna vel viverra sed suscipit lorem nunc. Tellus convallis.</p>
              </div>
            </div>
            <div className='row brd-b-grey'></div>
            {
              List.map((e, k) => {
                return (
                  <>
                    <div key={k}>
                      <div className='mt-5 pb-4 fs-1 fw-bolder brdb-dot'>{e.label}</div>
                      <div>
                        {
                          e.subList.map((i, ki) => {
                            return (
                              <div key={ki} className='brdb-dot py-4 fs-6'>
                                <div className="row">
                                  <div className="col-3">{i.title}</div>
                                  <div className="col-8 color-grey pe-5">{i.description}</div>
                                  <div className="col-1">${i.price}</div>
                                </div>
                              </div>
                            )
                          })
                        }
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

export default Menu
