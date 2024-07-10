import { User } from '@/types/page'
import Image from 'next/image'
import React from 'react'

const UserProfile = (user:any) => {
  console.log(user)

  return (
    <div>
            <h1 className="text-2xl font-bold">user:{user?.userName} </h1>
    </div>
  )
}

export default UserProfile