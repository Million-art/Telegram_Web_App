import { User } from '@/types/page'
import Image from 'next/image'
import React from 'react'

const UserProfile = (user:any) => {
  console.log(user)

  return (
    <div>
            <h1 className="text-2xl font-bold">user  </h1>
    </div>
  )
}

export default UserProfile