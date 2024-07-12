import { Accordion, Alert, Button, Container } from 'react-bootstrap'

function Ajuda() {
  return (
    <main>
      <Container className="mt-4">
        <h1>Ajuda</h1>
        <hr />
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Sobre o nosso sistemas</Accordion.Header>
            <Accordion.Body>MyTask</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Sobre a empresa</Accordion.Header>
            <Accordion.Body>
              Nós desenvolvemos soluções focadas em produtividade
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button className="mt-2 me-2" size="sm">
          Clique aqui!
        </Button>
        <Button className="mt-2 me-2" variant="secondary" size="sm">
          Entre em contato!
        </Button>
        <Button className="mt-2 me-2" variant="success" size="sm">
          Enviar
        </Button>
        <Alert variant="warning">Estamos em Manutenção</Alert>
      </Container>
    </main>
  )
}

export default Ajuda
