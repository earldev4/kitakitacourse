import {Container, Row, Col} from "react-bootstrap"
import {Link} from 'react-router-dom'
const FooterComponent = () => {
  return (
    <>
      <div className="footer py-5">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col lg="5">
              <h3 className="fw-bold">Kita-Kita Course</h3>
              <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem magni odio commodi culpa quod, laudantium quaerat. Deleniti magni totam beatae in dignissimos voluptatibus! Laudantium totam exercitationem enim fuga, repudiandae quidem.</p>
              <div className="no mb-1 mt-4">
                <Link className="text-decoration-none">
                  <i className="fa-brands fa-whatsapp"></i>
                  <p className="m-0">082269307069</p>
                </Link>
              </div>
              <div className="email">
                <Link className="text-decoration-none">
                  <i className="fa-regular fa-envelope"></i>
                  <p className="m-0">bojeb77@gmail.com</p>
                </Link>
              </div>
            </Col>
            <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-4">
              <h5 className="fw-bold">Menu</h5>
              <Link to="Homepage">Beranda</Link>
              <Link to="class">Kelas</Link>
              <Link to="testi">Testimoni</Link>
              <Link to="faq">FAQ</Link>
              <Link to="terms">Syarat Ketentuan</Link>
            </Col>
            <Col lg="4" className="mt-lg-0 mt-4">
              <h5 className="fw-bold mb-3">Langganan Untuk Info Menarik</h5>
              <div className="subscribe">
                <input type="text" placeholder="Langganan..." />
                <button className="btn btn-danger rounded-end rounded-0">Langganan</button>
              </div>
              <div className="social mt-3">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-github"></i>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-center px-md-0 px-3 fw-bold">&copy; {new Date().getFullYear()} Copyright Kita-Kita Course, All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FooterComponent