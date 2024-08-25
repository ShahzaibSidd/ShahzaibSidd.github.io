import React from 'react'
import CaptionCard from './CaptionCard';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = (props) => {
  const captionAdder = [];
  for (let i=0; i<(props.techStack).length; i++) {captionAdder.push(<CaptionCard techName={props.techStack[i]}/>)}

  return (
    <div className='h-full w-[600px] shrink-0 border-2 border-solid border-white rounded-[10px] group overflow-hidden'>
      <div className='absolute w-full h-full opacity-0 blur-none brightness-100 z-20 font-urbanist font-bold text-white px-[50px]
      duration-500 group-hover:opacity-100'>
        <div className='flex justify-between w-[500px]'>
          <h1 className="pt-[30px] text-[50px]">
              {props.projectName}
          </h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-[35px] pt-[50px]'/>
        </div>
        <p className='text-[25px] w-[500px] pb-[20px] font-light'>
          {props.desc}
        </p>

        <div className='flex gap-[15px]'>
          {captionAdder}
        </div>
      </div>
      
      <div 
      className={`h-full w-full bg-cover rounded-[10px] z-0
      transition-all duration-200 group-hover:blur group-hover:brightness-50
      `}
      style={{backgroundImage: props.image}}>
      </div>
    </div>
  )
}

export default ProjectCard