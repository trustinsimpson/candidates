import Drop from './dropdown';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import fetchData from './fetchData';

fetchData();

function App() {
  return (
    <Container fluid>
  <Row className='fullScreen'>
    <Col className='fullScreen'><Drop/></Col>
  </Row>
</Container>
   
   
  );
}

export default App;
