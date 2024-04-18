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
  const {user , connectWallet, userData ,mintContractData, getUserData, getUserReferalData, mint, mintStarted, getMintData, getCurrentRoundData} = useContext(AppContext);
  const [referalAddress , setReferalAddress] = useState("0x0000000000000000000000000000000000000000");
  const {userDetails , toggleReferalMenu} = useContext(ReactiveContext)

  useEffect(() => {
    if(params.referalId.length > 10){
      setReferalAddress(params.referalId);
    }
    if(!user.wallet){
      connectWallet();
    } 
    if(user.wallet){
      fetchHandler();
    }
  }, [params.referalId, user.wallet, mintContractData.currentRound, userData.totalMints])


  const fetchHandler = async() =>{
    try {
      if(!userData.totalMints){
        const c =await getUserData();
        console.log(c);
       };
       if(!mintContractData.mintPrice){
        await mintStarted();
        await getMintData();
      }
      if(!mintContractData.currentRound){
        await getCurrentRoundData();
      }
    } catch (error) {
      console.log(error)
    }
  }
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
        <div className={`w-[90%] md:w-[70%] ${ userDetails.mobileMenuActive || userDetails.referalMenuActive? "blur-md" :""} lg:w-[40%] z-10 flex flex-col bg-orange-500 h-[90%] drop-shadow-2xl rounded-xl border-[2px] gap-2 justify-start items-center`}>
          <div className='pt-[2rem] flex-col w-[90%] h-[50%] flex items-center gap-[1rem] justify-center'>
            <div className='w-full lg:w-[60%] md:w-[65%] h-[90%] flex items-center justify-center drop-shadow-lg'>
              <Image src='/images/dp.jpg' height={1000} width={1000} alt={"BOOBS OF BITCOIN"} className='border rounded-2xl'/>
            </div>
          </div>
          
          <div className='md:w-[75%] lg:w-[65%] w-[90%] h-[50%] gap-[1rem] flex justify-center flex-col items-center'>       
            <div className='h-[60%] md:text-lg font-semibold w-[90%] md:w-full pb-[1.5rem] md:pb-0 flex flex-col md:grid md:grid-cols-2 gap-[0.3rem] justify-center items-center'>
                <div className=' md:grid-rows-5 flex flex-col gap-[0.3rem] w-full'>
                  <p>Current Round: {mintContractData.currentRound}</p>
                  <p>Next Cost: {mintContractData.nextPrice ? <>{
                    mintContractData.nextPrice
                  } BTC</>:"Connect Wallet"}</p>
                  <p>Mints Per Round: 1000</p>
                </div>
                <div className='md:grid-rows-5 flex flex-col gap-[0.3rem] w-full'>
                  <p>Current Cost : {mintContractData.mintPrice? <>{
                    mintContractData.mintPrice != 0 ? <>{mintContractData.mintPrice} BTC</> :"FREE"
                  }</>:<>ConnectWallet</>}</p>
                  <p>Current Round Mints : {mintContractData.currentRoundMints ? <>{mintContractData.currentRoundMints}</>:"Connect Wallet"}</p>
                  <p>User Total Mints : {userData.totalMints ?<>{userData.totalMints}</>:"0 Mints"}</p>
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