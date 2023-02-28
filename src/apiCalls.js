const fetchData = () => {
  return fetch('http://127.0.0.1:8000/restaurants')
    .then(res => res.json())
    // .then(data => {
    //   console.log('DATA', data)
    //   return data
    // })
}

export default  fetchData 