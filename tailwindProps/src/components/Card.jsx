import React from 'react'

function Card(props) {
    console.log(props.username)
  return (
    <div className='bg-slate-950 p-10 rounded-xl m-10'>
       
    <div
       className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
     >
       <div className="dark:!border-navy-700 absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
         <img
           className="h-full w-full rounded-full"
           src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/avatar11.1060b63041fdffa5f8ef.png"
           alt=""
         />
       </div>
     </div>

     <div className="mt-16 flex flex-col items-center">
       <h4 className="text-navy-700 text-xl font-bold dark:text-white">
         {props.username}
       </h4>
       <h5 className="text-base font-normal text-gray-600">Product Manager</h5>
     </div>

     
     <div className="mt-6 mb-3 flex gap-4 md:!gap-14">
       <div className="flex flex-col items-center justify-center">
         <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
           {props.posts}
         </h4>
         <p className="text-sm font-normal text-gray-600">Posts</p>
       </div>
       <div className="flex flex-col items-center justify-center">
         <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
           {props.followers}
         </h4>
         <p className="text-sm font-normal text-gray-600">Followers</p>
       </div>
       <div className="flex flex-col items-center justify-center">
         <h4 className="text-navy-700 text-2xl font-bold dark:text-white">
           {props.following}
         </h4>
         <p className="text-sm font-normal text-gray-600">Following</p>
       </div>
     </div>
    </div>
   
  )
}

export default Card