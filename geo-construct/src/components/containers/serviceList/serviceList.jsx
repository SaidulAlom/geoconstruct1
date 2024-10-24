import React from 'react'
import Card from './card/card'

const ServiceList = () => {
  return (
    <>
      <div className='flex justify-around'>
        <Card heading="Environmental"  ></Card>
        <Card heading="Geographical" ></Card>
        <Card heading="Demographical" ></Card>
        <Card heading="Public Amenities" ></Card>
      </div>
    </>
  )
}

export default ServiceList
