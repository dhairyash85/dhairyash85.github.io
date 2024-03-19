import React, { useContext } from 'react'
import Card from './Card'
import ProjectContext from '../App'
const Body = (props) => {
  const projects=props.projects
  
  if(projects){console.log(projects)}
  else{console.log("yes ", projects)}
  return (
    <div className=' px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4  min-h-screen'>
        {projects && projects.map(project=>{console.log(project) 
          return(<Card project={project}/>)})}
    </div>
  )
}

export default Body