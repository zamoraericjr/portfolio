import React from 'react'
import FooterEmail from '../components/FooterEmail'
import FooterSms from '../components/FooterSms'
import FooterCall from '../components/FooterCall'
import FooterAddress from '../components/FooterAddress'
import FooterMessenger from '../components/FooterMessenger'

function Footer() {
  return (
    <div className='flex flex-col lg:flex-row lg:fixed lg:mt-[100px] bottom-0 left-0 mt-1 right-0 shadow-lg bg-gradient-to-r from-sky-700 to-blue-950'>
        <FooterEmail/>
        {/* <FooterSms/> */}
        <FooterCall/>
        <FooterMessenger/>
        <FooterAddress/>
    </div>
  )
}

export default Footer