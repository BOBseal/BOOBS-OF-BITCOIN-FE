import React from 'react'
import { useContext } from 'react'
import { ReactiveContext } from "@/context/ReactiveContext.jsx";

const ReferalPage = () => {
    const {userDetails , toggleReferalMenu} = useContext(ReactiveContext)
return (
    <div className=''>
        {userDetails.referalMenuActive? <div className="border h-[30rem] md:h-screen absolute z-50 top-[34rem] md:top-[117px] right-0 w-full md:w-[30rem] lg:w-[45rem] bg-black">
          <div className="flex items-center flex-col md:flex-row justify-between p-[3rem] h-full w-full">
              <button className='md:flex' onClick={()=> toggleReferalMenu()}>CLose</button>

              <p>Referals</p>
              
          </div>
      </div> :""}
    </div>
  )
}

export default ReferalPage