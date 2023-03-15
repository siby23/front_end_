import React, { useState } from 'react'
import { Loginvalidation } from '../validation/validation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { API_ADMIN_LOGIN } from '../api/Admin_Api'
function Login() {
    const initialize = { email: "", password: "" }
    const [input, setInput] = useState(initialize)
    const navigate = useNavigate()
    /* --------------------- handlingchange of input values --------------------- */
    let handlechange = (e) => {

        const { name, value } = e.target
        setInput({ ...input, [name]: value })

    }
    /* -------------- handlingsubmit of input values to the backend ------------- */
    let handlesubmit = async (e) => {
        e.preventDefault()
        try {
            let after_validation = Loginvalidation.validateSync(input)
            let { data } = await API_ADMIN_LOGIN(after_validation)
            if (data.reffreshtoken) {
                localStorage.setItem('token', data.reffreshtoken)
                navigate('/home')
                window.location.reload()
            }
        } catch (error) {

            toast(error.message);
            console.log(error);
        }
    }
    return (
        <>
            <section class="h-screen">
                <div class="h-full">
                    <div class="g-6 flex h-full flex-wrap items-center justify-center">
                        <ToastContainer />
                        <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
                            <form onSubmit={handlesubmit} className='border-double border-4 border-blue-600 space-y-3 rounded-lg p-5 '>
                                <div>
                                    <label className='text-orange-100 uppercase  '>Email</label>
                                    <input name="email"
                                        onChange={handlechange} className='w-full rounded-full p-3 bg-slate-600 text-white' type="text" />
                                </div>
                                <div>
                                    <label className='text-orange-100 uppercase  '>Password</label>
                                    <input name="password"
                                        onChange={handlechange} className='w-full rounded-full p-3 bg-slate-600 text-white' type="text" />

                                </div>

                                <div className='text-center '>
                                    <button type='submit' className='text-orange-100 bg-slate-600 p-1 rounded text-center'>Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login
