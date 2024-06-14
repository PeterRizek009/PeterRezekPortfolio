import { React, useEffect, useMemo } from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';

import { TbExclamationMark } from 'react-icons/tb'

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layouts/ScrollAnimationWrapper";
import { motion } from "framer-motion";

const Contact = () => {



    const scrollAnimation = useMemo(() => getScrollAnimation(), []);


    const [errors, setErrors] = useState({
        error_from_name: '',
        error_email: '',
        error_message: ''
    })


    const [msg, setMsg] = useState({
        from_name: '',
        email: '',
        message: ''
    })

    // const [modalMsg, setModalMsg] = useState(" ")
    // const [show, setShow] = useState(false)



    const validate = (msg) => {
        if (!msg.from_name) {
            setErrors({ ...errors, error_from_name: 'Required' });
        } else if (!msg.email) {
            setErrors({ ...errors, error_email: 'Required' });
        } else if (!msg.email.includes("@") || !msg.email.includes(".")) {
            setErrors({ ...errors, error_email: 'Wrong E-mail' });
        }


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_tdkvyq4',
            'template_lwy1cbq',
            msg,
            'WjUqbnSvL5a8MHUcr'
        ).then((res) => {


        }).catch((error) => {


        })

        validate(msg)
    }

    const handleChange = (e) => {
        setMsg({ ...msg, [e.target.name]: e.target.value })
    }


    const renderErrors = (error) => {
        return (
            (error.length > 0) ?
                <div className='flex justify-start items-center w-fit bg-green-200 p-2  rounded-md my-2 text-violet-800 text-xl font-bold  text-right'>
                    <TbExclamationMark />
                    <label htmlFor='from_name'>{error} </label>
                </div>
                :
                null
        )
    }


    useEffect(() => {
        const delay = 3000; // Delay in milliseconds

        const timeoutId = setTimeout(() => {
            setErrors({ ...errors, error_from_name: '' });
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [errors]);


    return (
        <ScrollAnimationWrapper>
            <motion.div variants={scrollAnimation}>
                <form onSubmit={handleSubmit} className='flex flex-col justify-between items-end lg:mt-0 lg:w-[600px] w-[80%] mt-10'>

                    {renderErrors(errors.error_from_name)}
                    <input type='text' name='from_name' placeholder='NAME'
                        value={msg.from_name}
                        onChange={handleChange}
                        className='uppercase font-bold text-left py-2 w-full border-b-2 border-violet-800 mb-4 bg-newBlack' />



                    {renderErrors(errors.error_email)}
                    <input type='email' name='email' placeholder='EMAIL' value={msg.email} onChange={handleChange}
                        className='uppercase font-bold text-left py-2 w-full border-b-2 border-violet-800 mt-4 bg-newBlack' />

                    {renderErrors(errors.error_email)}
                    <textarea type='text' name='message' placeholder='MESSAGE' value={msg.message} onChange={handleChange}
                        className='font-bold text-justify py-2 h-[100px] w-full border-b-2 border-violet-800 mt-6 bg-newBlack' />


                    <button type='submit'
                        className='uppercase text-white text-base font-bold leading-relaxed mx-auto py-4 border-b-4
             border-violet-800 hover:border-green-400 hover:text-violet-800 w-[140px] mt-4'>Send message</button>
                </form>

            </motion.div>
        </ScrollAnimationWrapper>
    );
}

export default Contact;