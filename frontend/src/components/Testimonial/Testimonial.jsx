



import ava01 from '../../Images/ava-1.jpg'
import ava02 from '../../Images/ava-2.jpg'
import ava03 from '../../Images/ava-3.jpg'
import Slider from 'react-slick'
import React from 'react'

const Testimonial = () => {
    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint : 992,
                settings :{
                    slidesToShow :2,
                    slidesToScroll :1,
                    infinite :true,
                    dots:true,
                },
                breakpoint : 576,
                settings :{
                    slidesToShow :1,
                    slidesToScroll :1,
                },
            }
        ]
    }
  return (
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, expedita laboriosam nisi ut consectetur illum quos? 
        Ipsa rem incidunt, ad exercitationem, distinctio 
        fuga culpa dolorum molestiae architecto corrupti minima quae?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Joe Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, expedita laboriosam nisi ut consectetur illum quos? 
        Ipsa rem incidunt, ad exercitationem, distinctio 
        fuga culpa dolorum molestiae architecto corrupti minima quae?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Lia Doe</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, expedita laboriosam nisi ut consectetur illum quos? 
        Ipsa rem incidunt, ad exercitationem, distinctio 
        fuga culpa dolorum molestiae architecto corrupti minima quae?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John David</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, expedita laboriosam nisi ut consectetur illum quos? 
        Ipsa rem incidunt, ad exercitationem, distinctio 
        fuga culpa dolorum molestiae architecto corrupti minima quae?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John David</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Repellendus, expedita laboriosam nisi ut consectetur illum quos? 
        Ipsa rem incidunt, ad exercitationem, distinctio 
        fuga culpa dolorum molestiae architecto corrupti minima quae?
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>John David</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
  )
}

export default Testimonial