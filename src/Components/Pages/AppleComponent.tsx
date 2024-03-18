import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './Component.css'


const AppleComponent = () => {
    return (
        <div className='backgroundColor'>
            <header style={{ paddingLeft: 0 }}>
                <div className='p-5 text-center backgroundImage'
                    style={{ backgroundImage: `url(${require('../../Assets/Apple.jpeg')})`, height: 400 }}
                >
                    <div className='backgroundMask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Apple</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="container my-4 pb-5 divBackgroundColor rounded">
                <h3 className='text-center py-4'>Software Engineer (Data Apps & Frontend), Enterprise Systems</h3>
                <div className="container border divBackgroundColor rounded">
                    <Tabs
                        defaultActiveKey="why"
                        id="uncontrolled-tab-example"
                        className="mb-3 "
                        fill
                    >
                        <Tab eventKey="why" title="Why I want to work for Apple">
                            <ul>
                                <li>Apple is one of the largest and most valuable companies in the world, creating innovative products that serve to connect us with one another. Working for a company that operates globally at the scale that Apple does would be great to bolster my resume and show my capabilities.</li>
                                <li>I use Apple products every single day, so contributing to the software that drives these devices would be very impactful and would give me a great sense of satisfaction and achievement knowing that I helped develop software that millions of people use everyday, including my family members and friends.</li>
                                <li>Apple also provides some of the best benefits in the business.</li>
                                <li>They offer a wealth of different medical plans, with access to onsite doctors and nurses at major Apple campus wellness centers.</li>
                                <li>Apple offeres fertility treatments, paid paternity leave with a gradual return-to-work program, and paid time away to care for ill family members.</li>
                                <li>On the financial side, Apple allows any employee eligibility for stock grants and discounts when purchasing Apple stock. They also have 401k matching and multiple forms of income protection.</li>
                                <li>For personal development, Apple university gives employees access to classes and seminars to help employees understand Apple's culture, organization, and values. They also offer online classes to sharpen employee's business and software skills. Additionally, they offer tuition reimbursement for furthering formal education.</li>
                                <li>Apple is also committed to giving back. Apple will match employee donations to eligible organizations one-for-one. They will also donate $25 for every hour you volunterr at an eligible organization. Up to $10,000 per year per employee.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="skills" title="Skills I need to learn">
                            <ul>
                                <li>For the Software Engineer (Data Apps & Frontend), Enterprise Systems role at Apple, I would need to learn quite a few skills. Java, Python, databases like Oracle/Snowflake/SinglesStore/Teradata & NoSQL databases like Cassandra, Redis., virtualization software like Kubernetes and Docker, cloud methodologies and experience with AWS are all listed as required skills on the job description.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="goals" title="Goals in this role">
                            <ul>
                                <li>I would like to grow my skills as a frontend developer.</li>
                                <li>Learn to use languages like Python.</li>
                                <li>Learn to work with software such as Oracle, Docker, and AWS.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="contact" title="Do I have the skillset?">
                            <ul>
                                <li>I have some of the skills needed. I have experience using ReactJS, but not the expertise Apple is looking for, so more development in my React skills would be necessary.</li>
                                <li>I have experience working with TypeScript, but not with NodeJS or Redux.</li>
                                <li>I have experience developing user interfaces using HTML5 and CSS3, but maybe not rich user interfaces. Most of my work with UI has been on the more basic side.</li>
                                <li>I have experience testing browser-based solutions using the console and am familiar with version control using GIT.</li>
                            </ul>
                        </Tab>
                        <Tab eventKey="links" title="Relevant links">
                            <ul>
                                <li><a href="https://apple.com/" target='_blank' rel='noreferrer'>Apple Website</a></li>
                                <li><a href="https://jobs.apple.com/en-us/details/200530379/software-engineer-data-apps-frontend-enterprise-systems?team=SFTWR" target='_blank' rel='noreferrer'>Job Listing</a></li>
                            </ul>
                        </Tab>
                    </Tabs>

                </div>
            </div>

        </div>
    )
}

export default AppleComponent
