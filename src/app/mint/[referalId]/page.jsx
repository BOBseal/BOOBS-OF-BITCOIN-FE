'use client'
import React,{ useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/MinterContext';
import { ethers } from "../../../../node_modules/ethers/lib/index";

const Page = ({ params }) => {
  const {user , connectWallet, userData ,mintContractData, getUserData, getUserReferalData, mint} = useContext(AppContext);
  const [referalAddress , setReferalAddress] = useState("0x0000000000000000000000000000000000000000");
  
  useEffect(() => {
    if(params.referalId.length > 10){
      setReferalAddress(params.referalId);
    }
  }, [params.referalId])
  
  return (
    <div className ="flex items-center gap-[1rem] justify-center flex-col text-white h-screen bg-gradient-to-t from-[#111037] to-[#8C1D52]">
      <div className='w-[90%] absolute z-0 md:w-[70%] lg:w-[40%] flex bg-black h-[70%] mt-[15px] ml-[15px] drop-shadow-lg rounded-xl'/>
      <div className='w-[90%] md:w-[70%] lg:w-[50%] z-10 flex flex-col bg-orange-500 h-[70%] drop-shadow-2xl rounded-xl border-[2px] justify-start items-center'>
        <div className='pt-[2rem] w-[90%] h-[65%] flex items-center justify-center'>
          <div className='border w-full h-[90%] flex items-center justify-center'>
            IMAGE
          </div>
        </div>
      </div>
     </div>
  )
}

export default Page