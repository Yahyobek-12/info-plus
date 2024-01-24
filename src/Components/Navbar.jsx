import '../styles/Navbar.css'
import { GoHomeFill } from "react-icons/go"
import { GrTechnology } from "react-icons/gr"
import { IoEarthSharp } from "react-icons/io5"
import { FaPlusCircle   } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineSportsSoccer  } from "react-icons/md"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="inside">
            <Link to='' className="logo"><IoEarthSharp /> InfoPlus+</Link>
            <ul className="nav">
                <Link to='/' className='links'>Home</Link>
                <Link to='tech' className='links'>Technology</Link>
                <Link to='' className='links'>Sports</Link>
                <Link to='' className='links'>More</Link>
            </ul>
        </div>
        <div className="categories">
            <div className="c-nav">
                <NavLink to='/'><GoHomeFill className='c-icons' /></NavLink>
                <NavLink to='tech'><GrTechnology className='c-icons' /></NavLink>
                <NavLink><MdOutlineSportsSoccer className='c-icons' /></NavLink>
                <NavLink><FaPlusCircle  className='c-icons' /></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar
