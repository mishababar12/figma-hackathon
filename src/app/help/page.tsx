import React from 'react'
import {FaSearch} from "react-icons/fa"
import { IoIosThumbsUp } from "react-icons/io";
import { IoIosThumbsDown } from "react-icons/io";
import Image from 'next/image';
import mubile from "../../../public/mubile.png";
import seven from "../../../public/seven.png";
import envelope from "../../../public/envelope.png";
import nike1 from "../../../public/nike1.png"

export default function Help() {
  return (
    <div className="w-[1428px] h-auto mx-[6px]  items-center justify-center">
  
    {/* First Div - GET HELP */}
    <div className="w-[1440px] h-[132px] flex items-center justify-center">
      <div className="w-[157px] h-[36px] mr-44 mb-14">
        <h1 className="text-2xl font-semibold mb-5">GET HELP</h1>
      
  
    {/* Second Div - Search Input */}
    <div className="w-[457px] h-[56px] ">
      <div className="relative w-full h-full -ml-36">
        <input
          type="text"
          placeholder="What can we help you with?"
          className="border border-gray-300 rounded-md pl-4 pr-10 py-2 text-sm focus:outline-none w-full h-full"
        />
        <FaSearch className="absolute right-3 top-3.5 text-gray-500" />
      </div>
      </div>
      </div>
    </div>
  <div className='w-[1309px] h-[1098px] '>

    <div className='w-[1253px] h-[1042px] flex  mt-6'>

        {/* 1st div */}
        <div className='w-[939.33px] h-[1042px] ml-8 flex-col'>

            <div className='w-[766px] h-[31px]'>
                <h1 className='text-[28px] font-medium'>WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h1>
            </div>

            <div className='w-[923px] h-[958px] mt-8'>
                <p className='text-[15px]'>We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <div className='w-[905px] h-[108px] mt-4'>
                <p className='text-[16px] ml-4'>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
                <p className='text-[15px] mt-2 ml-4'>If you enter your PAN information at checkout, you will be able to pay for your order with PayTM or a local credit or debit card.</p>
                <p className='text-[15px] mt-2 ml-4'>Apple Pay</p>
                </div>
            <div className='w-[923px] h-[115px]'>
                <p className='text-[16px]'><span className='underline font-medium'>Nike Members</span> can store multiple debit or credit cards in their profile for faster checkout.If your not already a Member,
                <span className='underline font-medium'> join <br/>us</span> today.</p>
                <div className='space-x-4'>
                <button className='w-[106px] h-[39px] bg-black text-white rounded-full mt-8'>JOIN US</button>
                <button className='w-[129px] h-[39px] bg-black text-white rounded-full mt-8'>SHOP NIKE</button>
                </div>
            </div>
            
                
            <div className='w-[923px] h-[128px] mt-8'>
                <h1 className='text-[20px] font-semibold'>FAQs</h1>
                <p className='text-[16px] font-medium mt-2'>Does my card need international purchases enabled?</p>
                <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                <p className='text-[15px] mt-4'>Please note, some banks may charge <span className='underline font-medium'>a small transaction fee</span> for international orders.</p>
               </div>
            
            <div className='w-[923px] h-[56px] mt-8'>
               <p className='text-[16px] font-medium'>Can I pay for my order with multiple methods?</p>
               <p className='text-[15px] font-normal'>No, payment for Nike orders can't be split between multiple payment methods.</p>
            </div>

            <div className='w-[923px] h-[56px]'>
               <p className='text-[16px] font-medium'>What payment method is accepted for SNKRS orders?</p>
               <p className='text-[15px] font-normal'>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>

            <div className='w-[923px] h-[112px]'>
               <p className='text-[16px] font-medium'>Why dont I see Apple Pay as an option?</p>
               <p className='text-[15px] font-normal'>To see Apple Pay as an option in the Nike App or on Nike.com, you wll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, 
                you will need to use Safari to use Apple Pay on Nike.com.</p>
            </div>
            
            <div className='w-[923px] h-[175px]'>
               <p className='text-[16px] font-normal'>Was this answer helpful?</p>
               <div className='flex'>
                          <div className='w-[20px] h-[46px] cursor-pointer'>
                          <IoIosThumbsUp className='text-black' />
                          </div>
                          <div className='w-[20px] h-[46px] cursor-pointer'>
                          <IoIosThumbsDown className='text-black' />
                          </div>

                </div>
                <h1 className='text-[#757575] text-[16px] -mt-3'>RELATED</h1>
                <div className='w-[907px] h-[68px] mt-4 ml-4'>
                    <h1 className='underline decoration-[#757575]'>WHAT ARE NIKES DELIVERY OPTIONS?</h1>
                    <h1 className='underline decoration-[#757575]'>HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</h1>
                   
                </div>
               
            </div>


            </div>
        </div>
        <div className='border border-y-2'></div>

        {/* 2nd div */}
        <div className='w-[313px] h-[1042px]  mr-8 flex-col'>
        <h1 className='text-[28px] font-medium flex flex-col items-center justify-center'>CONTACT US</h1>
        <div className='w-[265px] h-[836px]'>
  
  {/* First Block */}
  <div className='w-[265px] h-[242px] flex flex-col items-center justify-center'>
    <Image src={mubile} alt={"image"} className="md:w-[40px] sm:w-[40px] w-[40px]" />
    <p className='text-[15px] font-medium text-center mt-6'>000 800 919 0566</p>
    <p className='text-[15px] text-center'>
      Products & Orders: 24 hours a day,<br/> 7 days a week<br/>
      Company Info & Enquiries: 07:30 - <br/>16:30, Monday - Friday
    </p>
  </div>

  {/* Second Block */}
  <div className='w-[265px] h-[158px] flex flex-col items-center justify-center '>
    <Image src={seven} alt={"image"} className="md:w-[40px] sm:w-[40px] w-[40px]" />
    <p className='text-[15px] text-center mt-6'>24 hours a day</p>
    <p className='text-[15px] text-center'>7 days a week</p>
  </div>

  {/* Third Block */}
  <div className='w-[265px] h-[158px] flex flex-col items-center justify-center'>
    <Image src={envelope} alt={"image"} className="md:w-[40px] sm:w-[40px] w-[40px]" />
    <p className='text-[15px] text-center mt-6'>We will reply within</p>
    <p className='text-[15px] text-center'>five business days</p>
  </div>

  {/* Fourth Block */}
  <div className='w-[265px] h-[158px] flex flex-col items-center justify-center'>
    <Image src={nike1} alt={"image"} className="md:w-[40px] sm:w-[40px] w-[40px]" />
    <p className='text-[16px] text-center mt-6'>STORE LOCATOR</p>
    <p className='text-[15px] text-center'>Find Nike retail stores near you</p>
  </div>

</div>


        </div>

    </div>
  </div>
  </div>
  
  )}  