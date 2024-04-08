"use client"

import React,{useState,useEffect} from "react"
import {
    addNetwork,
    changeNNetwork,
    connectContract,
    convertTime,
    connectMetamask,
    getChainId
} from "../utils/helpers.jsx"

import { sepolia } from "../utils/networkConfigs.jsx";
import { hexToNumber , hexToString, numberToHex, stringToHex } from 'viem';
import ethers from "ethers"
import {
    NFTAddress,
    NFTAbi,
    MinterAbi,
    MinterAddress
} from "../constants/constants.jsx"


export const AppContext = React.createContext();

export const AppProvider = ({children})=>{

    const [nftContractData, setNftContractData] = useState({});
    const [mintContractData, setMintContractData] = useState({});    
    const [user , setUser] = useState({
        wallet: '',
        array:[
            
        ]
    });
    const [userData , setUserData] = useState({});

    const connectWallet =async()=>{
        try {
            if(window.ethereum){
                const {wallet , array} = await connectMetamask();
                
                const chainId = getChainId();
                if(chainId != sepolia[0].chainId){
                    changeNNetwork(sepolia[0].chainId);
                }
                setUser({wallet: wallet , array: array});
                return wallet;
            }
        } catch (error) {
            
        }
    }
    const getMintData=async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    const contract = await connectContract(NFTAddress , NFTAbi, user.wallet);
                    const price = await contract.getCurrentPrice();
                    const ineth = ethers.utils.formatEther(price);
                    setMintContractData({...mintContractData, mintPrice :ineth})
                    return ineth;                    
                }
            } else return null       
        } catch (error) {
            console.log(error)
        }
    }

    const getCurrentRoundData= async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    const contract = await connectContract(NFTAddress , NFTAbi, user.wallet);
                    const round = await contract.getCurrentRound();
                    const inNum = hexToNumber(round);
                    setMintContractData({...mintContractData, currentRound: inNum})
                    return inNum;                    
                }
            } else return null
        } catch (error) {
            console.log(error)
        }
    }

    const getUserData = async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    let userMints =[];
                    const contract = await connectContract(NFTAddress , NFTAbi, user.wallet);
                    const data = await contract.getUserData(user.wallet);
                    const totalReferals = hexToNumber(data[0])
                    const mintCount = hexToNumber(data[1])
                    const mints = data[2];
                    if(mints.length>0){
                        for(let i =0 ; i < mints.length; i++){
                            currentMint = mints[i];
                            let MINTData = {
                                slNo: i,
                                tokenId: hexToNumber(currentMint[0]),
                                roundMinted: hexToNumber(currentMint[1]),
                                price : ethers.utils.formatEther(currentMint[2])
                            }
                            userMints.push(MINTData);
                        }
                    }
                    setUserData({...userData, totalReferals: totalReferals, totalMints: mintCount, userMints: userMints});                    
                }
                
            } else return null
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <AppContext.Provider value={{nftContractData, mintContractData, user , userData, addNetwork,changeNNetwork,
                connectContract,convertTime,getChainId , NFTAddress, MinterAddress}}>
                {children}
            </AppContext.Provider>
        </>
    )
}