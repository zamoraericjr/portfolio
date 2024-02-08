import React from 'react'

function ContA() {
  return (
    <div className='flex w-full grid grid-cols-1 md:grid-cols-2'>
        <div className='flex justify-center w-full h-full borderB'>
          <div className='m-5'>
            <img src="myPic.jpg" className='shadow-2xl'/>
          </div>
        </div>

        <div className='flex justify-center items-center w-full h-full borderB'>
          <div className='m-10'>
            <div className="bg-success-subtle text-xl">
              <p>Hi, I'm <b>Eric</b>! My passion for <b>process development</b> led me to embark on a quest to change <b>businesses</b> and <b>lives</b> for the <b>better</b> and become the very <b>best</b> of who and what I can <b>be</b>.</p>              
              <p>May <b>you</b> be part of my coding journey and together let us <b>enter</b> into a <b>symbiotic</b> relationship where I help you or your business/es achieve maximum <b>efficiency</b> in accomplishing tasks/ goals through <b>digitization</b> and <b>automation</b>. In that feat I in turn will <b>grow</b> my skills and myself.  </p>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-start w-full h-full borderB'>
          <div className='flex flex-col items-center m-10'>
            <b>Studied full-stack web development in Kodego bootcamp</b>

            <li className='flex flex-col items-center'>
                    <p className='font-semibold'>Aug 26, 2023 - Jan 22, 2024</p>
                    <p>In this stage of journey I entered into a training on full-stack web development where in I learned both front-end and back-end programming. I acquired basic skills in HTML, CSS, JAVASCRIPT, PHP, JAVA, PYTHON, MYSQL, MARIADB, API, APACHE, and NGINX.</p>
                  
                </li>
            <br />
            <b>Founded Metto Application</b>
            <li className='flex flex-col items-center'>
                    <p className='font-semibold'>Jun 2021 - present</p>
                    <p>Metto is an Android application that allows users to play instant betting games like jack-en-poy betting, raffle betting, and events betting. In this journey I was able to learn Android app creation (created 10 mobile applications that will be used for the Metto betting to be operational and running), Javascript, Database, and enhance my analysis and logic skills.</p>
                </li>
          </div>
        </div>   
        
        <div className='flex justify-center items-start w-full h-full borderB'>
          <div className='flex flex-col items-center m-10'>
            <b>Personal details</b>
            <ul className='flex flex-col items-center'>
                  <li>Eric Abraham D. Zamora Jr.</li>
                  <li>July 5, 1989</li>
                  <li>Cebu City</li>
                  <li>Filipino</li>
                  <li>Roman Catholic</li>
                  <li>Male</li>
                  <li>Married</li>
                  <li>English, Filipino, Cebuano</li>
              </ul>
              <br />

              <b>Educational background</b>

              <ul className='flex flex-col items-center'>
                  <li className='text-sm'>University of San Carlos - Bachelor of Arts in Philosophy (Tertiary 2006-2010)</li>
                  <li className='text-sm'>LIDE Learning Center Inc./LLCI (Secondary 2002-2006)</li>
                  <li className='text-sm'>LIDE Learning Center Inc./LLCI (Primary 1996-2002)</li>
              </ul>
              <br />

              <b>Affiliations</b>
              <ul className='flex flex-col items-center'>
                  <li className='text-sm'>Member of Neo Catechumenal Community (2002 - 2018)</li>
                  <li className='text-sm'>LLCI Alumni Isabel, Leyte (2006 - 2009)</li>
                  <li className='text-sm'>University of San Carlos Alumni (2010 - 2013)</li>
              </ul>
          </div>
        </div>  


        
    </div>
  )
}

export default ContA