import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid}= useParams()
  return (
    <div className='bg-pink-600 text-white p-4'>
      User:   {userid}
    </div>
  )
}

