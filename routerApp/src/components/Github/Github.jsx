import React, { useState , useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github() {
    const data = useLoaderData();
    // const [data , useData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         console.log(data);
    //         useData(data);
    //     })
       
    // }, []);
  return (
    <>
    
     <div className='text-center m-3 bg-slate-900  text-white p-10' >
         Github Followers:{data.followers}
         <img   src={data.avatar_url} alt="" width={300} />
          </div>
     
    </>
   
  )
}

export const loaderInfo = async ()=>{
  const response =  await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}

 