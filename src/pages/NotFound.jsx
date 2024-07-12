import { Card } from 'react-bootstrap'
import './NotFound.css'

function NotFound() {
  return (
    <main className="container-not">
      <Card
        style={{ border: '0' }}
        className="d-flex justify-content-around w-100"
      >
        <Card.Img src="/not-found.svg" height={800} />
        <Card.Footer
          style={{
            background: '#ffffff',
            border: '0',
            display: 'flex',
            justifyContent: 'end'
          }}
        >
          <Card.Text className="fs-6">
            Design by
            <Card.Link href="https://br.freepik.com"> FreePik</Card.Link>
          </Card.Text>
        </Card.Footer>
      </Card>
    </main>
  )
}

export default NotFound
