import { Container, Row, Col } from "react-bootstrap"
import {semuaKelas} from "../data/index"
import FaqComponent from "../components/FaqComponent"
const ClassPage = () => {
  return (
    <>
      <div className="kelas-page">
        <div className="kelas min-vh-100">
          <Container>
            <Row>
              <Col>
                <h1 className="fw-bold text-center">Semua Kelas</h1>
                <p className="text-center">Mulai dari Pemrograman untuk Pemula yang mengajarkan dasar-dasar coding dengan Python dan JavaScript, hingga Desain Grafis Kreatif di mana Anda bisa menguasai alat seperti Adobe Illustrator dan Photoshop. Jika Anda ingin membangun situs web interaktif, ikuti Pengembangan Web Lanjutan yang membahas HTML, CSS, dan JavaScript. Ingin mengelola proyek digital dengan lebih efektif? Daftar di Manajemen Proyek Digital. Selain itu, Anda bisa memperdalam pengetahuan di bidang Pemasaran Digital, atau mengasah keterampilan Data Science dan Analisis untuk mengolah data besar.</p>
              </Col>
            </Row>
            <Row>
              {semuaKelas.map((kelas)=>{
                    return (
                      <Col key={kelas.id} className="shadow rounded">
                        <img src={kelas.image} alt="unsplash.com" />
                        <div className="star mb-2 px-3">
                          <i className={kelas.star1}></i>
                          <i className={kelas.star2}></i>
                          <i className={kelas.star3}></i>
                          <i className={kelas.star4}></i>
                          <i className={kelas.star5}></i>
                        </div>
                        <h5 className="mb-5 px-3">{kelas.title}</h5>
                        <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                          <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                          <button className="btn btn-danger rounded-1 m-2">{kelas.buy}</button>
                        </div>
                      </Col>
                    )
                  })}
            </Row>
          </Container>
        </div>
      </div>
      <FaqComponent></FaqComponent>
    </>
  )
}

export default ClassPage