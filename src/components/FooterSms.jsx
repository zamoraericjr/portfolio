import React, { useState } from 'react'

function FooterSms() {
    const [smsNum, setSMSnum] = useState("");

    return (
        <div className='w-full footBorder'>
            <div className='flex flex-col m-2'>
                <form>    
                    <textarea type="text" 
                    rows={2}
                    cols={30}
                    placeholder='Sms to 09330229148'/>

                    <div className='flex'>
                    <input type="text"
                    value={smsNum}
                    onChange={(e) => setSMSnum(e.target.value)}
                    placeholder='Enter your mobile number'
                    className='mb-2'/>

                        <button className='text-xs'>
                            Submit
                        </button>

                    </div>
    
                   
    
    
                </form>
    
            </div>
    
        </div>
      )
}

export default FooterSms