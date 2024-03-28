import React from 'react'
import ItemFeaturedProducts from '../FeaturedProducts/ItemFeaturedProducts/ItemFeaturedProducts'

type Props = {}

const PopularProducts = (props: Props) => {
  return (
    <div className='px-8'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='font-bold text-[39px]'>Popular Products</h2>
          <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div>
          <button className='w-[100px] h-[40px] border-[1px] border-black rounded-[5px]'>View all</button>
        </div>
      </div>

      <div className='pt-16 grid grid-cols-4 gap-x-8 gap-y-16'>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
        <ItemFeaturedProducts/>
      </div>
    </div>
  )
}

export default PopularProducts