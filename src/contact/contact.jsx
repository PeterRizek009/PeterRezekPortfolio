
import Contact from '../contactme/contact';

import React from 'react';

const ContactSection = () => {

  

    return (
   
            <div className='flex flex-col md:flex-row justify-between items-center md:items-start md:max-w-[80%] mx-auto flex-wrap '>
                <div className='content flex flex-col md:justify-start justify-between items-center flex-wrap lg:w-[40%] w-[90%] '>
                    <div className='title'>Contact me</div>
                    <p className='my-8 w-[90%]'>I would like to hear about your project and how I could help you. Please fill in the form, and I’ll get back to you as soon as possible.</p>
                </div>
                <div className='border border-gray-200 rounded-lg hover:border-violet-800  p-8 h-full shadow-md md:w-[60%] w-[80%] '>
              
                <Contact />
          
            </div>
        </div>
    );
}

export default ContactSection;