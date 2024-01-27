import React from 'react'
import ContA from '../components/ContA'
import ContPort from '../components/ContPort'
import ContRes from '../components/ContRes'

function Content({navSel}) {
  if(navSel=='about'){
    return (
      <div className='w-full mt-20 md:mt-8 mb-0 lg:mb-20'>
        <ContA/>
        {/* <ContPort/> */}
        {/* <ContRes/> */}
      </div>
    )
  }
  else if(navSel=='portfolio'){
    return (
      <div className='w-full mt-20 md:mt-8 mb-0 lg:mb-20'>
        {/* <ContA/> */}
        <ContPort/>
        {/* <ContRes/> */}
      </div>
    )
  }
  else if(navSel=='resume'){
    return (
      <div className='w-full mt-20 md:mt-8 mb-0 lg:mb-20'>
        {/* <ContA/> */}
        {/* <ContPort/> */}
        <ContRes/>
      </div>
    )
  }
  
}

export default Content