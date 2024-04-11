import Image from "next/image";
import Link from "next/link"
import HomePage from '../components/Home.jsx'
import About from '../components/About.jsx'
import Showcase from '../components/Showcase.jsx'

export default function Home() {
  return(
    <div className="w-full h-full text-white">
      <HomePage className="h-full"/>
      
    </div>
  )
}
  