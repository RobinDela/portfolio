import React, { useState, useContext } from 'react'
import Logo from '../assets/logo-rob.png'
import { FaBars, FaLinkedin, FaTimes, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { LanguageContext } from '../LanguageContext';
import languageData from '../data/languageData.json';
import ResumeEng from '../assets/resume-eng-robin.pdf';
import ResumeJp from '../assets/resume-jp-robin.pdf';



const Navbar = () => {
    const handleDownloadEng = () => {
        const blob = new Blob([ResumeEng], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume-eng-robin.pdf';
        link.click();
    }
    const handleDownloadJp = () => {
        const blob = new Blob([ResumeJp], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume-jp-robin.pdf';
        link.click();
    }
    const handleDownload = () => {
        if (language === 'en') {
            handleDownloadEng();
        } else {
            handleDownloadJp();
        }
    }
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const { language, handleLanguageChange } = useContext(LanguageContext);

    const toggleLanguage = () => {
        if (language === 'en') {
            handleLanguageChange('jp');
        } else {
            handleLanguageChange('en');
        }
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alt="logo-img" style={{ width: '50px' }} />
                <button onClick={toggleLanguage}>{language === 'en' ? '日本語' : 'English'}</button>
            </div>

            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        {languageData[language].navbar.home}
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        {languageData[language].navbar.about}
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        {languageData[language].navbar.skill}
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        {languageData[language].navbar.work}
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        {languageData[language].navbar.contact}
                    </Link>
                </li>
            </ul>

            {/* Mobile burg*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* Mobile */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        {languageData[language].navbar.home}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        {languageData[language].navbar.about}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                        {languageData[language].navbar.skill}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                        {languageData[language].navbar.work}
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        {languageData[language].navbar.contact}
                    </Link>
                </li>
            </ul>
            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://www.linkedin.com/in/robin-delannoy-590/' target="_blank"
                        >
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/RobinDela' target="_blank"
                        >
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='mailto:delannoymrobin@gmail.com' target="_blank"
                        >
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a
                            onClick={handleDownload}
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/' target="_blank"
                        >
                            {languageData[language].resume} <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Navbar;