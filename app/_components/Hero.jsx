import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'


function Hero() {
  return (
    <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-7'>
      <h2 className='font-bold text-[46px] text-center'>Discover Expert Home <span className='text-primary'>Services/Repair</span> <br/>Near You!</h2>
      <h2 className='text-xl text-gray-400'>Transforming Houses into Homes</h2>
      <div className='mt-4 items-center flex gap-3'>
        <Input placeholder='Search for a service'  className="rounded-full md:w-[350px]"/>
        <Button className="rounded-full  h-[44px]">
          <Search className='h-3 w-3'/>
        </Button>
      </div>
    </div>
  )
}

export default Hero