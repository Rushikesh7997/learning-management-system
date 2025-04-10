import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'

export const EditCourse = () => {
  return (
    <div>
        <div className="flex-1">
            <div className='flex items-center justify-between mb-5'>
                <h1 className='font-bold text-xl'>Add details information regarding course.</h1>
                <Link>
                    <Button>Go to Lectures Page</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}
