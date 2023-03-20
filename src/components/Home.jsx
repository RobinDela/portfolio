import { useContext } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { LanguageContext } from '../LanguageContext';
import languageData from '../data/languageData.json';


const Home = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-base text-gray-300 dark:text-gray'>{languageData[language].name}</p>
                <h1 className='my-8 text-4xl sm:text-7xl text-gray-300 font-bold dark:text-white'>Robin Delannoy</h1>
                <h2 className='text-4xl sm:-7xl text-gray-300 dark:text-white'>{languageData[language].home.introduction}</h2>
                <p className='text-xl text-gray-300 dark:text-gray'> {languageData[language].home.description}</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-600'>{languageData[language].home.viewWork}
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