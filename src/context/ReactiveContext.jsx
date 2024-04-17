"use client"

import React,{useState,useEffect} from "react"

export const ReactiveContext = React.createContext();

export const ReactiveProvider = ({children})=>{

    const [userDetails , setUserDetails] = useState({
        currentPage:"0",
        referalMenuActive:false,
        rewardClaimMenuActive:false,
        mobileMenuActive:false
    })

    const toggleMobileMenu =()=>{
        try {
            if(userDetails.mobileMenuActive){
                setUserDetails({...userDetails, mobileMenuActive:false})
                return {res: true , state: false};
            }  
            if(!userDetails.mobileMenuActive){
                setUserDetails({...userDetails, mobileMenuActive:true})
                return {res: true , state: true};
            }
        } catch (error) {
            console.log(error);
        }
    }

    const toggleReferalMenu=()=>{
        try {
         if(userDetails.referalMenuActive){
            setUserDetails({...userDetails, referalMenuActive:false})
            return {res: true , state: false};
         } 
         if(!userDetails.referalMenuActive){
            setUserDetails({...userDetails, referalMenuActive:true})
            return {res: true , state: true};
         }   
        } catch (error) {
            console.log(error)
        }
    }

    const toggleClaimMenu =()=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    const setCurrentPage=(pageDetail)=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    return(<ReactiveContext.Provider
    value={{
        userDetails, toggleMobileMenu, toggleReferalMenu
    }}
    >
        {children}
    </ReactiveContext.Provider>)
}