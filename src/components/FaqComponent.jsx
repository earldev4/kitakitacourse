import {Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../data/index"
const FaqComponent = () => {
  return (
    <>
      <div className="faq">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Pertanyaan Yang Sering Ditanyakan</h1>
            </Col>
          </Row>
          <Row className="row-cols-lg-2 row-cols-1 g-4 pt-5">
            {faq.map((item) => {
              return(
                <Col key={item.id}>
                  <Accordion className="shadow-sm">
                    <Accordion.Item eventKey={item.eventKey}>
                      <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                          {item.desc}
                        </Accordion.Body>
                      </Accordion.Item>
                  </Accordion>
              </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default FaqComponent