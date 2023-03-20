import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import languageData from '../data/languageData.json';
// import underconstruction from '../assets/projects/under-construction.png'

const Work = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-600'>
                        {languageData[language].navbar.work}
                    </p>
                    <p className='py-6'>{languageData[language].work.workText}</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}

                    <div className=" bg-image-one shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-gray tracking-wider ">
                                Ship crew builder
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/RobinDela/CRUD-APP' target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                    {/* Gird Item */}

                    <div className=" bg-image-two shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div "
                    >
                        {/* Hover effect for images */}
                        <div className="opacity-0 group-hover:opacity-100 ">
                            <span className="text-2xl font bold text-white tracking-wider ">
                                Kanji Quizz
                            </span>
                            <div className="pt-8 text-center ">
                                <a href='https://github.com/RobinDela/Kanji-memorizer/tree/main/client/frontend ' target="_blank">
                                    <button
                                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
