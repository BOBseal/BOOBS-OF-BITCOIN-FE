import React from 'react'
import Image from '../../node_modules/next/image'
import Link from '../../node_modules/next/link'
import {textData} from "../constants/BOOBconfig.jsx"

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen h-full gap-[2rem] pt-[4rem] pb-[4rem]  md:h-full bg-gradient-to-t justify-start items-center from-[#F6960C] border-[1px] to-[#DD4423]'>
        
        <div className='w-[95%] md:w-[95%] lg:w-[75%] h-[80%] flex justify-center items-center'> 
            <div className='flex flex-col md:flex-row justify-between w-full h-full items-center'>
                <div className=' w-[90%] md:w-[50%] h-full flex justify-start items-center'>
                    
                    <div className='h-full w-full gap-[2rem] flex flex-col '>
                        
                        <div className='md:hidden w-full md:w-[50%] h-full flex justify-center items-center'>
                            <div className='md:h-[463px] flex md:w-[342px] gap-[2rem] lg:w-[492px]'>
                                <div className='flex rounded-lg z-20'>
                                    <div className='w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px] mt-[10px] ml-[8px] bg-black absolute -z-10'/>
                                    <Image width={1000} height={1000} src={`/images/dp.jpg`} className={`z-10 w-[250px] h-[250px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px]`}/>
                                </div>
                            </div>
                        </div>

                        <div className='gap-[2rem] flex h-full w-[95%] ml-[5px] md:ml-0 flex-col'>
                            <div className='h-[27%] w-full flex justify-center md:justify-start font-bold items-center text-[2.8rem] md:text-[4rem] drop-shadow-lg'>
                                {textData.HomeTitle}                        
                            </div>

                            <div className='h-[73%] flex w-full md:w-[90%] drop-shadow-2xl'>
                                {textData.HomeDescription}
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' w-[50%] h-full hidden md:flex justify-center items-center lg:mt-[0]'>
                    <div className='md:h-[463px] flex md:w-[342px] gap-[2rem] lg:w-[492px]'>
                        <div className='flex rounded-lg z-20'>
                            <div className='w-[200px] h-[200px] md:h-[300px] md:w-[300px] lg:w-[450px] lg:h-[450px] mt-[110px] ml-[8px] bg-black absolute -z-10'/>
                            <Image width={1000} height={1000} src={`/images/dp.jpg`} className={`z-10 w-[200px] h-[200px] md:h-[300px] md:mt-[100px] md:w-[300px] lg:w-[450px] lg:h-[450px]`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='md:w-[95%] flex-col gap-[2rem] lg:w-[75%] lg:pb-[3rem] pt-[2rem] md:pt-0 h-[17rem] w-[80%] drop-shadow-lg flex items-center md:items-start justify-start'>
            <h5 className='font-semibold text-[1.5rem] md:text-[2.5rem]'>GENESIS MINT IS LIVE !!!</h5>
            <h5 className='font-semibold w-[14rem]' >CURRENT MINT PRICE : 0 BTC</h5>
            <h5 className='font-semibold w-[14rem]' >CURRENT MINT ROUND : 1st </h5>
            <Link href={"./mint/0"}>
            <button className='border w-[12rem] md:w-[15rem] h-[4rem] rounded-2xl bg-red-600'>GO TO MINT PAGE</button>
            </Link>
        </div>

        <div className=' w-[80%] md:w-[95%] lg:w-[75%] h-full'>
            <div className='flex drop-shadow-2xl flex-col gap-[1rem]'>
                <h3 className='font-semibold text-[1.1rem] drop-shadow-2xl'>BENIFITS OVERVIEW :</h3>
                <div className='flex flex-col gap-[0.5rem] drop-shadow-2xl'>
                    <p>1: Minters Enjoy 6.9% Royalties from sales of their minted IDs.</p>
                    <p>2: Get Guaranteed Airdrop Allocation for Ecosystem Token.</p>
                    <p>3: Get Entry to Minting Raffle and Have a chance to win BTC and multiply the NFTs Allocation by a factor of 3x.</p>
                    <p>4: Earn 30% of Ecosystem Revenue from Lottery and Social-Fi Dapp from Staking.</p>
                    <p>5: Priority Access to New Features and Events for Holders.</p>
                    <p>6: Holders Get upto 30 Private Channel Mints on the Platform.</p>
                    <p>7: Exclusive Role of Social-Fi Dapp, Pro Features and Discounts on Features for Holders</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage