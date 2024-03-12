import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  return (
    <div className='p-5 shadow-sm flex justify-between'>
      <div className='flex items-center gap-8'>
        <Image  src='logo.svg' alt='logo'
        width={100} height={100}
        />
        <div className='md:flex items-center gap-6 hidden'>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Home</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Services</h2>
          <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>About Us</h2>
      </div>
      </div>
      <div>
        <Button className='hover:scale-105 hover:color-primary cursor-pointer'>Get Started</Button>
      </div>
    </div>
    
  )
}

export default Header