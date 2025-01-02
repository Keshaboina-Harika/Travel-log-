
import {Col} from 'reactstrap';
import ServiceCard from './ServiceCard'
import React from 'react'
import weatherImg from '../Images/weather.png'
import guideImg from '../Images/guide.png'
import customizationImg from '../Images/customization.png'

const servicesData = [
    {
        imgUrl:weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Off.",
    },
    {
        imgUrl:guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Off.",
    },
    {
        imgUrl:customizationImg,
        title: "customization",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Off.",
    }
]

function ServiceList() {
  return <>
  {
    servicesData.map((item,index)=>
        <Col lg = '3' md='6' sm='12'className='mb-4' key={index}>
            <ServiceCard item={item}/>
        </Col>
    )
  }
  </>
}

export default ServiceList