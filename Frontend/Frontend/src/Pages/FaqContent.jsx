
import React from 'react'
import AboutArea from '../Components/About/AboutArea'
import VideoArea2 from '../Components/Video Area/VideoArea2'

import Breadcrumb from '../Components/Breadcrumb/Breadcrumb'
import FaqArea from './FaqArea'
import CallToAction from '../Components/Call To Action/CallToAction'

function FaqContent() {
  return (
    <div>
         <main className='about-main'>
        <Breadcrumb topic={"FAQ"} topicSpan={"FAQ"}/>
        {/* <AboutArea/> */}
        <FaqArea/>
        {/* <VideoArea2/> */}
        <CallToAction/>
    </main>
    </div>
  )
}

export default FaqContent