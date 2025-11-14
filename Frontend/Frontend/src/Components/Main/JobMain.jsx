import React from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import BrowseJobsGrid from '../Browse Jobs/BrowseJobsGrid'

const JobMain = () => {
  return (
    <main className='bg-light'>
        {/* <Breadcrumb topic={"Jobs"} topicSpan={"Jobs Grid"}/> */}
        <BrowseJobsGrid/>
    </main>
  )
}

export default JobMain