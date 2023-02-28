import React from 'react'
import { Link } from 'react-router-dom'
import fetchData from '../apiCalls';


const Restaurants = ({restaurant}) => {
  return (
    <Link to={`/${restaurant.id}`}>
      <div className="restaurant">
      </div>
    </Link>
  )
}

export default Restaurants