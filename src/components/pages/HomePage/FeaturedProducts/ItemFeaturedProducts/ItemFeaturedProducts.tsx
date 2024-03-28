import React from 'react'

type Props = {}

const ItemFeaturedProducts = (props: Props) => {
  return (
    <div>
      <img src="/table.png" alt="" />
      <div className='py-4 flex justify-between'>
        <div>
          <h3 className='font-bold text-[18px]'>Round Dining Table</h3>
          <span className='text-[14px]'>Bed table</span>
        </div>
        <span className='font-bold text-[18px]'>$55</span>
      </div>
      <button className='w-full h-10 border-[1px] border-black rounded-[5px]'>Add to cart</button>
    </div>
  )
}

export default ItemFeaturedProducts