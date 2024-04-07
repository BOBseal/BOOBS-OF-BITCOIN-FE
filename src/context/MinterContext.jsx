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

import { hexToNumber , hexToString, numberToHex, stringToHex } from 'viem';

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
    const [user , setUser] = useState({});
    const [userData , setUserData] = useState({});

    return(
        <>
            <AppContext.Provider value={{nftContractData, mintContractData, user , userData, addNetwork,changeNNetwork,
                connectContract,convertTime,getChainId , NFTAddress, MinterAddress}}>
                {children}
            </AppContext.Provider>
        </>
    )
}