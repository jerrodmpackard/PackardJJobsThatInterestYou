import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './Component.css'

const RivianComponent = () => {
    return (
        <div>
            <header style={{ paddingLeft: 0 }}>
                <div className='p-5 text-center backgroundImage'
                    style={{ backgroundImage: `url(${require('../../Assets/Rivian3.webp')})`, height: 400 }}
                >
                    <div className='backgroundMask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Rivian</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container pt-4 pb-5">
                <h3 className='text-center py-4'>Senior Data Scientist & Front-End Developer</h3>
                <div className="container border">
                    <Tabs
                        defaultActiveKey="why"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="why" title="Why I want to work for Rivian">
                            <ul>
                                <li>Rivian has potential to be a big player in the EV space and take on Tesla, the current market leader, as they gain economies of scale and bring manufacturing costs down. I love their products and their mission of creating EVs that work with an adventurous lifestyle, which is something I’m starting to gain more interest in as I’m getting older.</li>
                                <li>The benefits that Rivian provides like mental health days, coaching and therapy for employees and family members, fertility care, 401k match, stock grants, the employee stock purchase program, and tuition assistance for furthering my education are all things that appeal to me when I am looking for a job.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="skills" title="Skills I need to learn">
                            <ul>
                                <li>This job would require that I learn a wealth of new skills. I would need to have expert level knowledge and experience with Python and Apache Spark and I would need 4+ years of experience with React, NextJS, TypeScript, and web apps and APIs.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="goals" title="Goals in this role">
                            <ul>
                                <li>Data analytics is something that has interested me for a while now and I would love to learn to go through massive amounts of data to create charts, graphs, and dashboards to deliver a meaningful representation of the data to end users and organizational stakeholders.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="contact" title="Do I have the skillset?">
                            <ul>
                                <li>I do not currently have the skillsets for this job. Much dedication and years of experience would need to take place learning Python and fleshing out my front end skills before I would be able to qualify for a role such as this.</li>
                                <li>I would also need a bachelors or masters degree in computer science, math, or physics.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="links" title="Relevant links">
                            <ul>
                                <li><a href="https://rivian.com/" target='_blank'>Rivian Website</a></li>
                                <li><a href="https://careers.rivian.com/careers-home/jobs/16670?lang=en-us" target='_blank'>Job Listing</a></li>
                            </ul>
                        </Tab>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default RivianComponent
