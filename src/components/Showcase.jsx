import React from 'react'

const Showcase = () => {
  return (
    <div className='flex justify-center flex-col border-[1px] w-full h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-t from-[#111037] to-[#8C1D52]'>
        <div className='flex justify-center md:justify-between items-center h-[80%]'>
          <div className='hidden md:flex'>
            L Arrow
          </div>

          <div className='flex justify-between w-[75%] items-center gap-3'>
              <div className='hidden md:flex border border-black rounded-2xl h-[222px] w-[222px] lg:h-[328px] lg:w-[328px] items-center drop-shadow-2xl justify-center'>
                1
              </div>

              <div className='border border-black rounded-2xl h-[282px] w-[282px] lg:h-[410px] lg:w-[410px] items-center justify-center drop-shadow-2xl'>
                2
              </div>

              <div className='hidden md:flex border border-black rounded-2xl h-[222px] w-[222px] lg:h-[328px] lg:w-[328px] items-center justify-center drop-shadow-2xl'>
                3
              </div>
          </div>
  
          <div className='hidden md:flex'>
            R Arrow
          </div>  
        </div>
        
        <div className='flex justify-center'>...</div>
    </div>
  )
}

export default Showcase