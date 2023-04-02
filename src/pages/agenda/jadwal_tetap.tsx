import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { GeoAlt } from 'react-bootstrap-icons';
import Items from './agenda-data'
function JadwalTetap() {
    return (
        <>
            <Card.Text>Berikut jadwal kegiatan tetap komplek yang diadakan oleh warga BCA</Card.Text>
            <Container>
                <Row className='border-bottom pt-2'>
                    <h5>Pengajian Anak - anak</h5>
                    <Col>
                        <span>Senin - Jum'at</span>
                        <h6>16.00 - 17.00</h6>
                    </Col>
                    <Col>
                        <GeoAlt className="d-inline m-2" />
                        <h6 className="d-inline">Masjid BCA</h6>
                    </Col>
                </Row>
                <Row className='border-bottom pt-2'>
                    <h5>Pengajian Malam Jum'at</h5>
                    <Col>
                        <span>Kamis Minggu Pertama</span>
                        <h6>18.00 - 20.00</h6>
                    </Col>
                    <Col>
                        <GeoAlt className="d-inline m-2" />
                        <h6 className="d-inline">Masjid BCA</h6>
                    </Col>
                </Row>
                <Row className='border-bottom pt-2'>
                    <h5>Pengajian Ibu - Ibu 1</h5>
                    <Col>
                        <span>Kamis</span>
                        <h6>16.00 - 17.00</h6>
                    </Col>
                    <Col>
                        <GeoAlt className="d-inline m-2" />
                        <h6 className="d-inline">BLOK D10</h6>
                    </Col>
                </Row>
                <Row>
                    <h5>Pengajian Ibu - Ibu 2</h5>
                    <Col>
                        <span>Jum'at</span>
                        <h6>16.00 - 17.00</h6>
                    </Col>
                    <Col>
                        <GeoAlt className="d-inline m-2" />
                        <h6 className='d-inline'>BLOK A2</h6>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default JadwalTetap;