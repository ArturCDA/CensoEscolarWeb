
import {
  Container,
  Carousel,
  Card,
  Row,
  Col
} from 'react-bootstrap';

function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
            alt="Estudantes em sala de aula"
          />

          <Carousel.Caption>
            <h3>Censo Escolar 2025</h3>
            <p>Conheça os dados da educação básica da Paraíba.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
            alt="Sala de aula"
          />

          <Carousel.Caption>
            <h3>Educação na Paraíba</h3>
            <p>Informações sobre as instituições de ensino do estado.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
            alt="Alunos estudando"
          />

          <Carousel.Caption>
            <h3>Dados educacionais</h3>
            <p>Explore os indicadores de matrículas escolares.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="py-5">
        <h2 className="text-center mb-4">
          Sobre o Censo Escolar
        </h2>

        <Row>
          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Instituições de Ensino</Card.Title>
                <Card.Text>
                  Consulte as escolas cadastradas na Paraíba.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Matrículas</Card.Title>
                <Card.Text>
                  Conheça os quantitativos de matrículas da educação básica.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-3">
            <Card className="h-100">
              <Card.Body>
                <Card.Title>Ranking</Card.Title>
                <Card.Text>
                  Veja as instituições com maior número de matrículas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
