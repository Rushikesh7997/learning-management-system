import { AvatarImage, Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-react'
import React from 'react'
import { Course } from './Course'
import { useLoadUserQuery } from '@/features/api/authApi'

export const Profile = () => {

  const {data, isLoading} = useLoadUserQuery();
  
  
  const enrolledCourses = [1];

  if(isLoading) return <h1>Profile Loading...</h1>

  console.log(data);

  return (
    <div className='max-w-xl mx-auto my-24 px-4 md:px-0 '>
        <h1 className='font-bold text-2xl text-center md:text-left'>My 
          Profile</h1>
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8 my-5'>
            <div className='flex flex-col items-center'>
              <Avatar className="h-24 w-24 md:h-32 md:w-32 mb-4">
                <AvatarImage src="https://github.com/shadcn.png" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                  Name: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>Username</span>
                </h1>
              </div>
              <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                  Email: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>username@gmail.com</span>
                </h1>
              </div>
              <div className='mb-2'>
                <h1 className='font-semibold text-gray-900 dark:text-gray-100'>
                  Role: <span className='font-normal text-gray-700 dark:text-gray-300 ml-2'>Instructor</span>
                </h1>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size='sm' className='mt-2'>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      Edit Profile
                    </DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click on Save when you are done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className='grid gap-4 py-4'>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label>Name</Label>
                        <Input type="text" placeholder="Name" className="col-span-3"/>
                      </div>
                      <div className='grid grid-cols-4 items-center gap-4'>
                        <Label>Profile Image</Label>
                        <Input type="file" 
                        accept="image/*"
                        className="col-span-3"/>
                      </div>
                  </div>
                <DialogFooter>
                  <Button disabled={isLoading}>
                    {
                      isLoading ? (
                        <>
                          <Loader2 className='mr-2 h-4 w-4 animate-spin '/> Please wait
                        </>
                      ) : "Save Changes"
                    }
                  </Button>
                </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div>
            <h1 className='font-medium text-lg'>Courses You're enrolled In</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 my-5'>
                  {
                    enrolledCourses.length === 0 ? <h1>You Haven't Enrolled Yet.</h1> : 
                        (enrolledCourses.map((course, index)=><Course key={index}/>
                    ))
                  }
            </div>
          </div>
    </div>
  )
}
