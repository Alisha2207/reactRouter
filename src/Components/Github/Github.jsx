import React, { useEffect, useState } from 'react'

function Github() {
    const[repos,setRepos]=useState([])
    const[data, setData]=useState([])

    useEffect(()=>{
     fetch('https://api.github.com/users/Alisha2207/repos').
     then(res=> res.json()).
     then(data=> {
        console.log(data);
        setRepos(data)
    })
    },[])

    
    useEffect(()=>{
        fetch('https://api.github.com/users/Alisha2207').
        then(res=> res.json()).
        then(data=> {
           console.log(data);
           setData(data)
       })
       },[])

  return (

    <div className='  m-4 bg-pink-500 text-white p-4 text-3xl'>
      Github Repositories:
      <div className='flex justify-between items-start m-4 bg-pink-500 text-white p-4 text-xl '>
      <ol className='list-decimal  list-inside text-left'>
        {repos.map((repo)=>(
            <li id={repo.id}>{repo.name}</li>
        ))}
      </ol>

      
      <div className="flex-shrink-0">
        
     <img   src={data.avatar_url}   alt='Git Picture' width={200}/>
         
      </div>

      </div>

      
     
    </div>
  )
}

export default Github
