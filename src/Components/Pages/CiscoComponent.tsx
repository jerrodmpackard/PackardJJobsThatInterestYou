import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './Component.css'

const CiscoComponent = () => {
    return (
        <div className='backgroundColor'>
            <header style={{ paddingLeft: 0 }}>
                <div className='p-5 text-center backgroundImage'
                    style={{ backgroundImage: `url(${require('../../Assets/Cisco.jpeg')})`, height: 400 }}
                >
                    <div className='backgroundMask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Cisco</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container my-4 pb-5 divBackgroundColor rounded">
                <h3 className='text-center py-4'>Senior Software Engineer, AIOps</h3>
                <div className="container border">
                    <Tabs
                        defaultActiveKey="why"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="why" title="Why I want to work for Rivian">
                            <ul>
                                <li>Cisco seems like it has a great culture. Throughout my research on these top five jobs, Cisco consistently came up as one of the best places to work, with some of the highest job satisfaction in the industry. That sounds like a place I want to dedicate my time to.</li>
                                <li>Cisco has some of the coolest benefits. With things like employee stock purchase programs, annual bonuses, and tuition reimbursement.</li>
                                <li>Cisco offers perks like birthdays off, anniversary prizes after your 1st year, 5th year, and every 5 years after that. They also have employee discounts and generous PTO and holidays.</li>
                                <li>For professional development, Cisco has this awesome time swap program, where you can swap 20% of your job with someone else to learn new skills while still meeting your responsibilities. They also have a job swap program, where you can fulfill your career aspirations by swapping 100% of your job with someone on a temporary or permanent basis. That sounds so cool and I would love the opportunity to take advantage of these programs.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="skills" title="Skills I need to learn">
                            <ul>
                                <li>For this position with Cisco, I would need to learn machine learning systems and models including neural networks, decision trees, and other methodologies, in addition to the entire lifecycle of machine learning.</li>
                                <li>I would need to become fluent in machine learning frameworks such as SKLearn, XGBoost, PyTorch, or TensorFlow.</li>
                                <li>Java and Python languages will need to be learned.</li>
                                <li>And I will also need to learn to use Cisco’s internal tools, Apache Spark, TensorFlow, and other Big Data technologies for use with Machine Learning and Artificial Intelligence workflows.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="goals" title="Goals in this role">
                            <ul>
                                <li>In this position, I could master machine learning techniques and machine learning lifecycle</li>
                                <li>Become proficient in relevant machine learning frameworks and tools.</li>
                                <li>Successfully lead projects to completion.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="contact" title="Do I have the skillset?">
                            <ul>
                                <li>I have none of the skills needed to perform this job adequately. This position would take many years of training and studying for me to obtain and perform well at.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="links" title="Relevant links">
                            <ul>
                                <li><a href="https://cisco.com/" target='_blank' rel='noreferrer'>Cisco Website</a></li>
                                <li><a href="https://jobs.cisco.com/jobs/ProjectDetail/Senior-Software-Engineer-AIOps/1419050" target='_blank' rel='noreferrer'>Job Listing</a></li>
                            </ul>
                        </Tab>
                    </Tabs>

                </div>
            </div>
        </div>
    )
}

export default CiscoComponent
