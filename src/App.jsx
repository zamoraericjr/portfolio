import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './body/Header'
import Content from './body/Content'
import Footer from './body/Footer'
import './App.css'


function App() {
  const[navSel, setNavSel] = useState('about');
 
  return (
    <div className='w-full absolute left-0'>
      <Header
      navSel = {navSel}
      setNavSel = {setNavSel}/>
      <Content
      navSel = {navSel}
      setNavSel = {setNavSel}/>
      <Footer/>

    </div>
  )
}

export default App
