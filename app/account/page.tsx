'use client'

import { useUser } from '@/hooks/useUser';
import React from 'react'

const Account = () => {
    const { user } = useUser();
    
  return (
    <div className='min-h-screen'>
      {user? (
        <p>Hello {user?.user_metadata?.full_name}</p>
      ) : (
        <p>No one</p>
      )}
    </div>
  )
}

export default Account
