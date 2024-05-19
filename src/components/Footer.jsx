import React from 'react'
import {FaGithubSquare,FaInstagram} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-ray-500 text-center'>
        <p className='my-5 text-gray-500'>Srikakulam,AP -532462</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <FaGithubSquare/>
            <FaInstagram/>
        </div>
    </div>
  )
}

export default Footer