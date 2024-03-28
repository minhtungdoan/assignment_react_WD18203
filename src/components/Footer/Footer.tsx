import React from 'react'
import SocialIcon from '../Header/SocialIcon/SocialIcon'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='pb-12 mt-[120px] px-8'>
      <div className='pb-16 grid grid-cols-[12%_30%_15%_43%] border-b-[1px] border-b-black'>
        <div className=' flex gap-2 items-start'>
          <img src="./logo.png" alt="" />
          <span className='font-bold text-[24px]'>Ddsgnr</span>
        </div>

        <div>
          <div className='mb-2'>
            <span className='font-bold text-[18px]'>Categories</span>
          </div>
          <div className='grid grid-cols-2'>
            <div>
              <span className='block py-2'>Wall art</span>
              <span className='block py-2'>Vase</span>
              <span className='block py-2'>Tea Kettle</span>
              <span className='block py-2'>Chair</span>
              <span className='block py-2'>Basket</span>
            </div>
            <div>
              <span className='block py-2'>Bed table</span>
              <span className='block py-2'>Armchair</span>
              <span className='block py-2'>Ficus</span>
              <span className='block py-2'>Desk decor</span>
              <span className='block py-2'>Cactus</span>
            </div>
          </div>
        </div>
        
        <div>
          <div className='mb-2'>
            <span className='font-bold text-[18px]'>About</span>
          </div>
          <div>
              <span className='block py-2'>Contact Us</span>
              <span className='block py-2'>About Us</span>
              <span className='block py-2'>Support/Help</span>
              <span className='block py-2'>FAQ</span>
              <span className='block py-2'>Terms and Conditions</span>
            </div>
        </div>

        <div>
         <div className='mb-2'>
            <div>
              <span className='font-bold text-[18px]'>Subscribe</span>
            </div>
            <div className='mt-4'>
              <p>Join our newsletter to stay up to date on features and releases.</p>
            </div>
            <div className='mt-4'>
              <input className='p-2 w-[420px] h-[48px] border-[1px] border-black rounded-[8px]' type="text"  placeholder='Enter your email'/>
              <button className='ml-4 p-2 w-[120px] h-[48px] border-[1px] border-black rounded-[8px]'>Subscribe</button>
            </div>
            <div className='mt-4'>
              <p className='text-[13px]'>
                <span>By subscribing you agree to with ours </span>
                <span className='underline'>Privacy Policy</span>
                <span> and provide consent to receive updates from our company.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center py-6'>
        <div className='flex gap-6'>
          <div>
            <span>2023 Relume. All right reserved.</span>
          </div>
          <div>
            <span className='underline'>Privacy Policy</span>
          </div>
          <div>
            <span className='underline'>Terms of Service</span>
          </div>
          <div>
            <span className='underline'>Cookies Settings</span>
          </div>
        </div>
        <div className='w-[10%]'>
          <SocialIcon/>
        </div>
      </div>
    </div>
  )
}

export default Footer