'use client'
import React,{ useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/MinterContext';
import { ethers } from "../../../../node_modules/ethers/lib/index";
import Image from '../../../../node_modules/next/image'
import Menu from "../../../components/Menu"
import ReferalPage from "../../../components/ReferalPage"
import { ReactiveContext } from '@/context/ReactiveContext';

const Page = ({ params }) => {
  const {user , connectWallet, userData ,mintContractData, getUserData, getUserReferalData, mint} = useContext(AppContext);
  const [referalAddress , setReferalAddress] = useState("0x0000000000000000000000000000000000000000");
  const {userDetails , toggleReferalMenu} = useContext(ReactiveContext)

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
    <div className ={`flex items-center gap-[1rem] justify-center flex-col text-white h-screen bg-gradient-to-t from-[#111037] to-[#8C1D52]`}>
     
        <div className='w-[90%] absolute z-0 md:w-[70%] lg:w-[40%] flex bg-black h-[90%] mt-[15px] ml-[15px] drop-shadow-lg rounded-xl'/>
        <div className={`w-[90%] md:w-[70%] ${ userDetails.mobileMenuActive ? "blur-md" :""} lg:w-[40%] z-10 flex flex-col bg-orange-500 h-[90%] drop-shadow-2xl rounded-xl border-[2px] justify-start items-center`}>
          <div className='pt-[2rem] flex-col w-[90%] h-[50%] flex items-center gap-[1rem] justify-center'>
            <div className='w-full lg:w-[60%] md:w-[65%] h-[90%] flex items-center justify-center drop-shadow-lg'>
              <Image src='/images/dp.jpg' height={1000} width={1000} alt={"BOOBS OF BITCOIN"} className='border rounded-2xl'/>
            </div>
          </div>
          
          <div className='md:w-[75%] lg:w-[65%] w-[90%] h-[50%] gap-[1rem] flex justify-center flex-col items-center'>       
            <div className='h-[60%] md:text-lg font-semibold w-[90%] md:w-full pb-[1.5rem] md:pb-0 flex flex-col md:grid md:grid-cols-2 gap-[0.3rem] justify-center items-center'>
                <div className=' md:grid-rows-5 flex flex-col gap-[0.3rem] w-full'>
                  <p>Ongoing Round: 1</p>
                  <p>Next Cost: 0.00015 BTC</p>
                  <p>Mints Per Round: 1000</p>
                  <p>Raffle Pool : 0.022 BTC</p>
                  <p>Balances: 0.001 BTC</p>
                </div>
                <div className='md:grid-rows-5 flex flex-col gap-[0.3rem] w-full'>
                  <p>Current Cost : Free</p>
                  <p>Round Mints : 0</p>
                  <p>Round Mints Left: 999</p>
                  <p>User Mints Left : 29</p>
                  <p>Referer Address : 0.03...0987</p>
                </div>
            </div>

            <div className='h-[30%] flex flex-col justify-center items-center gap-[1rem] w-full'>
                <button onClick={()=> handlerMint()} className='border w-[12rem] md:w-[15rem] h-[3.2rem] rounded-2xl bg-red-600 font-bold text-[1.2rem]'>
                  {user.wallet? "MINT" : "Connect Wallet"}
                </button>
                <button 
                onClick={()=>toggleReferalMenu()}
                className='border w-[12rem] md:w-[15rem] h-[3.2rem] rounded-2xl bg-red-600 font-bold text-[1.2rem]'>View Referal Details</button>
            </div>
          </div>
        </div>
      <Menu className="w-full h-full flex"/>
      <ReferalPage className="w-full h-full flex"/>
     </div>
  )
}

export default Page