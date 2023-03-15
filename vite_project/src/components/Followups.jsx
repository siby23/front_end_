import React, { useState } from 'react'
import {API_UPDATE_COMPLAINT} from '../api/Complaint_Api'


function Followups({ complaints }) {
  const [status, setStatus] = useState('')

  let handlechange = (e) => {
    const { name, value } = e.target
    setStatus({ [name]: value })
  }
  let handelsubmit = async (e) => {
    let id = e.target.value
    let { data } = await API_UPDATE_COMPLAINT(status,id)
    window.location.reload()
  }
  return (
    <>

      {complaints.map((item) => {
        return (

          <div className='flex justify-around mt-1 space-y-2 uppercase'>

            {item.status === "next" ?
              <>
                <select onChange={handlechange} name='status' className='rounded-full bg-slate-700 p-2  w-25'>
                  <option value="open" >{item.status}</option>
                  <option value="closed">close</option>


                </select>
                <h1 className='uppercase'> {new Date(item.next).toLocaleDateString()}</h1>

                <button type='submit' value={item._id} onClick={handelsubmit}>+</button>
              </>


              : ""}

          </div>


        )
      })}
    </>
  )
}

export default Followups
