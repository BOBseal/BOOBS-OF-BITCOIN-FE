import React from 'react'

const Header = () => {
  return (
    <div className={`bg-[#201D1C] w-full h-[117px] text-white flex justify-center items-center text-lg lg:text-xl border-b-[3px] drop-shadow-lg`}>
        <div className='flex justify-between w-[80%] gap-[50px]'>
            <div className='flex lg:ml-[300px] justify-center gap-[20px] lg:gap-[60px] mt-[25px] drop-shadow w-[70%]'>
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
    </div>
  )
}

export default Header