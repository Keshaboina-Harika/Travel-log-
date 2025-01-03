import './tourcard.css'
import { Button, Card, CardBody } from 'reactstrap'
import {Link} from 'react-router-dom'
import "./tourcard.css"
import React from 'react'
import calculateAvgRating from '../utils/avgRating'
import ph from '../Images/tour-img01.jpg';

const TourCard = ({tour}) => {
  
    const {_id,title, price,city, photo, featured, reviews} = tour;
    const {totalRating, avgRating} = calculateAvgRating(reviews);
    const modifiedPhoto = photo.replace('/tour-images/', 'Images/');

    console.log("Modified Image path", modifiedPhoto);
  return <div className='tour__card'>
      <Card>
      <div className="tour__img">
        {/* <img src={process.env.PUBLIC_URL+modifiedPhoto} alt="tour-img" /> */}
        <img src={process.env.PUBLIC_URL+modifiedPhoto} alt="tour-img" />
        {featured && <span>Featured</span>}
      </div>
      <CardBody>
      <div className="card__top d-flex align-items-center justify-content-between">
      <span className="tour__location d-flex align-items-center gap-1">
          <i className="ri-map-pin-line"></i>{city}
      </span>
      <span className="tour__rating d-flex align-items-center gap-1">
          <i className="ri-star-fill"></i> {avgRating==0? null : avgRating}
          {totalRating === 0 
          ? ("Not Rated") 
          : (
          <span>({reviews.length})</span>
          )}
      </span>
      </div>
      <h5 className='tour__title'><Link to={`/tours/${_id}`}>{title}</Link></h5>

      <div className="card__bottom d-flex align-tems-center justify-content-between mt-3">
        <h5>
          ${price}<span> /per person</span>
        </h5>
        <button className='btn booking__btn'>
          <Link to={`/tours/${_id}`}>Book Now</Link>
        </button>
      </div>
      </CardBody>
      </Card>
    


    
  </div>
}

export default TourCard