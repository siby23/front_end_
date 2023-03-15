import axios from '../api/Api_Base_Url'

export const API_ADD_CONTACT=(contact)=>axios.post('/contact/add_contact',contact)
export const API_GET_ALL_CONTACT=()=>axios.get('/contact/get_all_contact')
export const API_GET_SINGLE_CONTACT=(id)=>axios.get(`/contact/get_single_contact/${id}`)
export const API_UPDATE_CONTACT=(info,id)=>axios.patch(`/contact//update_contact/${id}`,info)
export const API_DELETE_CONTACT=(id)=>axios.delete(`/contact/delete_contact/${id}`) 
export const API_SEARCH_CONTACT=(search)=>axios.post('/contact/search_contact',search)