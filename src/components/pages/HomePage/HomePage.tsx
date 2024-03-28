import React from "react"
import FeaturedProducts from './FeaturedProducts/FeaturedProducts'
import { MdNavigateNext } from "react-icons/md"
import PopularProducts from './PopularProducts/PopularProducts';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>

      <div className='px-8 pb-16 grid grid-cols-2 items-center'>
        <div className=''>
          <span className='block w-[600px] text-[58px]'>Transform Your Home with Our Stunning</span>
          <span className='block w-[600px] font-bold text-[48px]'>Furniture Collection</span>
        </div>
        <div>
          <p className='w-[550px] text-justify'>Welcome to our furniture store, where we believe that a well-furnished
          home is a happy home. We offer a wide selection of high-quality
          furniture for every room in your home, from cozy sofas and elegant
          dining sets to stylish office desks and comfortable beds.</p>
          <div>
            <button className='mt-8 mr-4 w-[120px] h-[40px] bg-black text-white border-[1px] border-black rounded-[5px]'>Shop Now</button>
            <button className='w-[120px] h-[40px] border-[1px] border-black rounded-[5px]'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='px-8'>
        <img src="/banner1.png" alt="" />
      </div>

      <FeaturedProducts/>

      <div className='my-32 relative w-full px-8 h-[420px] bg-black flex justify-between items-center'>
        <div>
          <span className='font-bold text-white'>Tagline</span>
          <h2 className='mt-4 font-bold text-white text-[39px]'>Sales Up to 50%</h2>
          <div className='mt-8 flex items-center'>
            <button className='text-white w-[120px] h-[48px] rounded-[5px] border-white border-[1px]'>Shop Now</button>
            <div className='relative flex items-center'>
              <button className='text-white w-[120px] h-[48px] rounded-[5px]'>Button</button>
              <MdNavigateNext className='absolute right-0.5 cursor-pointer' color='white' size='28'/>
            </div>
          </div>
        </div>
        <div className='absolute right-20 top-0'>
          <img src="/banner2.png" alt="" />
        </div>
      </div>

      <PopularProducts/>
    </div>
  );
};

export default HomePage;
