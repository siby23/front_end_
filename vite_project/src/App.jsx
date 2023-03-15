import { useEffect, useState } from 'react'
import Home_page from "./pages/Home_page"
import Login_page from "./pages/Login_page"
import Profile_page from "./pages/Profile_page"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    let token = localStorage.getItem('token')
    setToken(token)
    console.log("run useefcet");
  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={token ? <Home_page /> : <Login_page />} />
          <Route path='/home' element={token ? <Home_page /> : <Login_page />} />
          <Route path='/profile/:id' element={token ? <Profile_page /> : <Login_page />} />
        </Routes>
      </Router>



    </>
  )
}

export default App
