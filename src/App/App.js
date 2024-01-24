import Tech from '../Pages/Tech/Tech'
import Home from '../Components/Home'
import Navbar from '../Components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll } from 'framer-motion'

const App = () => {
  const { scrollYProgress } = useScroll()

  return (
    <div className="app">
      <motion.div style={{scaleX: scrollYProgress, position: 'fixed', top: 0, left: 0, right: 0, height: 5,
      background: '#2970ff', transformOrigin: '0%'}} className='motion'></motion.div>
      <Navbar />
      <Routes>
        {/* <Route path='' element={<Home />} />
        <Route path='tech' element={<Tech />} /> */}
      </Routes>
    </div>
  )
}

export default App
