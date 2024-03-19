import React, { useContext } from 'react'
import Card from './Card'
import ProjectContext from '../App'
const Body = (props) => {
  const projects=props.projects
  
  if(projects){console.log(projects)}
  else{console.log("yes ", projects)}
  return (
    <div className='px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 min-h-screen sm:min-h-auto'>
  {projects && projects.map(project => (
    <Card project={project} key={project.id} />
  ))}
</div>

  )
}

export default Body