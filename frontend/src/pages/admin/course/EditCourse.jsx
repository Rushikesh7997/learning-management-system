import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import { CourseTab } from './CourseTab'

export const EditCourse = () => {
  return (
    <div>
        <div className="flex-1">
            <div className='flex items-center justify-between mb-5'>
                <h1 className='font-bold text-xl'>Add details information regarding course.</h1>
                <Link to="lecture"> 
                    <Button className="hover:text-blue-600" variant="outline">Go to Lectures Page</Button>
                </Link>
            </div>
        </div>
        <CourseTab/>
    </div>
  )
}
