import React from 'react'

const HomePage = () => {
  return (
    <div className='flex w-screen h-[800px] bg-gradient-to-t justify-center items-center from-[#F6960C] border-[1px] to-[#DD4423]'>
        <div className='w-[95%] h-[80%] flex justify-center items-center'> 
            <div className='flex justify-between w-full h-full items-center'>
                <div className=' w-[50%] h-full flex justify-start items-center'>
                    <div className='h-full w-full flex flex-col gap-[1rem] mt-[30px]'>
                        <div className='h-[27%] w-full flex justify-start items-center text-[4rem]'>
                            BOOBS OF BITCOIN                        
                        </div>

                        <div className='h-[73%]'>
                            is a PFP Collection of 10k Generative BOOBs.
                            It is the Exclusive PFP Edition of BOB Market that acts as a way Governance of the platform and 
                            a Badge for Hardcore BOOBS Lovers and BOB Market Supporters to keep. It will employ a Hybrid Governance Structure where BOB Collection Holders and Future Token holders vote to make decisions in the Ecosystem.
                        </div>
                    </div>
                </div>

                <div className=' w-[50%] h-full flex justify-center items-center'>
                    ImageContent
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage