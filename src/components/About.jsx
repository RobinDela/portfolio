import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-center text-4xl font-bold'>
                        <p>Hi!</p>
                        <p>Name TEST one</p>
                    </div>
                    <div>
                        <p>I am passiona Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, repellendus necessitatibus dolore, nam, architecto porro minima hic explicabo amet iusto saepe deserunt deleniti quis facilis cum aperiam? Repellat, repudiandae maxime.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;