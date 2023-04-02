import { Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { PeopleFill, PersonCheckFill } from 'react-bootstrap-icons'
import DataKritikSaran from '../../data/kritik-saran.json'

export default function KritikSaran() {
  const dataKritik = DataKritikSaran;
  return (
    <Card className='shadow bg-white rounded'>
      <Card.Header>
        <strong>SARAN & KRITIK</strong>
      </Card.Header>
      <div className='p-3 info-text'>
        {dataKritik.map((data: any, i: any) => {
          return (
            <Container key={i}>
              <Row className='pb-3 pt-3 me-4'>
                <div className='rounded bg-chat-color1 p-2 shadow-sm '>
                  <span>
                    {data.KritikSaran}
                  </span>
                  <div className="d-flex">
                    <PeopleFill size={30} color='red' className='me-2' />
                    <span className='info-text d-block text-secondary'>Warga {data.Timestamp}</span>
                  </div>
                </div>
              </Row>
              <Row>
              </Row>
              <Row className='ms-5 pb-3'>
                <div className='rounded chat-bg-color2 p-2 shadow-sm'>
                  <span>
                    {data.Tanggapan}
                  </span>

                  <div className="d-flex flex-row-reverse">
                    <PersonCheckFill size={32} color="green" className="ms-2" />
                    <span className='info-text d-block text-secondary'>Pengurus</span>
                  </div>
                </div>
              </Row>
            </Container>
          )
        })
        }
      </div>
      <Card.Footer>
        <Card.Text>
          Terimakasih atas kritik dan saran yang telah disampaikan, silahkan klik tombol dibawah jika ada ingin memberikan kritik dan saran secara online.
        </Card.Text>
        <Button variant="primary" href="https://forms.gle/TcP5KEugKZLp6mhw5">Input Kritik & Saran</Button>
      </Card.Footer>,
    </Card >
  );
}