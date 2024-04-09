import React from 'react'
import Image from '../../node_modules/next/image'
import {textData} from "../constants/BOOBconfig.jsx"

const HomePage = () => {
  return (
    <div className='flex w-screen h-full pt-[4rem] pb-[4rem] md:pb-0 md:pt-0 md:h-[800px] bg-gradient-to-t justify-center items-center from-[#F6960C] border-[1px] to-[#DD4423]'>
        <div className='w-[95%] md:w-[95%] lg:w-[75%] h-[80%] flex justify-center items-center'> 
            <div className='flex flex-col md:flex-row justify-between w-full h-full items-center'>
                <div className=' w-[90%] md:w-[50%] h-full flex justify-start items-center'>
                    
                    <div className='h-full w-full gap-[2rem] flex flex-col md:mt-[250px] '>
                        
                        <div className='md:hidden w-full md:w-[50%] h-full flex justify-center items-center'>
                            <div className='md:h-[463px] flex md:w-[342px] gap-[2rem] lg:w-[492px]'>
                                <div className='flex rounded-lg z-20'>
                                    <div className='w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px] mt-[10px] ml-[8px] bg-black absolute -z-10'/>
                                    <Image width={1000} height={1000} src={`/images/dp.jpg`} className={`z-10 w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px]`}/>
                                </div>
                            </div>
                        </div>

                        <div className='gap-[4rem] flex h-full w-[95%] ml-[5px] md:ml-0 flex-col'>
                            <div className='h-[27%] w-full flex justify-center md:justify-start font-bold items-center text-[2.8rem] md:text-[4rem] drop-shadow-lg'>
                                {textData.HomeTitle}                        
                            </div>

                            <div className='h-[73%] flex w-full md:w-[90%] drop-shadow-md'>
                                {textData.HomeDescription}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' w-[50%] h-full hidden md:flex justify-center items-center md:mt-[150px] lg:mt-[0]'>
                    <div className='md:h-[463px] flex md:w-[342px] gap-[2rem] lg:w-[492px]'>
                        <div className='flex rounded-lg z-20'>
                            <div className='w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px] mt-[10px] ml-[8px] bg-black absolute -z-10'/>
                            <Image width={1000} height={1000} src={`/images/dp.jpg`} className={`z-10 w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px]`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage