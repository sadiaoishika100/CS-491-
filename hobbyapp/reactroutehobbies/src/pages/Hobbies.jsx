import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const hobbies = [
  { id: 1, title: 'Drawing', desc: 'I like to sketch and draw' },
  { id: 2, title: 'Cartoons', desc: 'I like to watch cartoons' },
  { id: 3, title: 'Listening to Music', desc: 'I like listening to music' },
  { id: 4, title: 'Coding', desc: 'I sometimes like doing code' },
];

const Hobbies = () => (
  <Row>
    {hobbies.map(hobby => (
      <Col key={hobby.id} md={6} lg={3} className="mb-4">
        <Card>

          <Card.Img variant="top" src={`https://picsum.photos/200/150?random=${hobby.id}`} />
          <Card.Body>
            <Card.Title>{hobby.title}</Card.Title>
            <Card.Text>{hobby.desc}</Card.Text>
    
            <Link to={`/hobbies/${hobby.id}`}>Learn More</Link>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default Hobbies;
