import React from 'react'
import '../styles/home.css'
import SearchBar from '../shared/SearchBar'
import experienceImg from '../Images/experience.png'
import Subtitle from '../shared/Subtitle'
import {Container,Row,Col, InputGroup} from 'reactstrap'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Booking/Featured-tours/FeaturedTourList'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import Testimonial from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return( <>
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
            <div className="hero__subtitle d-flex align-items-center">
              <Subtitle subtitle={'Know Before Your Go'}/>
              <img src="https://th.bing.com/th/id/OIP.abdxP0HmrPOfcTzXIP2m3AHaHa?w=199&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            </div>
            <h1>Travelling opens the door to creating <span className='highlight'>memories
            </span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sequi voluptatem cumque architecto a minus omnis est, pariatur numquam eligendi corrupti, ipsum sit cupiditate accusantium, eaque ratione obcaecati provident! Beatae?</p>

          </div>
        </Col>
        <Col>
          <div className="hero__img-box">
            <img src="https://github.com/codingwithmuhib/MernStack-Tour-Management/blob/main/tour-management/frontend/src/assets/images/hero-img01.jpg?raw=true" alt="" />
          </div>
        </Col>
        <Col>
          <div className="hero__img-box hero__vedio-box mt-4">
            <video src="https://raw.githubusercontent.com/codingwithmuhib/MernStack-Tour-Management/main/tour-management/frontend/src/assets/images/hero-video.mp4"></video>
          </div>
        </Col>
        <Col>
          <div className="hero__img-box mt-5">
            <img src="https://github.com/codingwithmuhib/MernStack-Tour-Management/blob/main/tour-management/frontend/src/assets/images/hero-img02.jpg?raw=true" alt="" />
          </div>
        </Col>
        
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/*========hero sec start==========*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">What we serve</h5>
          <h5 className="services__title">We offer our best services</h5>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>

  {/*=======featured tour section start=====*/}

    <section>
      <Container>
        <Row>
          <Col lg="12" className='mb-5'>
            <Subtitle subtitle={"Explore"}/>
            <h2 className="featured__tour-title">Our Featured tours</h2>
          </Col>
          <FeaturedTourList/> 
        </Row>
      </Container>
    </section>

    {/*===========experience section start============*/}

    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle subtitle={'Experience'}/>
              <h2>
                With our all experience <br />we will serve you
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                <br />
                Quam, laborum! Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>16k+</span>
                <h6>Successful Trip</h6>
              </div>
              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className="counter__box">
                <span>5</span>
                <h6>Years of Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/*====gallery section starts======*/}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'}/>
            <h2 className="gallery__title">
              Visit our tour gallery
            </h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
        </Row>
      </Container>
    </section>
    {/*=========testimonial section start========== */}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'}/>
            <h2 className="testimonial__title">
              What our fans say about us(Review section)
            </h2>
          </Col>
          <Col lg='12'><Testimonial/></Col>
        </Row>
      </Container>
    </section>
   <Newsletter/>
    
  </>
  )
}

export default Home