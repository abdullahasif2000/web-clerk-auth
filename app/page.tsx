import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-2 w-full h-screen justify-center items-center'>
      <h1 className='text text-5xl'>
        Home
        </h1>
     <Button asChild>
      <Link href="/dashboard">
      Go to dashboard
      </Link>
     </Button>
    </div>
  )
}

export default page
