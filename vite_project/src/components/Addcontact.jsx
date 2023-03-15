import React, { useState } from 'react'
import { BiUserPlus, BiPlus } from 'react-icons/bi';
import { API_ADD_CONTACT } from '../api/Contact_Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcontact() {
    const initialize = { name: "", mobile: "", location: "" }
    const [show, setShow] = useState(false)
    const [contact, setContact] = useState(initialize)


    const handleChange = (e) => { 
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            if (!contact.name || !contact.mobile || !contact.location) {
                toast("fill the field");
            } else {
                console.log(contact);
                let { data } = await API_ADD_CONTACT(contact)
                if (data.message === "Succesfully added") {
                    setShow(false)
                    window.location.reload()
                }
                // console.log(data);
            }
        } catch (error) {

        }
    }


    return (
        <div className='container  flex flex-col  w-full max-w-2xl  p-0 space-y-2 '>
            <header >
                <button className='bg-green-400 rounded-full p-1  pr-4 pl-4 ml-1 ' onClick={() => setShow(!show)}>Add contact  </button>
            </header>
            <ToastContainer />
            {show ?

                <form onSubmit={handleSubmit} className='space-x-4 flex justify-around p-2  '>
                    <input className='rounded-full bg-slate-700 p-2 ' onChange={handleChange} type="text" name="name" placeholder='Name' />
                    <input className='rounded-full bg-slate-700 p-2 ' onChange={handleChange} type="number" name="mobile" placeholder='Mobile' />
                    <input className='rounded-full bg-slate-700 p-2 ' onChange={handleChange} type="text" name="location" placeholder='Location' />
                    <button className='bg-green-400 rounded-full pr-2 pl-2 m-1' type='submit'> <BiPlus /></button>
                </form>
                : ""}

        </div>
    )
}

export default Addcontact
