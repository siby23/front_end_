import axios from '../api/Api_Base_Url'

export const API_ADD_COMPLAINTS=(addcomplaint,id)=>axios.post(`/complaints/add_complaint/${id}`,addcomplaint)
export const API_GET_SINGLE_COMPLAINT=(id)=>axios.get(`/complaints/get_single_complaint/${id}`)
export const API_UPDATE_COMPLAINT=(info,id)=>axios.patch(`/complaints/update_complaint/${id}`,info)
export const API_DELETE_COMPLAINT=(id)=>axios.delete(`/complaints/delete_complaint/${id}`) 