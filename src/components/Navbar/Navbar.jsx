import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Logo } from '../../assets/assets'

function Navbar() {
  return (
    <nav className='flex px-6 justify-between items-center py-5'>
        <img src={Logo} className='w-[6rem]' alt="" />
        <RxHamburgerMenu size={25} color={'#fff'}/>
    </nav>
  )
}

export default Navbar
