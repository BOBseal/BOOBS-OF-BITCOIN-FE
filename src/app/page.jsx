"use client"
import Image from "next/image";
import Link from "next/link"
import HomePage from '../components/Home.jsx'
import About from '../components/About.jsx'
import Showcase from '../components/Showcase.jsx'
import React,{useContext, useState} from "react";
import { ReactiveContext } from "@/context/ReactiveContext.jsx";
import Menu from "@/components/Menu.jsx";

export default function Home() {
  const {userDetails , toggleMobileMenu} = useContext(ReactiveContext);

  return(
    <div className="w-full h-full text-white flex flex-col">
      <HomePage className={`h-full z-0 flex`}/>    
      <Menu/>
    </div>
  )
}
  