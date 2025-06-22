import React,{createContext, useContext, useEffect,useRef} from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_img from '../../assets/caret_icon.svg'
import AppContext from '../../Context/Appcontext'

const Navbar = () => {
  const {logOut} = useContext(AppContext)

  const navRef = useRef();
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
    if(window.scrollY >= 80){
      navRef.current.classList.add('nav-dark')
    }else{
            navRef.current.classList.remove('nav-dark')
    }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
             <li>TV Shows</li>
              <li>Movies</li>
               <li>New & Popular</li>
                <li>My List</li>
                 <li>Browse By Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt=""  className='icons' />
          <p>Children</p>
          <img src={bell_icon} alt=""  className='icons' />
          <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile' />
             <img src={caret_img} alt=""  />
             <div className="dropdown">
               <NavLink  className='navlink' to={'/login'}><p>Sign In</p></NavLink>
              <p onClick={logOut}>Sign Out</p>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar