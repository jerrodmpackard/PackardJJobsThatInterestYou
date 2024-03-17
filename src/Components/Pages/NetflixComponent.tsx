import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './Component.css'


const NetflixComponent = () => {
    return (
        <div>
            <header style={{ paddingLeft: 0 }}>
                <div className='p-5 text-center backgroundImage'
                    style={{ backgroundImage: `url(${require('../../Assets/Netflix.webp')})`, height: 400 }}
                >
                    <div className='backgroundMask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Netflix</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container pt-4 pb-5">
                <h3 className='text-center py-4'>Data Visualization Engineer - L4</h3>
                <div className="container border">
                    <Tabs
                        defaultActiveKey="why"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="why" title="Why I want to work for Netflix">
                            <ul>
                                <li>Netflix is one of the largest players in the streaming media space. They were one of the first to market with on demand content after making a name for themselves providing DVDs by mail. Working at Netflix would be a great way to hone my skills and meet industry experts.</li>
                                <li>This role pays very well with a starting salary of $170,000 annually.</li>
                                <li>Netflix offers excellent benefits with mental health support, 401k match, stock options, and family forming benefits. They also provide 35 paid days off each year which can be used for vacation, holidays, and sick time.</li>
                                <li>This would be a fully remote position.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="skills" title="Skills I need to learn">
                            <ul>
                                <li>To work as a Data Visualization Engineer, I would need to learn data analytics skills with languages like Python and Java.</li>
                                <li>I would also need to learn Node.js and visualization libraries.</li>
                                <li>Chart building skills, use of color, typography skills would also be beneficial.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="goals" title="Goals in this role">
                            <ul>
                                <li>Learning more and mastering data analysis skills.</li>
                                <li>Leadership opportunities to lead initiatives and teams.</li>
                                <li>Mentoring other engineers.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="contact" title="Do I have the skillset?">
                            <ul>
                                <li>I have experience building web apps and front end sites. I have a passion for taking technical information and making it accessible for non-technical people.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="links" title="Relevant links">
                            <ul>
                                <li><a href="https://netflix.com/" target='_blank' rel='noreferrer'>Netflix Website</a></li>
                                <li><a href="https://jobs.netflix.com/jobs/315247072" target='_blank' rel='noreferrer'>Job Listing</a></li>
                            </ul>
                        </Tab>
                    </Tabs>

                </div>
            </div>

        </div>
    )
}

export default NetflixComponent
