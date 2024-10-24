import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import Hero from '../../components/containers/hero/hero'
import Services from '../../components/containers/service/services'
import Motive from '../../components/containers/motive/motive'
import Sample from '../../components/containers/sample/sample'
import CTA from '../../components/containers/cta/cta'
import Clients from '../../components/containers/clients/clients'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Motive></Motive>
      <Sample></Sample>
      <CTA></CTA>
      <Clients></Clients>
      <Footer></Footer>
    </div>
  )
}

export default Home
