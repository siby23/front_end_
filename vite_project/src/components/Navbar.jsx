import React from 'react'
import { useNavigate } from 'react-router-dom';
import { API_ADMIN_LOGOUT } from '../api/Admin_Api';

function Navbar() {
    let navigate = useNavigate()
    let token = localStorage.getItem('token')
    let handlelogout = async (e) => {
        try {
            console.log(token);
            let { data } = await API_ADMIN_LOGOUT(token)
            if (data.message = "Logout Sucessfully") {
                localStorage.removeItem("token")
            }

        } catch (error) {

        }

    }
    return (
        <>
            <div className='w-full h-14 flex justify-between bg-gray-800  '>
                <h1 className='text-gray-400 text-3xl mt-2'>Contact Management System</h1>


                <button onClick={handlelogout} className='text-gray-400 text-xl mt-2 mr-[5%] '>Logout</button>

            </div>
        </>
    )
}

export default Navbar
