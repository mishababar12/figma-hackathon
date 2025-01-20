import React from 'react';
import Image from 'next/image';
import img1 from "../../../public/img1.png";
import img2 from "../../../public/img2.png"; 
import img3 from "../../../public/img3.png";                                                                                                                                   
import img4 from "../../../public/img4.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


export default function Gear() {
  return (
    <div className="w-full min-h-screen pl-16 pr-16 flex flex-col mt-20">
      {/* Gear Up Heading */}
      <h1 className="text-2xl font-semibold text-black ">Gear Up</h1>


       {/* Top Images (Left and Right) */}
       <div className="flex mb-6">
        <div className="w-[211px] h-[48px] flex ml-auto">
           {/* Right div - Shop Buttons */}
                   
                      <h1 className='text-[16px] mt-3'>Shop Mens</h1>
                      <div className='flex gap-2 ml-1'>
                        <div className='w-[46px] h-[46px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer'>
                          <IoIosArrowBack className='text-black' />
                        </div>
                        <div className='w-[46px] h-[46px] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'>
                          <IoIosArrowForward className='text-black' />
                        </div>
                      
                    </div>
         
        </div>
        <div className="w-[211px] h-[48px] flex ml-auto">
           {/* Right div - Shop Buttons */}
                   
           <h1 className='text-[16px] mt-3'>Shop Womens</h1>
                      <div className='flex gap-2 ml-1'>
                        <div className='w-[46px] h-[46px] bg-gray-100 rounded-full flex justify-center items-center cursor-pointer'>
                          <IoIosArrowBack className='text-black' />
                        </div>
                        <div className='w-[46px] h-[46px] bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'>
                          <IoIosArrowForward className='text-black' />
                        </div>
                      
                    </div>
         

         
        </div>
      </div>
      
    
  



      {/* Columns Section */}
      <div className="flex justify-between w-full gap-4">
        {/* Column 1 */}
        <div className="w-[22%] flex flex-col items-center">
          {/* First Image */}
          <div className="w-[280px] h-[320px]">
            <Image src={img3} alt="image" width={280} height={280} className="object-cover w-full h-full" />
          </div>
          {/* Content Below Image */}
          <div className="w-[280px] flex gap-8">
            <div>
            <p className="text-sm font-semibold">Nike Dri-FIT ADV TechKnit Ultra</p>
            <p className="text-sm text-gray-500">Mens Short-Sleeve <br /> Running Top</p>
            </div>
            <p className="text-sm font-semibold">₹3 895</p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-[22%] flex flex-col items-center">
          {/* Second Image */}
          <div className="w-[280px] h-[320px]">
            <Image src={img2} alt="image" width={280} height={280} className="object-cover w-full h-full" />
          </div>
          {/* Content Below Image */}
          <div className="w-[280px] flex gap-20">
            <div>
            <p className="text-sm font-semibold">Nike Dri-FIT Challenger</p>
            <p className="text-sm text-gray-500">Mens 18cm (approx.) 2- <br /> in-1 Versatile Shorts</p>
            </div>
            <p className="text-sm font-semibold">₹2 495</p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="w-[22%] flex flex-col items-center">
          {/* Third Image */}
          <div className="w-[280px] h-[320px]">
            <Image src={img1} alt="image" width={280} height={280} className="object-cover w-full h-full" />
          </div>
          {/* Content Below Image */}
          <div className="w-[280px] flex gap-10 ">
            <div>
            <p className="text-sm font-semibold">Nike Dri-FIT ADV Run Division</p>
            <p className="text-sm text-gray-500">Womens Long-Sleeve <br /> Running Top</p>
            </div>
            <p className="text-sm font-semibold">₹5 295</p>
          </div>
        </div>

        {/* Column 4 */}
        <div className="w-[22%] flex flex-col items-center">
          {/* Fourth Image */}
          <div className="w-[280px] h-[320px]">
            <Image src={img4} alt="image" width={280} height={280} className="object-cover w-full h-full" />
          </div>
          {/* Content Below Image */}
          <div className="w-[280px]  flex gap-10">
            <div>
            <p className="text-sm font-semibold">Nike Fast</p>
            <p className="text-sm text-gray-500">Womens Mid-Rise 7/8 Running <br /> Leggings with Pockets</p>
            </div>
            <p className="text-sm font-semibold">₹3 795</p>
          </div>
        </div>
      </div>

    
      </div>

  );
}
