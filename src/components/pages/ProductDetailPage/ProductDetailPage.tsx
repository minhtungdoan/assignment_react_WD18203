import React from 'react'
import { MdStar } from "react-icons/md"
import { FiMinus } from "react-icons/fi"
import { GoPlus } from "react-icons/go"
import { CiHeart } from "react-icons/ci"
import { TbTruckDelivery } from "react-icons/tb"
import { FaArrowsRotate } from "react-icons/fa6"
import ItemFeaturedProducts from '../HomePage/FeaturedProducts/ItemFeaturedProducts/ItemFeaturedProducts'

type Props = {}

const ProductDetailPage = (props: Props) => {
  return (
    <div className=''>
      <div className='px-20'>
        <div>
          <span className='text-gray-500'>Account</span>
          <span className='mx-3'>/</span>
          <span className='text-gray-500'>Gaming</span>
          <span className='mx-3'>/</span>
          <span>Havic HV G-92 Gamepad</span>
        </div>
        <div className='mt-20 grid grid-cols-[50%_50%] gap-16'>
          <div className='flex gap-6'>
            <div className='grid grid-flow-row gap-4'>
              <div className='bg-gray-50 p-4'>
                <img src="/image 57.png" alt="" />
              </div>
              <div className='bg-gray-50 p-4'>
                <img src="/image 58.png" alt="" />
              </div>
              <div className='bg-gray-50 p-4'>
                <img src="/image 59.png" alt="" />
              </div>
              <div className='bg-gray-50 p-4'>
                <img src="/image 61.png" alt="" />
              </div>
            </div>
            <div className='bg-gray-50 w-full flex justify-center items-center'>
              <img className='' src="/image 63.png" alt="" />
            </div>
          </div>
          <div className='w-[69%]'>
            <h3 className='font-bold text-[24px]'>Havic HV G-92 Gamepad</h3>
            <div className='mt-2 flex gap-4 items-center '>
              <div className='flex gap-0.5'>
                <MdStar color="orange"/>
                <MdStar color="orange"/>
                <MdStar color="orange"/>
                <MdStar color="orange"/>
                <MdStar color="gray"/>
              </div>
              <div className='flex items-center gap-4'>
                <span className='text-gray-400'>(150 Reviews)</span>
                <div className='border-r-[1px] border-r-black h-4'></div>
              </div>
              <span className='text-green-400'>In-Stock</span>
            </div>
            <div className='pb-8 border-b-[1px] border-b-black'>
              <span className='my-2 block text-[24px]'>$192.00</span>
              <div className='w-[95%]'>
                <span className='text-justify'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</span>
              </div>
            </div>
            <div className='mt-8 flex gap-4'>
              <div className='flex items-center'>
                <button className='flex items-center justify-center rounded-l-[5px] h-10 w-10 border-[1px] border-r-[0px] border-gray-500'>
                  <FiMinus size="30"/>
                </button>
                <input className='h-10 w-20 border-[1px] border-gray-500' type="number" />
                <button className='flex items-center justify-center bg-red-500 rounded-r-[5px] h-10 w-10 border-[1px] border-l-[0px] border-red-500'>
                  <GoPlus color="white" size="30"/>
                </button>
              </div>
              <div className='w-[200px] text-white text-[20px] flex justify-center items-center h-10 rounded-[3px] bg-red-500 border-[1px] border-red-500'>Buy now</div>
              <div className='flex justify-center items-center border-[1px] border-gray-500 w-[50px] h-10 rounded-[5px]'>
                <CiHeart size="33"/>
              </div>
            </div>
            <div className='mt-8'>
              <div className='p-4 flex gap-4 border-[1px] border-b-[0px] border-gray-500 rounded-t-[5px]'>
                <div>
                  <TbTruckDelivery size="42"/>
                </div>
                <div>
                  <span className='block font-[500] '>Free Delivery</span>
                  <span className='block font-[500] text-[14px] underline'>Enter your postal code for Delivery Availability</span>
                </div>
              </div>
              <div className='p-4 flex gap-4 border-[1px] border-gray-500 rounded-b-[5px]'>
                <div>
                  <FaArrowsRotate size="42"/>
                </div>
                <div>
                  <span className='block font-[500]'>Return Delivery</span>
                  <span className='block font-[500] text-[14px]'>Free 30 Days Delivery Returns. Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16'>
        <h2 className='px-4 font-bold text-[39px]'>Other Products</h2>
        <div className='px-8 mt-12 grid grid-cols-4 gap-8'>
          <ItemFeaturedProducts/>
          <ItemFeaturedProducts/>
          <ItemFeaturedProducts/>
          <ItemFeaturedProducts/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage