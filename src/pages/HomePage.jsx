import { Container, Row, Col } from "react-bootstrap"
import HeroImage from "../assets/img/hero.png"
import {semuaKelas, dataSwiper} from "../data/index"
import {useNavigate} from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import FaqComponent from "../components/FaqComponent";
const HomePage = () => {
  let navigate = useNavigate()

  return (
    <>
      <header>
        <div className="homepage">
          <div className="awal w-100 min-vh-100 d-flex align-items-center">
            <Container >
              <Row className="header-box d-flex align-items-center">
                <Col lg="6">
                  <h1 className="mb-4">Temukan <br /><span>Bakat Kreatifmu</span><br /> Bersama kami</h1>
                  <p className="mb-4">Tingkatkan keterampilan Anda dari rumah! Temukan kursus online terbaik yang dirancang untuk membantu Anda menguasai berbagai bidang, dari pemrograman hingga desain grafis. Belajar tanpa batas! Jelajahi berbagai kursus online kami yang fleksibel dan interaktif, siap membantu Anda mencapai tujuan karier</p>
                  <button className="btn btn-danger btn-lg rounded-1 me-2" onClick={() => navigate("/class")}>Lihat Kelas</button>
                  <button className="btn btn-outline-danger btn-lg rounded-1 me-2">Lihat Promo</button>
                </Col>
                <Col lg="6" className="pt-lg-0 pt-5">
                  <img src={HeroImage} alt="hero-img" />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="kelas w-100 min-vh-100">
            <Container>
              <Row>
                <Col>
                  <h1 className="text-center fw-bold">Kelas Terbaru</h1>
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
              <Row>
                <Col className="text-center">
                  <button className="btn btn-success rounded-5 btn-lg" onClick={() => navigate("/class")}>Lihat Semua Kelas<i className="fa-solid fa-angles-right ms-3"></i></button>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="testimonial py-5">
            <Container>
              <Row>
                <Col>
                <h1 className="text-center fw-bold my-5">Testimoni</h1>
                </Col>
              </Row>
              <Row>
              <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >{dataSwiper.map((data)=>{
        return (
          <SwiperSlide key={data.id} className="shadow-sm slide-size">
            <p className="desc">{data.desc}</p>
            <div className="people"><img src={data.image} alt="" /><div><h5 className="mb-1">{data.name}</h5><p className="m-0 fw-bold">{data.skill}</p></div></div>
          </SwiperSlide>
        )
      })
      }
      </Swiper>
              </Row>
            </Container>
          </div>
          <FaqComponent></FaqComponent>
        </div>
      </header>
    </>
  )
}

export default HomePage