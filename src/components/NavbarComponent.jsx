import { useState, useEffect } from "react"
import { Navbar, Container, Nav} from "react-bootstrap"
import { navLinks } from "../data"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false)

  const changeBackgroundNavbar = () => {
    if(window.scrollY > 10){
      setChangeColor(true)
    } else{
      setChangeColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundNavbar)
  })

  return (
    <>
      <Navbar expand="lg" className={changeColor?"color-active":""}>
        <Container>
          <Navbar.Brand  href="#home">&lt;Kita-Kita Course&gt;</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => {
                 return (
                    <div className="nav-link" key={link.id}>
                      <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>{link.text}</NavLink>
                    </div>
                 )
                })}
            </Nav>
            <div className="text-center">
              <button className="btn btn-outline-danger rounded-1">Kuy Join!</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent