import React from 'react'
import HeaderName from '../components/HeaderName'
import HeaderNav from '../components/HeaderNav'

function Header({navSel, setNavSel}) {
  return (
    <div className='flex flex-col md:flex-row fixed top-0 left-0 right-0'>
      <HeaderName/>
      <HeaderNav
         navSel = {navSel}
         setNavSel = {setNavSel}/>
    </div>
  )
}

export default Header