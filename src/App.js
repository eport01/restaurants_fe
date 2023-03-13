import './App.css';
import './index.css';
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
    <h2>- {restaurant.name}</h2>
  </div>)  
})  


return (
  <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
  <p className="text-3xl text-gray-700 font-bold mb-5">
    <center><h1>Restaurant List </h1></center>
    {restaurantsArray}
    
  </p>
</div>

)}


export default App;