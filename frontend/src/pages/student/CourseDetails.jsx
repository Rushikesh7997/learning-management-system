import { BuyCourseButton } from '@/components/BuyCourseButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { BadgeInfo, Lock, PlayCircle } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'

export const CourseDetails = () => {
  
  const params = useParams()
  const courseId = params.courseId;
  const purchasedCourse = false;

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
        <div className='w-full lg:w-1/2 space-y-5'>
            <h1 className='font-bold text-xl md:text-2xl'>Description</h1>
            <p className='text-justify text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita doloremque repellat harum nesciunt quaerat autem minima iure rem laudantium natus! Tempore distinctio assumenda doloribus voluptatibus ea, illo eligendi qui excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ut dolorem doloremque vero harum doloribus molestiae nesciunt quaerat maxime atque adipisci perferendis fugit quae totam, voluptatum, magnam mollitia, praesentium vel.</p>
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>4 Lectures</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 ">
                {
                  [1, 2, 3].map((_, idx)=>(
                    <div key={idx} className='flex items-center gap-3 text-sm'>
                      <span>
                        {
                          true ? (<PlayCircle size={16}/>) : <Lock size={16}/>
                        }
                      </span>
                      <p>Lecture Title</p>
                    </div>
                  ))
                }
              </CardContent>
            </Card>
        </div>
        <div className='w-full lg:w-1/3'>
            <Card>
              <CardContent className="p-4 flex flex-col ">
                <div className='w-full aspect-video mb-4'>
                  fetch video
                </div>
                <h1>Lecture Title</h1>
                <Separator className="my-2"/>
                <h1 className='text-xl font-semibold md:text-lg'>Course Price</h1>
              </CardContent>
              <CardFooter className="flex justify-center p-4">
                {
                  purchasedCourse ? (
                    <Button className="w-full">Continue Course</Button>
                  ) : (
                    <BuyCourseButton courseId={courseId}/>
                  )
                }
              </CardFooter>
            </Card>       
        </div>
      </div>
    </div>
  )
}
