import Image from 'next/image'
import React from 'react'
import Rectangle from "../../../public/Rectangle.png"
import Rectangle1 from "../../../public/Rectangle1.png"
import Rectangle2 from "../../../public/Rectangle2.png"
import { IoIosArrowDown } from "react-icons/io";
import { CiSliderHorizontal } from "react-icons/ci";
import { MdKeyboardArrowUp } from "react-icons/md";
import pic4 from "../../../public/pic4.png"
import pic5 from "../../../public/pic5.png"
import pic6 from "../../../public/pic6.png"
import pic7 from "../../../public/pic7.png"
import pic8 from "../../../public/pic8.png"
import pic9 from "../../../public/pic9.png"
import pic10 from "../../../public/pic10.png"
import pic11 from "../../../public/pic11.png"
import pic12 from "../../../public/pic12.png"
import pic13 from "../../../public/pic13.png"
import pic14 from "../../../public/pic14.png"
import pic15 from "../../../public/pic15.png"



export default function Products() {
  return (
    <div className='w-[1440px] h-auto'>
  {/* Navigation Bar */}
  <div className='w-[1344px] h-[36px] flex'>
    
    <div className='w-[110px] h-[32px] ml-8 '>
      <p className='text-[20px] font-medium '>NEW (500)</p>
    </div>
    <div className='w-[224px] h-[28px] ml-auto mr-32 flex'>
      <div className='w-[137px] h-[28px] relative'>
        <h1 className='text-[16px]'>Hide Filters</h1>
        <CiSliderHorizontal className="w-[20px] h-[20px] absolute right-4 top-1/2 transform -translate-y-1/2 "/>
      </div>
      <div className='w-[86px] h-[28px] relative'>
        <h1 className='text-[16px] pl-2'>Sort By</h1>
        <IoIosArrowDown className="w-[15px] h-[15px] absolute right-2 top-1/2 transform -translate-y-1/2 "/>
      </div>
       
    </div>
    
    
  </div>


  {/* Side Image and Columns side by side */}
  <div className='w-full h-auto flex'>
    {/* Side Image */}
    <div className='w-[260px] h-[848px] ml-4 pl-4 space-y-2'>
      <h1 className='text-[16px] font-semibold'>Shoes</h1>
      <h1 className='text-[16px] font-semibold'>Sports Bras</h1>
      <h1 className='text-[16px] font-semibold'>Tops & T-Shirts</h1>
      <h1 className='text-[16px] font-semibold'>Hoodies & Sweatshirts</h1>
      <h1 className='text-[16px] font-semibold'>Jackets</h1>
      <h1 className='text-[16px] font-semibold'>Trousers & Tights</h1>
      <h1 className='text-[16px] font-semibold'>Shorts</h1>
      <h1 className='text-[16px] font-semibold'>Tracksuits</h1>
      <h1 className='text-[16px] font-semibold'>Jumpsuits & Rompers</h1>
      <h1 className='text-[16px] font-semibold'>Skirts & Dresses</h1>
      <h1 className='text-[16px] font-semibold'>Socks</h1>
      <h1 className='text-[16px] font-semibold'>Accessories <br/>& Equipment</h1>
      

      <div className='w-[192px] h-[1705px]'>
      <div className='border border-y-gray-200 mt-8 '>

</div>
        {/*Gender div*/}
      <div className='w-[192px] h-[163px] '>
        <div className='w-[188px] h-[48px] flex justify-between items-center'>
          <h1 className='text-[16px] font-medium'>Gender</h1>
          <MdKeyboardArrowUp className="w-[18px] h-[18px]"/>
        </div>
        <div className=" w-[196px] h-[80px]">
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
           Men
          </label><br/>
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
           Women
          </label><br/>
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
           Unisex
          </label>
         
        </div>
      </div>
      <div className='border border-y-gray-200 '>

</div>
        {/*Kids div*/}
        <div className='w-[192px] h-[134px]'>
        <div className='w-[188px] h-[48px] flex justify-between items-center'>
          <h1 className='text-[16px] font-medium'>Kids</h1>
          <MdKeyboardArrowUp className="w-[18px] h-[18px]"/>
        </div>
      
        <div className=" w-[196px] h-[80px]">
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
           Boys
          </label><br/>
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
           Girls
          </label>
          </div>
        </div>
        <div className='border border-y-gray-200 '>

</div>
         {/*Shop div*/}
         <div className='w-[192px] h-[238px]'>
         <div className='w-[188px] h-[48px] flex justify-between items-center'>
         <h1 className='text-[16px] font-medium'>Shop By Price</h1>
          <MdKeyboardArrowUp className="w-[18px] h-[18px]"/>
        </div>
        <div className=" w-[196px] h-[80px] ">
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150 outline-none border-none" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
          Under ₹ 2 500.00
          </label><br/>
          <input type="checkbox" id="signupEmails" className="mr-4 scale-150" />
          <label htmlFor="signupEmails" className="text-[15px] text-black">
          ₹ 2 501.00 - ₹ 7 500.00
          </label>
         </div>
      </div>
      </div>
   
     </div>
        <div className='w-[11px] h-[849px] flex-col'>
      <div className='w-[7px] h-[329px] bg-neutral-500 rounded-md'>
      
      </div>
      
     </div>
    
  
  

    
    {/* Columns Section */}
    <div className="w-[1092px] h-auto flex flex-wrap gap-4"> {/* Added flex-wrap and gap-4 for spacing */}

      {/* Column 1 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Mid 07</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 10 795.00</p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle1} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low Next Nature</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 4 995.00</p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={Rectangle2} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 985.00</p>
        </div>
      </div>

      {/* Column 4 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic4} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 React</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 13 295.00</p>
        </div>
      </div>

      {/* Column 5 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic5} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Promo Exclusion</p>
          <p className="text-black font-medium">Air Jordan 1 Elevate Low</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 11 895.00</p>
        </div>
      </div>

      {/* Column 6 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic6} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Standard Issue</p>
          <p className="text-[#757575]">Womens Basketball Jersey</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 2 895.00</p>
        </div>
      </div>

      {/* Column 7 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic7} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Promo Exclusion</p>
          <p className="text-black font-medium">Nike Dunk Low Retro SE</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 9 695.00</p>
        </div>
      </div>

      {/* Column 8 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic8} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Sustainable Materials</p>
          <p className="text-black font-medium">Nike Dri-FIT UV Hyverse</p>
          <p className="text-[#757575]">Mens Short-Sleeve Graphic Fitness Top</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 2 495.00</p>
        </div>
      </div>

      {/* Column 9 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic9} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Court Vision Low</p>
          <p className="text-[#757575]">Mens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 5 695.00</p>
        </div>
      </div>

      {/* Column 10 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic10} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Dri-FIT Ready</p>
          <p className="text-[#757575]">Mens Short-Sleeve Fitness Top</p>
          <p className="text-[#757575]">3 Colours</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 2 495.00</p>
        </div>
      </div>

      {/* Column 11 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic11} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike One Leak Protection Period</p>
          <p className="text-[#757575]">Womens Mid-Rise 18cm Biker Shorts</p>
          <p className="text-[#757575]">2 Colours</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 3 395.00</p>
        </div>
      </div>

      {/* Column 12 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic12} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 LV8 3</p>
          <p className="text-[#757575]">Older Kids Shoe</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 7 495.00</p>
        </div>
      </div>

      {/* Column 13 */}
      <div className="w-[348px] h-[533px] flex flex-col ml-6 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic13} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Blazer Low Platform</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 195.00</p>
        </div>
      </div>

      {/* Column 14 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic14} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Air Force 1 07</p>
          <p className="text-[#757575]">Womens Shoes</p>
          <p className="text-[#757575]">2 Colours</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 8 195.00</p>
        </div>
      </div>

      {/* Column 15 */}
      <div className="w-[348px] h-[533px] flex flex-col -ml-12 -mt-32">
        <div className="w-[290px] h-[290px]">
          {/* First div: Image */}
          <Image src={pic15} alt='image' width={290} height={290} />
        </div>
        <div className="w-[290px] h-[185px]">
          {/* Second div: Content */}
          <p className="text-[#9E3500] font-medium">Just In</p>
          <p className="text-black font-medium">Nike Pro Dri-FIT</p>
          <p className="text-[#757575]">Mens Tight-Fit Sleeveless Top</p>
          <p className="text-[#757575]">1 Colour</p>
          <p className="text-black mt-2 text-[15px] font-semibold">MRP: ₹ 1 495.00</p>
        </div>
      </div>

    </div>
   
  </div>
  <div className='w-[940px] h-[259px] ml-72'>
   <div className='border border-x-2 '></div>
   <h1 className='text-[19px] font-medium mt-8'>Related Categories</h1>
   <div className='w-[940px] h-[174px] flex mt-6 gap-2'>
   <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[160px] h-[34px]">
         Best Selling Products
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[165px] h-[34px]">
         Best Shoes
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[151px] h-[34px]">
         New Basketball Shoes
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[139px] h-[34px]">
         New Mens Shoes
        </button>
       
       
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[153px] h-[34px]">
         New Running Shoes
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[140px] h-[34px]">
         Best Mens Shoes
         
        </button>
        </div>
        <div className='w-[940px] h-[174px] flex -mt-32 gap-2'>
        <button className=" bg-[#f5f5f5] rounded-full border border-zinc-400 text-black text-[12px] font-medium w-[145px] h-[34px]">
         Best Jordan Shoes
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[159px] h-[34px]">
         Best Womens Shoes
        </button>
        <button className=" bg-[#f5f5f5] rounded-full text-black border border-zinc-400 text-[12px] font-medium w-[155px] h-[34px]">
         Best Training & Gym
        </button>
   </div>

  </div>
  
</div>
  )}