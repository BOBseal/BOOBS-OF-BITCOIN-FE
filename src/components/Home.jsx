import React from 'react'
import Image from '../../node_modules/next/image'

const HomePage = () => {
  return (
    <div className='flex w-screen h-[800px] bg-gradient-to-t justify-center items-center from-[#F6960C] border-[1px] to-[#DD4423]'>
        <div className='w-[100%] md:w-[95%] lg:w-[75%] h-[80%] flex justify-center items-center'> 
            <div className='flex flex-col md:flex-row justify-between w-full h-full items-center'>
                <div className=' w-[90%] md:w-[50%] h-full flex justify-start items-center'>
                    
                    <div className='h-full w-full gap-[2rem] flex flex-col md:mt-[250px] '>
                        
                        <div className='md:hidden w-full md:w-[50%] h-full flex justify-center items-center'>
                            ImageContent
                        </div>

                        <div className='gap-[4rem] flex h-full w-full flex-col'>
                            <div className='h-[27%] w-full flex justify-start font-bold items-center text-[2.8rem] md:text-[4rem] drop-shadow-lg'>
                                BOOBS OF BITCOIN                        
                            </div>

                            <div className='h-[73%] flex w-full md:w-[90%] drop-shadow-md'>
                                is a PFP Collection of 10k Generative BOOBs.
                                It is the Exclusive PFP Edition of BOB Market that acts as a way Governance of the platform and 
                                a Badge for Hardcore BOOBS Lovers and BOB Market Supporters to keep. 
                                It will employ a Hybrid Governance Structure where BOB Collection Holders and
                                Future Token holders vote to make decisions in the Ecosystem.
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' w-[50%] h-full hidden md:flex justify-center items-center md:mt-[150px] lg:mt-[0]'>
                    <div className='md:h-[463px] flex md:w-[342px] gap-[2rem] lg:w-[492px]'>
                        <div className='flex rounded-lg z-20'>
                            <div className='w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px] mt-[10px] ml-[8px] bg-black absolute -z-10'/>
                           <Image width={1000} height={1000} src={`/images/1.png`} className={`z-10 w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px]`}/>
                        </div>
                        {/*<div className='md:w-[50%] md:gap-[1rem] justify-center items-center md:h-full flex flex-col'>
                            <Image width={130} height={80} src="/images/6.png" className='mr-[180px] -mt-[100px]'/>
                            <Image width={130} height={80} src="/images/2.png" className='ml-[80px]'/>
                        </div>
                        <div className='md:h-full flex md:gap-[1rem] flex-col md:w-[50%] justify-center items-center'>
                            <Image width={130} height={80} src="/images/4.png" className='mr-[80px] mt-[100px]'/>
                            <Image width={130} height={80} src="/images/1.png" className='ml-[80px]'/>
                            <Image width={130} height={80} src="/images/7.png" className='mr-[80px]'/>
                        </div>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage