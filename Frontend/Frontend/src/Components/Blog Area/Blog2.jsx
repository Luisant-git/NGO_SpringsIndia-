import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Blog2 = () => {
  return (
    <section className="jm-blog-area pt-100 pb-70">
        <div className="container">

    <div className="row align-items-center mb-4">
        <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="jm-section-title mb-3">
                <h2 className="title">Hire Our Recruiters</h2>
            </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="jm-section-title mb-3">
                <p className="text">If you are a recruiter or employer seeking onsite employees, RukmarInfotech Staffing Services is the ideal partner for you!</p>
            </div>
        </div>
    </div>

  
    <div className="row">
       
        <div className="col-lg-6 col-md-12">
            <p>We specialize in providing recruiters to your location on an hourly or monthly basis, accommodating both bulk and seasonal hiring throughout India, with a minimum contract of six months. Our services are tailored to align with your HR strategies right at your business site.</p>
            <p>We collaborate closely with clients to understand their hiring needs, using methods like walk-in interviews and job fairs to attract dedicated staff. Our goal is to enhance performance and adapt strategies for optimal results, ensuring a high return on investment.</p>
            <p>By paying attention to detail in the hiring process, we ensure that we identify candidates who will thrive within your team. This partnership fosters long-term success as you rely on our onsite recruitment team.</p>
            <p>Once staff are deployed, we manage onboarding, clarify roles, supervise performance, and provide continuous feedback for effective management at your site.</p>
            <p>If you are interested in our onsite recruitment services, please contact us with your requirements, and we will create a customized HR plan for successful collaboration.</p>
        </div>

    
        <div className="col-lg-6 col-md-12">
            <h4>Benefits of Onsite Recruitment Services:</h4>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="Access to highly qualified candidates beyond online databases." />
      </ListItem>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="Time and cost savings in the hiring process." />
      </ListItem>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="Customized payroll management." />
      </ListItem>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="Conducting walk-in interviews and on-campus hiring." />
      </ListItem>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="Increased effectiveness and profitability for client companies." />
      </ListItem>
      <ListItem sx={{ display: "list-item", p: 0 }}>
        <ListItemText primary="An ideal solution for outsourcing candidates." />
      </ListItem>
    </List>
        </div>
    </div>
</div>

    </section>
  )
}

export default Blog2