import React from 'react'
import { useContext } from 'react'
import { ReactiveContext } from "@/context/ReactiveContext.jsx";

const ReferalPage = () => {
    const {userDetails , toggleReferalMenu} = useContext(ReactiveContext)
return (
    <div>
        {userDetails.referalMenuActive? <div className="border h-[35rem] md:h-[60rem] absolute z-50 md:top-0 left-0 w-full bg-black">
          <div className="flex flex-col items-center justify-between p-[3rem] h-full w-full">
              <button className='md:hidden' onClick={()=> toggleReferalMenu()}>CLose</button>

              <p>Referals</p>
              
              <button className='hidden md:flex' onClick={()=> toggleReferalMenu()}>CLose</button>
          </div>
      </div> :""}
    </div>
  )
}

export default ReferalPage