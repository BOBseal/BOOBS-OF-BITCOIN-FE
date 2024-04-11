'use client'
import React,{ useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/MinterContext';
import { ethers } from "../../../../node_modules/ethers/lib/index";
import Image from '../../../../node_modules/next/image'

const Page = ({ params }) => {
  const {user , connectWallet, userData ,mintContractData, getUserData, getUserReferalData, mint} = useContext(AppContext);
  const [referalAddress , setReferalAddress] = useState("0x0000000000000000000000000000000000000000");
  
  useEffect(() => {
    if(params.referalId.length > 10){
      setReferalAddress(params.referalId);
    }
  }, [params.referalId])

  const handlerMint =async()=>{
    try{
      if(!user.wallet){
        connectWallet();
      }else{
        if(user.wallet){
          mint(referalAddress);
        }
      }
    }catch(error){
      console.log(error)
    }
  }
  
  return (
    <div className ="flex items-center gap-[1rem] justify-center flex-col text-white h-screen bg-gradient-to-t from-[#111037] to-[#8C1D52]">
      <div className='w-[90%] absolute z-0 md:w-[70%] lg:w-[40%] flex bg-black h-[70%] mt-[15px] ml-[15px] drop-shadow-lg rounded-xl'/>
      <div className='w-[90%] md:w-[70%] lg:w-[40%] z-10 flex flex-col bg-orange-500 h-[70%] drop-shadow-2xl rounded-xl border-[2px] justify-start items-center'>
        <div className='pt-[2rem] flex-col w-[90%] h-[65%] flex items-center gap-[1rem] justify-center'>
          <div className='w-full lg:w-[50%] md:w-[65%] h-[90%] flex items-center justify-center drop-shadow-lg'>
            <Image src='/images/dp.jpg' height={1000} width={1000} alt={"BOOBS OF BITCOIN"} className='object-cover w-full h-full border rounded-2xl'/>
          </div>
        </div>
        
        <div className='md:w-[60%] lg:w-[45%] w-[90%] h-[35%] gap-[2px]'>       
          <div className='h-[50%] text-sm md:text-base font-semibold w-full grid grid-cols-2 justify-center items-center'>
              <div className='flex h-full justify-center flex-col gap-[0.5rem] items-start'>
                <p>Round: 1</p>
                <p>Mints/Round: 1000</p>
                <p>Your Mints: 1</p>
              </div>
              <div className='flex h-full justify-center flex-col gap-[0.5rem] items-start'>
                <p>Cost: 0.00069 BTC</p>
                <p>Mints Left: 999</p>
                <p>Your Mints Left : 29</p>
              </div>
          </div>

          <div className='h-[50%] flex justify-center items-start mt-[2rem] w-full'>
              <button onClick={()=> handlerMint()} className='border w-[12rem] md:w-[15rem] h-[3.2rem] rounded-2xl bg-red-600 font-bold text-[1.2rem]'>
                {user.wallet? "MINT" : "Connect Wallet"}
              </button>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Page