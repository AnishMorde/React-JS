import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userId} = useParams()
  return (
    <div className='text-center m-3 bg-slate-900  text-white p-10' > User : {userId}</div>
  )
}

