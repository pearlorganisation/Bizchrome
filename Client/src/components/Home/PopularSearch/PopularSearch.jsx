import React from 'react'
import style from './style.module.css'

const PopularSearch = () => {
  return (
    <div className='grid grid-cols-3 gap-4 container mx-auto py-6'>
      <div className='h-[22rem] rounded-md p-4'>

        <p className={` font-bold ${style.stroke} `}>Popular Searches on Biz Chrome</p>

      </div>

      {
        [`#4188ff`, `#7be382`, `#800080`, `	#ffcad9`, `	#5100ba`].map(item => {
          return <div className={`h-[22rem] card rounded-lg border-2 hover:border-[#4188ff] transition-all hover:cursor-pointer flex flex-col justify-between px-6 py-8 group`}>

            <p className={`${style.stroke2} absolute`}>WORK FROM HOME JOBS</p>
            <div className='space-y-2'>
              <p>TRENDING AT #1</p>
              <p className='text-xl font-bold'>Work From Home Jobs</p>
            </div>
            <div> <button className=' rounded-lg px-10 py-3 border active:scale-95 transition-all group-hover:bg-[#4188ff] group-hover:text-white'>View</button> </div>
          </div>
        })
      }
    </div>
  )
}

export default PopularSearch