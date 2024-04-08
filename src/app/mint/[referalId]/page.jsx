'use client'
import React,{ useContext, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import { AppContext } from '@/context/MinterContext';
import { ethers } from "../../../../node_modules/ethers/lib/index";

const index = ({ params }) => {
  const {user , connectWallet, userData ,mintContractData, getUserData, getUserReferalData, mint} = useContext(AppContext);
  const [referalAddress , setReferalAddress] = useState("0x0000000000000000000000000000000000000000");
  
  useEffect(() => {
    if(params.referalId.length > 10){
      setReferalAddress(params.referalId);
    }
  }, [params.referalId])
  
  return (
    <div className ="flex flex-col">MINT PRICE = {mintContractData.mintPrice} BTC / ETH 
        <button onClick={()=> mint(referalAddress)}>MINT</button>
     </div>
  )
}

export default index