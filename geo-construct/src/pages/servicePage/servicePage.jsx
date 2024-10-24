import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import ServiceList from '../../components/containers/serviceList/serviceList'

const ServicePage = () => {
  return (
    <div>
      <Header></Header>
      <ServiceList></ServiceList>
      <Footer></Footer>
    </div>
  )
}

export default ServicePage
