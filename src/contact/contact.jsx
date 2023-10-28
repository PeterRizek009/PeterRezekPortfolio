import React from 'react';
import Contact from '../contactme/contact';


const ContactSection = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center md:items-start md:max-w-[80%] mx-4 md:mx-auto'>
            <div className='content flex flex-col md:justify-start justify-between items-center flex-wrap md:w-[40%]'>
                <div className='block text-white text-2xl md:text-5xl font-bold leading-10 md:pb-4 p-2  border-b-4 border-violet-800 md:w-[400px] w-[200px] md:text-left text-center mx-auto md:mx-2'>Contact me</div>
                <p className='my-8 w-[80%]'>I would like to hear about your project and how I could help you. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>
            <Contact />
        </div>
    );
}

export default ContactSection;