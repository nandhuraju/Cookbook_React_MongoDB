import React from 'react'
import Header from '../components/Header'
import MainContentIndex from '../components/MainContentIndex'
import Footer from '../components/Footer'

const IndexPage = () => {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
    <Header/>
    <MainContentIndex/>
    <Footer/>

    </div>
  )
}

export default IndexPage