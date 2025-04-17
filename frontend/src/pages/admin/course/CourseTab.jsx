import { RichTextEditor } from "@/components/RichTextEditor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditCourseMutation, useGetCourseByIdQuery } from "@/features/api/courseApi";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export const CourseTab = () => {
  const [input, setInput] = useState({
    courseTitle: "",
    subTitle: "",
    description: "",
    category: "",
    courseLevel: "",
    coursePrice: "",
    courseThumbnail: "",
  });

  const params = useParams();
  const courseId = params.courseId;

  const {data:courseByIdData, isLoading:courseByIdLoading} = useGetCourseByIdQuery(courseId,{refetchOnMountOrArgChange:true});
  useEffect(()=>{
    if(courseByIdData?.course){
      const course = courseByIdData?.course;
      setInput({
        courseTitle: course.courseTitle,
        subTitle: course.subTitle,
        description: course.description,
        category: course.category,
        courseLevel: course.courseLevel,
        coursePrice: course.coursePrice,
        courseThumbnail: "",
      })
    }
  },[courseByIdData])
  

  const [previewThumbnail, setPreviewThumbnail] = useState("")
  const navigate = useNavigate();

  const [editCourse, {data, isLoading, isSuccess, error}] = useEditCourseMutation();

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const selectCategory = (value) =>{
    setInput({...input, category:value});
  }

  const selectCourseLevel = (value) =>{
    setInput({...input, courseLevel:value});
  }

  const selectThumbnail = (e) =>{
    const file = e.target.files?.[0];
    if(file){
      setInput({...input, courseThumbnail:file});
      const fileReader = new FileReader();
      fileReader.onloadend = () =>setPreviewThumbnail(fileReader.result)
      fileReader.readAsDataURL(file);
    }
  }

  const updateCourseHandler = async() =>{
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle)
    formData.append("subTitle", input.subTitle)
    formData.append("description", input.description)
    formData.append("category", input.category)
    formData.append("courseLevel", input.courseLevel)
    formData.append("coursePrice", input.coursePrice)
    formData.append("courseThumbnail", input.courseThumbnail)
    await editCourse({formData, courseId});
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success(data.message || "Course Update")
    }
    if(error){
      toast.error(error.data.message || "Course are not Updated")
    }
  },[isSuccess, error])

  if(courseByIdLoading) return <Loader2 className="h-4 w-4 animate-spin"/>

  const isPublished = true;

  return (
    <Card>
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle>Basic Course Information.</CardTitle>
          <CardDescription>
            Make changes to your courses here. Click save when you are done.
          </CardDescription>
        </div>
        <div className="space-x-2">
          <Button variant="outline">
            {isPublished ? "Unpublished" : "Published"}
          </Button>
          <Button>Remove Course</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-5 space-y-4">
          <div>
            <Label>Title</Label>
            <Input
              type="text"
              placeholder="Add Title Here"
              name="courseTitle"
              value={input.courseTitle}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Subtitle</Label>
            <Input
              type="text"
              placeholder="Add subtitle Here"
              name="subTitle"
              value={input.subTitle}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Description</Label>  
            <RichTextEditor input={input} setInput={setInput} />
          </div>
          <div className="flex items-center gap-5">
            <div>
              <Label className="mb-2">Category</Label>
              <Select onValueChange={selectCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
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
            <div>
              <Label className="mb-2">Category</Label>
              <Select onValueChange={selectCourseLevel}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Course Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Course Level</SelectLabel>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Price in (INR)</Label>
              <Input
                className="w-fit"
                type="number"
                name="coursePrice"
                value={input.coursePrice}
                onChange={changeEventHandler}
                placeholder="Course Price"
              />
            </div>
          </div>

          <div>
            <Label>Course Thumbnail</Label>
            <Input type="file" onChange={selectThumbnail} accept="image/*" className="w-fit" />
            {
              previewThumbnail && (
                <img src={previewThumbnail} className="w-60 my-2" alt="Course Thumbnail"/>
              )
            }
          </div>
          <div>
            <Button onClick={()=>navigate("/admin/course")} variant="outline" className="">Cancel</Button>
            <Button disabled={isLoading} onClick={updateCourseHandler}>
                { isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                    Please Wait
                  </>
                ):(
                    "Save"
                )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
