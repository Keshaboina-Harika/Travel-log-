import React,{useEffect, useRef, useContext}from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link,useNavigate} from 'react-router-dom'
import "./Header.css"
import { AuthContext } from '../../context/AuthContext'

const nav__links =[
  {
    path:'/home',
    display :'Home'
  },
  {
    path:'/about',
    display :'About'
  },
  {
    path:'/tours',
    display :'Tours'
  },
]
const Header = () => {
  const headerRef = useRef(null);
  const menurRef = useRef(null);
  const navigate=useNavigate()
  const {user,dispatch}=useContext(AuthContext)
  const logout=()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }
  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    };
  
    window.addEventListener('scroll', stickyHeaderFunc);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', stickyHeaderFunc);
    };
  }, [])

  const toggleMenu = ()=> menurRef.current.classList.toggle('show__menu')
  
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src="https://th.bing.com/th/id/OIP.UrvGL22h8rcckjVqmAokXQAAAA?w=200&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
            </div>
            <div className="navigation" ref={menurRef} onClick={toggleMenu}>
              <ul className='nav menu d-flex align-items-center gap-5'>
                {
                  nav__links.map((item,index)=>(
                    <li className='nav__item' key={index}>
                    <NavLink 
                      to={item.path} 
                      className={navClass => navClass.isActive?"active__link":""}
                    >
                      {item.display}
                    </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className='nav__right d-flex align-items-center gap-4'>
            <div className='nav__btns d-flex align-items-center gap-4'>
                {
                  user?(<>
                  <h5 className="mb-0">{user.username}</h5>
                  <Button className="btn-btn-dark" onClick={logout}>Logout</Button>
                  </>):(<>
                  <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                  </>

                )}


              {/* <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
              <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button> */}
            </div>
            <span className='moblie__menu' onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header