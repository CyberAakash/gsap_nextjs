import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 w-full h-screen">
        <h1 className="text-2xl font-semibold font-mono">GSAP Horizontal Scroll</h1>
        <p className="text-sm font-normal font-mono">A web developed by CyberAakash</p>
        <Link href="/" className="p-2 min-w-fit min-h-fit bg-blue-400 text-white font-extrabold rounded-md text-sm">Go to Home</Link>
    </div>
  )
}

export default Hero