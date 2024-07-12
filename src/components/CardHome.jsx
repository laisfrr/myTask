import Card from 'react-bootstrap/Card'

function CardHome(props) {
  return (
    <div className="card-home">
      <Card style={{ width: '18rem', margin: '1rem', height: '24rem' }}>
        <Card.Img variant="top" src={props.img} height="50%" />
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>{props.descricao}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardHome
