'use client'
import React from 'react'
//import ScrollArrow from '../utils/ScrollArrow'
import { textData } from '@/constants/BOOBconfig'

const About = () => {
  return (
    <div className='flex flex-col border-[1px] w-full h-full bg-gradient-to-t pt-[2rem] pb-[2rem] from-[#F6960C] to-[#DD4423] justify-center items-center'>
       
       <div className='w-[90%] flex flex-col h-full gap-[2rem]'>
        
        <div className='w-full h-[15%] flex justify-center items-center'>
          <h1 className='flex drop-shadow-2xl underline text-[2rem]'>ABOUT US</h1>
        </div>

        <div className="flex h-[85%] w-full drop-shadow-2xl justify-center items-start text-wrap flex-wrap">
          <p className="text-wrap flex-wrap flex">{textData.AboutDesc}</p>
        </div>

          <div className='flex flex-col gap-[1rem]'>
                <h2 className='flex underline text-[1.5rem]'> Our Goals :</h2>
                <p className='flex flex-wrap text-wrap'>
                  {textData.ourGoals.brief}
                </p>
          </div>

          <div className='flex flex-col gap-[1rem]'>
                <h2 className='flex underline text-[1.5rem]'>Problems We Will Solve :</h2>
                <p className='flex flex-wrap text-wrap'>
                  1:  {textData.ourGoals.problemsSolved.p1}
                </p>
                <p className='flex flex-wrap text-wrap'>
                  2:  {textData.ourGoals.problemsSolved.p2}
                </p>
                <p className='flex flex-wrap text-wrap'>
                  3:  {textData.ourGoals.problemsSolved.p3}
                </p>
                <p className='flex flex-wrap text-wrap'>
                  4:  {textData.ourGoals.problemsSolved.p4}
                </p>
                <p className='flex flex-wrap text-wrap'>
                  5:  {textData.ourGoals.problemsSolved.p5}
                </p>
          </div>
       </div>
    </div>
  )
}

export default About