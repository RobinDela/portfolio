import React, { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import languageData from '../data/languageData.json';

const About = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-600'>
                            {languageData[language].about.title}
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-8 px-4'>
                    <div className='sm:text-center text-4xl font-bold'>
                    </div>
                    <div>
                        <p>{languageData[language].about.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;