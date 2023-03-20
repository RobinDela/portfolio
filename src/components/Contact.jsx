import { useContext } from 'react';
import { LanguageContext } from '../LanguageContext';
import languageData from '../data/languageData.json';

const Contact = () => {
    const { language } = useContext(LanguageContext)
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/9fd5b300-9718-4f36-980b-6867fd4fb50b" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300'>{languageData[language].contact.title}</p>
                    <p className='text-gray-300 py-4'> {languageData[language].contact.text}</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder={languageData[language].contact.namePlaceHolder} name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder={languageData[language].contact.emailPlaceHolder} name='email' />
                <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder={languageData[language].contact.messagePlaceHolder}></textarea>
                <button className='text-white border-2 hover:bg-gray-600 hover:border-gray-600 px-4 py-3 my-8 mx-auto flex items-center'>{languageData[language].contact.buttonText}</button>
            </form>
        </div>
    )
}

export default Contact