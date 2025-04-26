import { useCreateCheckoutSessionMutation } from '@/features/api/purchaseApi'
import React from 'react'

export const BuyCourseButton = () => {
  const [createCheckoutSession, {isLoading}] = useCreateCheckoutSessionMutation();

  const  purchaseCourseHandler = async () =>{
    await createCheckoutSession();
  }
  return (
        <Button className="w-full">Buy Now</Button>
  )
}
