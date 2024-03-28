import React from 'react'
import SocialIcon from './SocialIcon/SocialIcon'
import { AiOutlineGlobal } from "react-icons/ai"
import { RiArrowDropDownLine } from "react-icons/ri"
import { LuUser } from "react-icons/lu"
import { CiSearch } from "react-icons/ci"
import { IoIosHeartEmpty } from "react-icons/io"
import { IoCartOutline } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='mb-16'>
      <div className='flex px-8 justify-between py-4 border-b-[1px] border-b-black'>
        <div className='flex justify-start gap-10'>
          <div className='pr-10 border-r-[1px] border-black'>
            <span>Phone Number: 956 742 455 678</span>
          </div>
          <div>
            <span>Email: info@ddsgnr.com</span>
          </div>
        </div>
        <div className='flex justify-between items-center gap-10'>
          <SocialIcon></SocialIcon>
          <div className='flex gap-4 justify-between'>
            <div className='flex gap-2 justify-between items-center'>
              <AiOutlineGlobal/>
              <div className='flex justify-between items-center'>
                <span>English</span>
                <RiArrowDropDownLine size='22'/>
              </div>
            </div>
            <div className='flex gap-2 justify-between items-center'>
              <LuUser/>
              <span>Sign In</span>
            </div>
          </div>
        </div>
      </div>

      <div className='px-8 py-2 grid grid-cols-[30%_70%] items-center border-b-[1px] border-b-gray-300'>
        <div className='flex gap-2 items-center'>
          <img src="./logo.png" alt="" />
          <span className='font-bold text-[24px]'>Ddsgnr</span>
        </div>
        <div className='grid grid-cols-[45%_15%_40%] gap-4 items-center'>
          <div className='flex gap-12'>
            <button className='h-[46px] border-b-[1px] border-b-black'>Home</button>
            <button>Products</button>
            <button>About Us</button>
            <button>Contact</button>
          </div>
          <div className='relative flex'>
            <input className='p-2 border-[1px] border-black rounded-[5px] w-full h-[35px]' type="text" placeholder='Search' />
            <CiSearch className='absolute right-2 top-0.5' size='30'/>
          </div>
          <div className='flex gap-12 justify-center'>
            <div>
              <IoIosHeartEmpty className='m-auto' size='28'/>
              <span>Wishlist</span>
            </div>
            <div>
              <IoCartOutline className='m-auto' size='28'/>
              <span>Cart</span>
            </div>
            <div>
              <IoIosNotificationsOutline className='m-auto' size='28'/>
              <span>Notification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Header