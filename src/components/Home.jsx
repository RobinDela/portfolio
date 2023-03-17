import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-base text-gray-300 dark:text-gray'>Hi there, my name is</p>
                <h1 className='my-8 text-4xl sm:text-7xl text-gray-900 font-bold dark:text-white'>Robin Delannoy</h1>
                <h2 className='text-4xl sm:-7xl text-gray-900 dark:text-white'>I'm a Web developer</h2>
                <p className='text-xl text-gray-300 dark:text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus perferendis veniam possimus eum corrupti culpa deleniti nemo rerum aperiam, provident dolor dolores tenetur autem nostrum fugiat quibusdam suscipit molestiae.</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600'>View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home