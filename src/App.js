import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './components/Layout'
import fetchData from './apiCalls';
import React, {useState, useEffect} from "react"; 

const App = () => {
  const [restaurants, setRestaurants] = useState([])


  useEffect(() => {
    fetchData()
    .then(data => setRestaurants(data))
  }, [])

const restaurantsArray = restaurants.map((restaurant) => {
  return (
  <div key = {restaurant.id}>
    <h2>{restaurant.name}</h2>
  </div>)  
})  


return (
  <div className="container mx-auto px-4">
    <h1>Restaurant's List </h1>
    {restaurantsArray}
  </div>
)}


export default App;