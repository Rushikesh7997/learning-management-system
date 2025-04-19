import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import React from 'react'

export const LectureTab = () => {
  return (
    <Card>
        <CardHeader className="flex justify-between">
            <div className='flex justify-between'>
                <div>
                    <CardTitle>Edit Lecture</CardTitle>
                    <CardDescription>Make Your changes and save it.</CardDescription>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant="destructive">Remove Lecture</Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <div>
                <Label>Title</Label>
                <Input
                    type="text"
                    placeholder="Lecture Title Name"
                />
            </div>
            <div className='my-5'>
                <Label>Video <span>*</span></Label>
                <Input
                    type="file"
                    accept="video/*"
                    className="w-fit"
                />
            </div>
            <div className='flex items-center space-x-2 my-2'>
                <Switch id="airplane-mode" />
                <Label htmlFor="airplane-mode">Preview Video</Label>
            </div>
            <div className='mt-4'>
                <Button>Update Lecture</Button>
            </div>
        </CardContent>
    </Card>
  )
}
