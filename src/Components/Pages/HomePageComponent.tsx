import React from 'react'
import { Card, Button } from 'react-bootstrap';
import Apple from '../../Assets/AppleLogo.png'
import Cisco from '../../Assets/Cisco-Logo.jpg'
import Rivian from '../../Assets/RivianLogo.png'
import Google from '../../Assets/GoogleLogo.png'
import Netflix from '../../Assets/NetflixLogo.jpg'
import './Component.css'
import { useNavigate } from "react-router-dom";


const HomePageComponent = () => {
    const navigate = useNavigate();

    const handleApple = () => {
        navigate('/Apple');
    }

    const handleCisco = () => {
        navigate('/Cisco');
    }
    const handleRivian = () => {
        navigate('/Rivian');
    }
    const handleGoogle = () => {
        navigate('/Google');
    }
    const handleNetflix = () => {
        navigate('/Netflix');
    }

    return (
        <div className='homeBackgroundColor'>
            <div className="container">
                <h1 className='text-center text-white py-5'>Jerrod's Dream Jobs</h1>

                <Card>
                    <Card.Img variant="top" className='homePageImage img-fluid' src={Apple} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Text className='text-center'>
                            Apple
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={handleApple} variant="primary">Learn More</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" className='homePageImage img-fluid' src={Cisco} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Text className='text-center'>
                            Cisco
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={handleCisco} variant="primary">Learn More</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" className='homePageImage img-fluid' src={Rivian} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Text className='text-center'>
                            Rivian
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={handleRivian} variant="primary">Learn More</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" className='homePageImage img-fluid' src={Google} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Text className='text-center'>
                            Google
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={handleGoogle} variant="primary">Learn More</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" className='homePageImage img-fluid' src={Netflix} style={{ width: "100%", height: "20rem" }} />
                    <Card.Body>
                        <Card.Text className='text-center'>
                            Netflix
                        </Card.Text>
                        <div className='d-flex justify-content-center'>
                            <Button onClick={handleNetflix} variant="primary">Learn More</Button>{' '}
                        </div>
                    </Card.Body>
                </Card>
                <br />

            </div>
        </div>


    );
}


export default HomePageComponent
