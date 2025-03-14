import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import React from 'react'

export const Profile = () => {
  return (
    <div className='max-w-xl mx-auto my-24 px-4 md:px-0 '>
        <h1 className='font-bold text-2xl text-center md:text-left'>My 
          Profile</h1>
          <div className='flex flex-col md:flex-row items-center md:items-center gap-8 my-5'>
            <div className=''>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
    </div>
  )
}
