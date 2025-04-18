import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreateLectureMutation } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const CreateLecture = () => {
    const [lectureTitle, setLectureTitle] = useState("")
    const params = useParams();
    const courseId = params.courseId;
    const isLoading = false;
    const navigate = useNavigate();

    const [createLecture] = useCreateLectureMutation() 

    const createLectureHandler = async () => {
        await createLecture({lectureTitle, courseId});
    }

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <div className="font-bold text-xl">
          <h1>
            Lets add Lectures, add some basic course details for your new course.
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            qui?
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <Label className="mb-2">Title</Label>
          <Input
            type="text"
            value={lectureTitle}
            onChange={(e)=>setLectureTitle(e.target.value)}
            placeholder="Your Lecture Title"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={()=>navigate(`/admin/course/${courseId}`)}>Back to course</Button>
          <Button disabled={isLoading} onClick={createLectureHandler}>
            {
              isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  Please Wait
                </>
              ) : "Create Lecture"
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
