import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
    return (
        <Navbar bg='dark' data-bs-theme='dark' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to='/'>Jerrod's Dream Jobs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/' >Home</Nav.Link>
                        <Nav.Link as={Link} to='/Apple' >Apple</Nav.Link>
                        <Nav.Link as={Link} to='/Cisco' >Cisco</Nav.Link>
                        <Nav.Link as={Link} to='/Rivian' >Rivian</Nav.Link>
                        <Nav.Link as={Link} to='/Google' >Google</Nav.Link>
                        <Nav.Link as={Link} to='/Netflix' >Netflix</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;