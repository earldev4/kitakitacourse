import { Container, Row, Col } from "react-bootstrap"
import { dataSwiper } from "../data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import FaqComponent from "../components/FaqComponent"


import { Pagination } from 'swiper/modules';
const TestiPage = () => {
  return (
    <>
      <div className="testi-page min-vh-100 pb-5">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center">Testimoni</h1>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
    </>
  )
}

export default TestiPage