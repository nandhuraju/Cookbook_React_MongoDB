import React from 'react'

import Footer from '../components/Footer'
import RecipeCards from '../components/RecipeCards'


const Homepage = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
        
        <RecipeCards/>
        
        <Footer/>
    </div>
  )
}

export default Homepage