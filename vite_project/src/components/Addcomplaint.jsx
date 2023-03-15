import React, { useState } from 'react'
import {API_ADD_COMPLAINTS} from '../api/Complaint_Api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Addcomplaint({id}) {

    const initialize = { description: "", status: "open", date: "" }
    const [show, setShow] = useState(false)
    const [formVlu, setFormVlu] = useState(initialize)
  
    let handlechange = (e) => {
        const { name, value } = e.target
        setFormVlu({ ...formVlu, [name]: value })
    }
    let handlesubmit = (e) => {
        e.preventDefault()
        try {
            if (!formVlu.description || !formVlu.status) {

                toast("fill the field");
            } else {

                API_ADD_COMPLAINTS(formVlu, id).then((data) => {
                    setShow(false)
                    window.location.reload()
                })

            }
        } catch (error) {

        }
    }
    return (
        <>
            <div className='container  flex flex-col  w-full max-w-2xl  p-0 space-y-2 '>
                <header >
                    <button className='bg-green-400 rounded-full p-1  pr-4 pl-4 ml-1 ' onClick={() => setShow(!show)}>Add complaints  </button>
                </header>
                <ToastContainer />
                {show ?

                    <form onSubmit={handlesubmit} className='w-full max-w-xl'>

                        <textarea onChange={handlechange} name='description' className='rounded-full w-full text-center text-orange-100 bg-slate-700  ' />

                        <div className='flex justify-between'>
                            <div>
                                <select onChange={handlechange} name='status' className='rounded-full bg-slate-700 p-2  w-25'>
                                    <option value="open" >select</option>
                                    <option value="next">Next</option>


                                </select>
                            </div>

                            {formVlu.status === 'next' ?
                                <input type="date" onChange={handlechange} name='date' className='rounded-full bg-slate-700 p-2 ' />
                                : ""
                            }


                            <button type='submit' className='bg-green-400 rounded-full pr-2 pl-2 m-1'>+</button>
                        </div>
                    </form>
                    : ""}

            </div>
        </>
    )
}

export default Addcomplaint
