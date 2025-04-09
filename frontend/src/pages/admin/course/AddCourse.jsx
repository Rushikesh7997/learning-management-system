import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useCreateCourseMutation } from "@/features/api/courseApi";
import { toast } from "sonner";

export const AddCourse = () => {

  const [courseTitle, setCourseTitle] = useState("");
  const [category, setCategory] = useState("")

  const [createCourse, {data, isLoading, error, isSuccess}] = useCreateCourseMutation(); 

  const navigate = useNavigate();

  const getSelectedCategory = (value) =>{
    setCategory(value)
  }

  const createCourseHandler = async () =>{
    await createCourse({courseTitle, category})
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success(data?.message || "Course Created")
    }
  },[isSuccess, error])

  return (
    <div className="flex-1 mx-10">
      <div className="mb-4">
        <div className="font-bold text-xl">
          <h1>
            Lets add course, add some basic course details for your new course.
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
            value={courseTitle}
            onChange={(e)=>setCourseTitle(e.target.value)}
            placeholder="Your Course Title"
          />
        </div>
        <div>
          <Label className="mb-2">Category</Label>
          <Select onValueChange={getSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="Full Stack Development">Full Stack Development</SelectItem>
                <SelectItem value="Frontend Development">Frontend Development</SelectItem>
                <SelectItem value="Backend Development">Backend Development</SelectItem>
                <SelectItem value="Next Js">Next Js</SelectItem>
                <SelectItem value="Javascript">Javascript</SelectItem>
                <SelectItem value="MongoDB">MongoDB</SelectItem>
                <SelectItem value="HTML/CSS">HTML/CSS</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Docker">Docker</SelectItem>
                <SelectItem value="Python">Python</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={()=>navigate("/admin/course")}>Back</Button>
          <Button disabled={isLoading} onClick={createCourseHandler}>
            {
              isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                  Please Wait
                </>
              ) : "Create"
            }
          </Button>
        </div>
      </div>
    </div>
  );
};
