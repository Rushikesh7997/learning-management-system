import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

export const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
        <div className='relative'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oEbV16UhwRkmdZAT-zxkniTmDbusn8Bt-Q&s" alt="Course" className='w-full h-36 object-cover rounded-t-lg'  /> 
        </div>
        <CardContent>
            
        </CardContent>
    </Card>
  )
}
