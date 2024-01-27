import React from 'react'

function HeaderNav({navSel, setNavSel}) {


    return (
        <div className='flex items-center bg-sky-900 w-full'>
            <div className='flex justify-stretch text-base text-slate-400 w-full h-full'>
                {navSel==='about' ? 
                <div className='w-full h-full nav flex items-center justify-center bg-sky-800'>
                    {'ABOUT'}
                </div>
                : 
                <div onClick={()=>setNavSel('about')} className='w-full h-full nav flex items-center justify-center'>
                    {'ABOUT'}
                </div>}
                
                {navSel==='portfolio' ? 
                <div className='w-full h-full nav flex items-center justify-center bg-sky-800'>
                    {'PORTFOLIO'}
                </div>
                : 
                <div onClick={()=>setNavSel('portfolio')} className='w-full h-full nav flex items-center justify-center'>
                    {'PORTFOLIO'}
                </div>}
                {/* <div className='nav w-full h-full'>
                    {'TESTIMONIES'}
                </div> */}
               {navSel==='resume' ? 
                <div className='w-full h-full nav flex items-center justify-center bg-sky-800'>
                    {'RESUME'}
                </div>
                : 
                <div onClick={()=>setNavSel('resume')} className='w-full h-full nav flex items-center justify-center'>
                    {'RESUME'}
                </div>}
            </div>
        </div>
      )
}
export default HeaderNav