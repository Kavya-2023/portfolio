import React from 'react'

const Experience = () => {
  return (
    <div className='py-10 bg-[#232325]' id="work">
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Experience</span></h2>
        <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Hasshedbit Innovations</p>
            <p className='text-gray-400'>Nov-2023 - Feb-2024</p>
            <p className='text-gray-500'>
                Working on a Full Stack Examination Management System.Handle the Database MySql and created a responsive front-end using Bootstrap,React js.
            </p>
        </div>
        <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>

        <div className='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Proptellgence</p>
            <p className='text-gray-400'>Feb-2024 - May 2024</p>
            <p className='text-gray-500'>
                Working on a Full Stack Nanoquest E-learning.Handle the Database mongoDB and created a responsive front-end using Bootstrap,React js,tailwind css.
            </p>
        </div>
    </div>
  )
}

export default Experience