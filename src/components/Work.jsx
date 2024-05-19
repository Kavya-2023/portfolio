import React from 'react'
import local from '../assets/localtreasures.jpg';

import stack from '../assets/stackoverflow.jpg';
import todolist from '../assets/todolist.jpg';
import nano from '../assets/nanoquest.jpg'
const Work = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto' id="projects">
      <div className='mx-auto px-4 md:px-8'>
        <div className='mb-4 flex items-center justify-between'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-2xl lg:text-3xl text-white'>
                    My <span>Projects</span>
                </h2>
                <p className='text-gray-500'>
                    These are my latest Projects
                </p>
            </div>
        </div>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
            <a href='/' className='group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80'>
                <img src={stack} loading='lazy' alt="" className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ray-800 via-transparent to-transparent opacity-50'>

                </div>
            </a>

            <a href='/' className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
                <img src={nano} loading='lazy' alt="" className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ray-800 via-transparent to-transparent opacity-50'>

                </div>
            </a>

            <a href='/' className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80'>
                <img src={local} loading='lazy' alt="" className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ray-800 via-transparent to-transparent opacity-50'>

                </div>
            </a>

            <a href='/' className='group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80'>
                <img src={todolist} loading='lazy' alt="" className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'/>
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-ray-800 via-transparent to-transparent opacity-50'>

                </div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Work
