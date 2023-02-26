import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../../Images/dncLogo.png';
import './NavigationStyle.css'
function Navigation() {
  return (
    <div className='NaviDiv'>
       <Navbar bg="red" variant="light" className='NavSet'>
        <Container>
            <img src={logo} alt="Auto Service" className='logo'/>
            <Navbar.Brand className='brandName'>News</Navbar.Brand>
          <div className='navLink'>
          <Nav className="me-auto">
            <Nav.Link href="/" className='link'>Home</Nav.Link>
            <Nav.Link href="#!" className='link'>Sport</Nav.Link>
            <Nav.Link href="#!" className='link'>Entertainment & Arts</Nav.Link>
            <Nav.Link href="#!" className='link'>Health</Nav.Link>
            <Nav.Link href="#!" className='link'>Tech & Science</Nav.Link>
            <Nav.Link href="#!" className='link'>Business</Nav.Link>
            <Nav.Link href="#features" className='link'>
            <i className='fas fa-user-alt' style={{fontSize:'18px',marginRight:'10px'}}></i>SignUp</Nav.Link>
          </Nav>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation
