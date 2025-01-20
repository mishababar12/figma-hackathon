import Image from 'next/image'
import React from 'react'
import pinksh from "../../../public/pinksh.png"
import { IoCartOutline } from "react-icons/io5";

export default function ProductDetail() {
  return (
    <div className='w-[1440px] h-[840px] '>
      <div className='w-[1200px] h-auto m-6 flex gap-20'>

        {/*image div*/}
        <div className='w-[653px] h-[653px] ml-10'>
          <Image src={pinksh} alt={"image"} className="w-[653px] h-[653px]" />

        </div>
        {/*content div*/}
        <div className='w-[376px] h-[653px]'>
          <h1 className='text-[48px] font-medium -mt-4'>Nike Air Force 1 </h1>
          <h1 className='text-[48px] font-medium -mt-3'>PLT.AF.ORM</h1>
          <div className='w-[374px] h-[413px]'>
            <div className='w-[374px] h-[290px] mt-4'>
              <p className='text-[15px]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this
                release an artisan finish.</p>
              <div className='w-[295px] h-[90px] mt-4'>
                <h1 className='text-[36px] font-medium '>₹ 8 695.00</h1>
              </div>
              <div className='w-[174px] h-[44px] mt-4'>
                <button className='w-[174px] h-[44px] bg-black text-white rounded-full flex items-center justify-center space-x-2'>
                  <IoCartOutline className='text-white' />
                  <span>Add To Cart</span>
                </button>
              </div>


            </div>

          </div>

        </div>

      </div>

    </div>


  )
}
