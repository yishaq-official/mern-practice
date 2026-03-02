import Signin from "./pages/auth/Signin"
import Signup from "./pages/auth/Signup"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signin" element={<Signin/>} />
        
      </Routes>
    </Router>
  )
}

export default App
