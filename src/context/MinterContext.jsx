"use client"

import React,{useState,useEffect} from "react"
import {
    addNetwork,
    changeNetwork,
    connectContract,
    convertTime,
    connectMetamask,
    getChainId,
    getEthBalance
} from "../utils/Helpers.jsx"

import { sepolia } from "../utils/networkConfigs.jsx";
import { hexToNumber , hexToString, numberToHex, stringToHex } from 'viem';

import { ethers } from "../../node_modules/ethers/lib/index.js";
import {
    NFTAddress,
    NFTAbi,
    MinterAbi,
    MinterAddress
} from "../constants/constants.jsx"

const errorcodes ={
    noFunds:"INSUFFICIENT_FUNDS"
}
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
    const [ ERROR , setError] = useState();

    const connectWallet =async()=>{
        try {
            if(window.ethereum){
                const {wallet , array} = await connectMetamask();
                
                const chainId = getChainId();
                if(chainId != sepolia[0].chainId){
                    changeNetwork(sepolia[0].chainId);
                }
                const xxx = getEthBalance(wallet);
                setUser({wallet: wallet , array: array, nativeBalance: xxx});
                return wallet;
            }
        } catch (error) {
            console.log(error);
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }
    const mintStarted = async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
                    const state = await contract.mintStarted();
                    setMintContractData({...mintContractData, mintStarted : state})
                    return {state:state, done:true};                    
                }
            } else return null       
        } catch (error) {
            console.log(error)
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }
    const getMintData=async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
                    const price = await contract.getCurrentPrice();
                    const nextP = await contract.getNextPrice();
                    const ineth = ethers.utils.formatEther(price);
                    const nInEth = ethers.utils.formatEther(nextP);
                    setMintContractData({...mintContractData, mintPrice :ineth, nextPrice: nInEth})
                    return ineth;                    
                }
            } else return null       
        } catch (error) {
            console.log(error)
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }

    const getCurrentRoundData= async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
                    const round = await contract.getCurrentRound();
                    const currentRoundMints = await contract.currentRoundMints();
                    const currRndMints = hexToNumber(currentRoundMints);
                    const inNum = hexToNumber(round);
                    setMintContractData({...mintContractData, currentRound: inNum, currentRoundMints: currRndMints})
                    //console.log(inNum)
                    //console.log(mintContractData)                 
                    return inNum;   
                }
            } else return null
        } catch (error) {
            console.log(error)
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }
    

    const getUserData = async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } if(user.wallet) {
                    
                    let userMints =[];
                    const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
                    const data = await contract.getUserData(user.wallet);
                    const bonus = await contract.bonusAllocations(user.wallet);
                    const whitelist = await contract.isWhitelisted(user.wallet);
                    const hasMinted = await contract.hasMinted(user.wallet);
                    const formatBonus = ethers.utils.formatEther(bonus);
                    const totalReferals = hexToNumber(data[0])
                    const mintCount = hexToNumber(data[1])
                    //console.log(mintCount)
                    const mints = data[2];
                    if(mints.length>0){
                        for(let i =0 ; i < mints.length; i++){
                            let currentMint = mints[i];
                            let MINTData = {
                                slNo: i,
                                tokenId: hexToNumber(currentMint[0]),
                                roundMinted: hexToNumber(currentMint[1]),
                                price : ethers.utils.formatEther(currentMint[2])
                            }
                            userMints.push(MINTData);
                        }
                    }
                    setUserData({...userData, totalReferals: totalReferals, totalMints: mintCount, userMints: userMints, bonusAllocations: formatBonus
                                    , isWhitelisted: whitelist, hasMinted: hasMinted
                                });
                    return({...userData, totalReferals: totalReferals, totalMints: mintCount, userMints: userMints, bonusAllocations: formatBonus
                        , isWhitelisted: whitelist, hasMinted: hasMinted
                    });                    
                }
                console.log(userData)
            } else return null
        } catch (error) {
            console.log(error)
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }

    const getUserReferalData = async()=>{
        try {
            if(window.ethereum){
                if(!user.wallet){
                    connectWallet();
                } else {
                    let userReferals= [] , promises=[];
                    if(!user.totalReferals){
                        await getUserData();
                    }
                    const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
                    const referalEarnings = await contract.getReferalEarnings(user.wallet);
                    const formatRef = ethers.utils.formatEther(referalEarnings)
                    if(user.totalReferals && user.totalReferals >0){
                        for(let i = 0 ; i < totalReferals;i++){
                            const address = await contract.getUserReferals(user.wallet);
                            promises.push(address);
                        }

                        const array = await Promise.all(promises);

                        userReferals = array;
                    }
                    setUserData({... userData, referalEarnings: formatRef , referalList: userReferals})
                }
            }
        } catch (error) {
            console.log(error);
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }

    const mint = async(referal) =>{
        try {
            const chainId = await getChainId();
            if(chainId != sepolia[0].chainId){
                await changeNetwork(sepolia[0].chainId);
            }
            const contract = await connectContract(MinterAddress , MinterAbi, user.wallet);
            const price = await contract.getCurrentPrice();
            const pp = ethers.utils.formatEther(price);
            if(Number(user.nativeBalance) < Number(pp)){
                alert("Balances Not enough for Fee")
            }
            const mint = await contract.mint(referal,{value:price});
            return mint;        
        } catch (error) {
            console.log(error);
            setError({...ERROR, error: error , code:error.code})
            return error;
        }
    }

    return(
        <>
            <AppContext.Provider value={{nftContractData, mintContractData, user , userData, addNetwork,changeNetwork,
                connectContract,convertTime,getChainId , NFTAddress, MinterAddress, getUserData, getUserReferalData, 
                connectWallet, mintStarted, getCurrentRoundData, getMintData, mint, ERROR}}>
                {children}
            </AppContext.Provider>
        </>
    )
}