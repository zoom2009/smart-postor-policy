import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home Page<br /><br />
      <Link to="/policy">Policy Page</Link>
    </div>
  )
}

export default Home
