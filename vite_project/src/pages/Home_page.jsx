import React, { useEffect, useState } from 'react'
import Addcontact from '../components/Addcontact'
import Search from '../components/Search'
import Contactdetails from '../components/Contact_details'
import { API_SEARCH_CONTACT } from '../api/Contact_Api'
import Navbar from '../components/Navbar'
function Home_page() {
  const [search, setSearch] = useState('')
  const [searchDetails, setSetDetails] = useState([])

  useEffect(() => {
    API_SEARCH_CONTACT(search).then(({ data }) => {
      setSetDetails(data);

    })
  }, [search])
  return (
    <>

        <Navbar />
      <main >
        <Addcontact />
        <Search setSearch={setSearch} />
        <Contactdetails searchDetails={searchDetails} />

      </main>
    </>
  )
}

export default  Home_page
