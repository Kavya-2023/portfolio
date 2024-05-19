import React from 'react'
import about from '../assets/about.jpg';
const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id="about">
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
            <div>
                <div className='w-[400px] h-full'>
                    <img src={about}
                    alt=""
                    className='object-cover rounded-xl h=[300px] filter grayscale brightness-50'
                    />
                </div>
            </div>
            <div>
            <div className='p-2'>
                <div className='text-gray-300 my-3'>
                    <h3 className='text-4xl font-semibold mb-5'>About<span>Me</span></h3>
                    <p className='text-justify leading-7 w-11/12 mx-auto'>
                        My Name is kavya varanasi aspiring full stack developer.I strengthened with skills for the frontend and backend .With my knowledge i look forward to apply my knowledge in real world projects.
                    </p>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default About