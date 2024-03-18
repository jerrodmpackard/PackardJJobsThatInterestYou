import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './Component.css'


const Google = () => {
    return (
        <div className='backgroundColor'>
            <header style={{ paddingLeft: 0 }}>
                <div className='p-5 text-center backgroundImage'
                    style={{ backgroundImage: `url(${require('../../Assets/Google.jpg')})`, height: 400 }}
                >
                    <div className='backgroundMask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Google</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container my-4 pb-5 divBackgroundColor rounded">
                <h3 className='text-center py-4'>Software Engineer III, Google Cloud AI</h3>
                <div className="container border">
                    <Tabs
                        defaultActiveKey="why"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="why" title="Why I want to work for Google">
                            <ul>
                                <li>Working at Google has been a dream of mine ever since I was in college. The culture there looks like a lot of fun and the campus has lots of nice features and benefits for onsite employees.</li>
                                <li>Google also offers great benefits packages including mental health care, workplace accommodations for physical and mental health concerns, onsite wellness centers, and second medical opinions for employees and their families.</li>
                                <li>Financially, Google provides 401k and regional retirement plans, student loan reimbursement, bonus and equity refresh opportunities, and annual cross-company pay equity analysis and adjustments. I want to make sure I set myself up for success financially when it comes time for retirement, so this would help me achieve that.</li>
                                <li>Google also provides paid time off for vacation, bereavement, jury duty, sick leave, parental leave, disability, and holidays. They offer a hybrid work model with remote work opportunities available, four “work from anywhere” weeks per year, and part-time work and job-sharing options just like Cisco.</li>
                                <li>For family support, Google offeres fertility and growing family support, parental leave and baby bonding leave, caregiver leave, elder care and support, backup childcare, and a survivor income benefit.</li>
                                <li>In case I would want to further my education and pursue a masters degree, Google provides educational reimbursement, a peer learning and coaching platform, donation matching, and time to volunteer for causes that matter to me.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="skills" title="Skills I need to learn">
                            <ul>
                                <li>Google requires 2 years of experience with data structures or algorithms, so I would need to learn data structures and algorithms in order to be successful in this role.</li>
                                <li>Google also requires 2 years of experience with software development in one or more programming languages, or 1 year of experience with an advanced degree in an industry setting. I would need a bit more work experience to qualify for this role.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="goals" title="Goals in this role">
                            <ul>
                                <li>AI is the next big thing in our world. Taking this job would give me valuable insight and training with regards to how AI models are built and designed. These would be excellent skills to possess and would bolster my resume, ensuring further growth in the next generation AI space.</li>
                                <li>Continuous learning and growth.</li>
                                <li>Leadership opportunities to take initiative and lead teams on projects.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="contact" title="Do I have the skillset?">
                            <ul>
                                <li>I do not currently have the skillsets for the job. I would need 2 years of experience working with data structures or algorithms, in addition to 2 years experience with one or more programming languages and 2 years experience with performance, large scale systems data analysis, visualization tools, and/or debugging.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="links" title="Relevant links">
                            <ul>
                                <li><a href="https://google.com/" target='_blank' rel='noreferrer'>Google Website</a></li>
                                <li><a href="https://www.google.com/about/careers/applications/jobs/results/143132292458390214-software-engineer-iii-google-cloud-ai" target='_blank' rel='noreferrer'>Job Listing</a></li>
                            </ul>
                        </Tab>
                    </Tabs>

                </div>
            </div>

        </div>
    )
}

export default Google
