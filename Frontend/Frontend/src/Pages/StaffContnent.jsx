import React from 'react'
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
import AboutArea from '../Components/About/AboutArea'
import VideoArea2 from '../Components/Video Area/VideoArea2'
import CallToAction from '../Components/Call To Action/CallToAction'

function StaffContnent() {
  return (
    <div>
           <main className='about-main'>
        <Breadcrumb topic={"Looking For Staff"} topicSpan={"Staff"}/>
        <AboutArea/>
        {/* <VideoArea2/> */}
        <CallToAction/>
    </main>
    </div>
  )
}

export default StaffContnent