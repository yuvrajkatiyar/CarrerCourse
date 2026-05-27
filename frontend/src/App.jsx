import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home.jsx'
import CareerQuiz from './pages/carrerquiz.jsx'
import Contact from './pages/contact.jsx'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'
import Disclaimer from './pages/disclaimer.jsx'
import Course from './pages/course.jsx'
import CourseDetails from './pages/coursedetails.jsx'
import Register from './pages/register.jsx'
import About from './pages/about.jsx'
import Privacypolicy from './pages/privacypolicy'
import AdminForm from './pages/adminform.jsx'
import Login from './pages/login.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrerquiz" element={<CareerQuiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminform" element={<AdminForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/course" element={<Course/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/disclaimer" element={<Disclaimer/>} />
        <Route path="/privacypolicy" element={<Privacypolicy/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
