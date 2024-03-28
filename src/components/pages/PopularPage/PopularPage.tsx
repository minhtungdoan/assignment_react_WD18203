import React from 'react'
import Header from '../../Header/Header'
import PopularProducts from '../HomePage/PopularProducts/PopularProducts'
import Footer from '../../Footer/Footer'

type Props = {}

const PopularPage = (props: Props) => {
  return (
    <div>
      <PopularProducts/>
    </div>
  )
}

export default PopularPage