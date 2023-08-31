import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
import Modal from '../modal/modal';


const Contact = () => {

    const [msg, setMsg] = useState({
        subject: '',
        mail: '',
        content: ''
    })

    const [modalMsg, setModalMsg] = useState('')
    const [show, setShow] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        send(
            'service_tdkvyq4',
            'template_lwy1cbq',
            msg,
            'WjUqbnSvL5a8MHUcr'
        ).then((res) => {

            setModalMsg('Sent')
        }).catch((error) => {

            setModalMsg('FAILED...')
        })
        setShow(true)

    }

    const handleChange = (e) => {
        setMsg({ ...msg, [e.target.name]: e.target.value })

    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center w-[500px]'>
            <input type='text' name='subject' placeholder='SUBJECT' value={msg.subject} onChange={handleChange}

                className='uppercase font-bold text-left py-2 w-full border-b-2 border-violet-800 mb-4 bg-newBlack' />


            <input type='email' name='mail' placeholder='EMAIL' value={msg.mail} onChange={handleChange}
                className='uppercase font-bold text-left py-2 w-full border-b-2 border-violet-800 mt-4 bg-newBlack' />


            <textarea type='text' name='content' placeholder='MESSAGE' value={msg.content} onChange={handleChange}
                className='font-bold text-justify py-2 h-[100px] w-full border-b-2 border-violet-800 mt-6 bg-newBlack' />


            <button type='submit'
                className='uppercase text-white text-base font-bold leading-relaxed tracking-widest py-4 border-b-4
             border-violet-800 hover:border-green-400 hover:text-violet-800 w-[140px] mt-4'>Send message</button>

            {show ?
                <>
                    <Modal modalMsg={modalMsg} />
                </>
                :
                <></>
            }

        </form>



    );
}

export default Contact;