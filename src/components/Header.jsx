'use client'
import React from 'react'
import Image from '../../node_modules/next/image'

const Header = () => {
  return (
    <div className={`bg-[#201D1C] md:gap-[70px] w-full h-[117px] text-white flex justify-center items-center text-lg lg:text-xl border-b-[3px] drop-shadow-lg`}>
        {/* Desktop Nav */}
        
        <div className='items-center justify-start hidden md:flex mt-[10px] lg:-ml-[5rem] drop-shadow-xl'>
                <Image src={`/images/dp.jpg`} width={60} height={60} className={`rounded-full border`}/>
        </div>
        
        <div className='hidden  md:flex justify-between w-[80%] gap-[60px] lg:-ml-[18rem]'>
            
            <div className='flex lg:ml-[300px] justify-center gap-[20px] lg:gap-[60px] mt-[25px] drop-shadow-lg w-[70%]'>
                <p>Home</p>
                <p>About</p>
                <p>Whitepaper</p>
                <p>Tokenomics</p>
                <p>Mint</p>
                <p>Community</p>
            </div>

            <div className='flex justify-center w-[25%]'>
                
                <div className='bg-[#F6B40C] h-[50px] mt-[10px] w-[180px] drop-shadow-lg border-[1.5px] flex justify-center items-center rounded-[12px]'>
                    Connect Wallet
                </div>
                
            </div>
        </div>

        {/* Mobile Nav */}
        <div className='flex justify-between items-center w-[90%] md:hidden'>
            <div className='flex items-center'>
                <Image src={`/images/dp.jpg`} width={55} height={55} className={`rounded-full border`}/>
            </div>

            <div>
                <Image src={`/images/menu.svg`} width={55} height={55} className={`rounded-full border`}/>
            </div>
        </div>
    </div>
  )
}

export default Header