import React, { useState } from 'react'

function FooterEmail() {
    const [eAdd, setEadd] = useState("");

//   return (
//     <div className='w-full footBorder'>
//         <div className='flex flex-col m-2'>
//             <form>
//                 <textarea type="text" 
//                 rows={2}
//                 cols={30}
//                 placeholder='Email to zamora.ericjr@gmail.com'/>

//                 <div className='flex'>
//                     <input type="text"
//                     value={eAdd}
//                     onChange={(e) => setEadd(e.target.value)}
//                     placeholder='Enter your email add' className='mb-2'/>

//                     <button className='text-xs'>
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )

return (
    <div className='w-full footBorder'>
        <div className='flex flex-col m-2'>
            <div className='footerTitle text-slate-900'>
                Email:
            </div>
            <div className='footerDesc text-slate-950'>
                zamora.ericjr@gmail.com
            </div>
        </div>
    </div>
  )

}

export default FooterEmail