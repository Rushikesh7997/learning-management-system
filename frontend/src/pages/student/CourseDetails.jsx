import { BadgeInfo } from 'lucide-react'
import React from 'react'

export const CourseDetails = () => {
  return (
    <div className='mt-20 space-y-5'>
      <div className='bg-[#2D2F31] text-white'>
        <div className='max-w-7xl mx-auto py-8 px-4 md:px-8 flex flex-col gap-2'>
          <h1 className='font-bold text-2xl md:text-3xl '>Course Title</h1>
          <p className='text-base md:text-lg'>Course sub-title</p>
          <p>Created By{" "} <span className='text-[#C0C4FC] underline italic'>Instructor Name</span></p>
          <div className='flex items-center gap-2 text-sm'>
              <BadgeInfo size={16}/>
              <p>Last Update :- 23-05-2025</p>
          </div>
          <p>Student Enrolled :- 10</p>
        </div>
      </div>
      <div className='max-w-7xl mx-auto my-5 px-4 md:px-8 flex flex-col lg:flex-row justify-between gap-10 '>
        <div className='w-full lg:w-1/2 space-'>
            
        </div>
      </div>
    </div>
  )
}
