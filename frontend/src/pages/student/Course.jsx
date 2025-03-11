import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"
// import { Avatar, AvatarFallback } from '@radix-ui/react-avatar'
import React from 'react'

export const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 pt-0 pb-3">
        <div className='relative'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5oEbV16UhwRkmdZAT-zxkniTmDbusn8Bt-Q&s" alt="Course" className='w-full h-36 object-cover rounded-t-lg'  /> 
        </div>
        <CardContent className="px-5 py-3 space-y-2">
            <h1 className='hover:underline font-bold text-lg truncate'>Nextjs Complete Course for Beginner</h1>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className='font-medium text-sm'>Instructor Name</h1>
                </div>
                <Badge className="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">Beginner</Badge>
            </div>
            <div>
                <span className='font-bold text-lg'>₹ 499</span>
            </div>
        </CardContent>
    </Card>
  )
}
