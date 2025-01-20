import React from 'react'
import Image from 'next/image'
import { IoMdHeartEmpty } from "react-icons/io";
import rame from "../../../public/rame.png"
import { RiDeleteBin6Line } from "react-icons/ri";


export default function Cart() {
  return (
    <div className="w-[1411px] h-auto py-[96px] flex justify-between">
  <div className="w-[1100px] h-[632.89px] px-[123.5px]">
    <div className="w-[1100px] h-[547px] flex pr-8 gap-4">
      
      {/* Left Section with bg-slate-400 */}
      <div className="w-[733.3px] h-[547px] px-[8px] py-[12px]">
        <div className='w-[717.23px] h-[62px] bg-[#F7F7F7]'>
        <h1 className='text-[16px] font-semibold ml-4' >Free Delivery</h1>
        <p className='text-[13px] ml-4'>Applies to orders of ₹ 14 000.00 or more.   
             <span className='underline font-semibold'> View details </span></p>
        </div>
        <h1 className='text-[22px] font-medium mt-2'>Bag</h1>
        <div className='w-[717.23px] h-[436px] space-y-10 mt-4'>

          {/*first image*/}
          <div className='w-[717px] h-[170px] flex'>
            <div className='w-[150px] h-[150px] flex-col'>
            <Image src={rame} alt={"image&amp;apos;"} width={150} height={150} className="object-cover w-full h-full" />
            </div>
            <div className='w-[537px] h-[170px] flex-col'>
              <div className='w-[537px] h-[112px] flex'>
                <div className='w-[235px] h-[112px] flex-col ml-8'>
                  <h1 className='text-[15px] font-medium'>Nike Dri-FIT ADV TechKnit Ultra</h1>
                  <p className='text-[15px] text-[#757575] mt-1'>Mens Short-Sleeve Running Top</p>
                  <p className='text-[15px] text-[#757575] mt-1'>Ashen Slate/Cobalt Bliss</p>
                  <div className='flex gap-10'>
                    <p className='text-[15px] text-[#757575] mt-1'>Size    L</p> 
                    <p className='text-[15px] text-[#757575] mt-1'>Quantity    1</p>
                  </div>
                </div>
                <div className='w-[123px] h-[28px] ml-auto -mr-5'>
                  <h1>MRP: ₹ 3 895.00</h1>
                </div>
                
              </div>

              <div className='w-[537px] h-[34px] flex gap-4 ml-8 mt-4'>
              <IoMdHeartEmpty className='w-[24px] h-[24px] '/>
              <RiDeleteBin6Line className='w-[24px] h-[24px]'/>
              </div>

            </div>


          </div>

          <div className='border border-x-gray-500'> </div>

          

          {/*second image*/}
          <div className='w-[717px] h-[170px] flex'>
            <div className='w-[150px] h-[150px] flex-col'>
           
            </div>
            <div className='w-[537px] h-[170px] flex-col'>
              <div className='w-[537px] h-[112px] flex'>
                <div className='w-[235px] h-[112px] flex-col ml-8'>
                  <h1 className='text-[15px] font-medium'>Nike Air Max 97 SE</h1>
                  <p className='text-[15px] text-[#757575] mt-1'>Mens Shoes</p>
                  <p className='text-[15px] text-[#757575] mt-1'>Flat Pewter/Light Bone/Black/White</p>
                  <div className='flex gap-10'>
                    <p className='text-[15px] text-[#757575] mt-1'>Size    8</p> 
                    <p className='text-[15px] text-[#757575] mt-1'>Quantity    1</p>
                  </div>
                </div>
                <div className='w-[123px] h-[28px] ml-auto -mr-5'>
                  <h1>MRP: ₹ 16 995.00</h1>
                </div>
                
              </div>

              <div className='w-[537px] h-[34px] flex gap-4 ml-8 mt-4'>
              <IoMdHeartEmpty className='w-[24px] h-[24px] '/>
              <RiDeleteBin6Line className='w-[24px] h-[24px]'/>
              </div>
             
            </div>
             
            

          </div>
          <div className='border border-x-gray-500'> </div>
        </div>
      </div>

      {/* Right Section with bg-stone-800 */}
      <div className="w-[350px] h-[547px] ">
       <h1 className='text-[22px] mt-2 text-black font-semibold'>Summary</h1>
       <div className="flex justify-between">
            <p className='text-[15px] text-black'>Subtotal</p>
            <p className='text-[15px] text-black'>₹ 20 890.00</p>
          </div>

          {/* Delivery/Shipping */}
          <div className="flex justify-between mt-2">
            <p className='text-[15px] text-black'>Estimated Delivery and Handling</p>
            <p className='text-[15px] text-black'>Free</p>
          </div>

           {/* Total */}
           <div className="flex justify-between border-t-2 border-b-2 border-[#f5f5f5] mt-2">
            <p className='text-[14px] text-black font-semibold mt-2'>Total</p>
            <p className='text-[15px]  text-black font-semibold mt-2 mb-4'>₹ 20 890.00</p>
          </div>
           <div className='w-[334.67px] h-[60px] mt-8 '>
          <button className='bg-black text-[#FFFFFF] pl-[100.88px] pr-[100.8px] pt-[18px] pb-[18px] rounded-full'>Member Checkout</button>
        </div>
      </div>
    </div>
  </div>
</div>
  )}
