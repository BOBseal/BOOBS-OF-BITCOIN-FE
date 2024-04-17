"use client"
import React from 'react'
import { useContext } from 'react'
import { ReactiveContext } from "@/context/ReactiveContext.jsx";
import Link from '../../node_modules/next/link';

const Menu = () => {
    const {userDetails , toggleMobileMenu} = useContext(ReactiveContext)
return (
    <div>
        {userDetails.mobileMenuActive? <div className="border h-[40rem] absolute z-50 top-0 right-0 w-full bg-black md:hidden">
          <div className="flex flex-col items-center justify-between p-[3rem] h-full w-full">
              
              <Link href={'/'} onClick={()=>toggleMobileMenu()}><p>Home</p></Link>
              <Link href={'/mint/0'} onClick={()=>toggleMobileMenu()}><p>Mint</p></Link>

              <button onClick={()=> toggleMobileMenu()}>CLose</button>
          </div>
      </div> :""}
    </div>
  )
}

export default Menu