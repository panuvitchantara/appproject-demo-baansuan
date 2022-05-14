import React from 'react'
import './navigation.styles.scss'
import {ReactComponent as BuanSuanLogo } from '../../assets/bsap.svg'
import { Outlet, Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="navigation-container">
        <Link className="logo-container" to=''>
            <BuanSuanLogo className="logo" />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/about-us'><h1>ทำความรู้จัก</h1></Link>
            <Link className="nav-link" to='/blog'><h1>บทความ</h1></Link>
            <Link className="nav-link" to='/contact'><h1>ติดต่อ</h1></Link>
        </div>

    </div>
  )
}

export default NavBar