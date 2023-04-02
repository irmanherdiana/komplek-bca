import { Card, Col, Container, Row } from 'react-bootstrap';
import DataWarga from '../../data/summary-warga.json';
import { PeopleFill, CreditCardFill, Trash3Fill, Bank, Houses, HouseLockFill, House  } from 'react-bootstrap-icons'

export default function WargaSummary() {
    let wargas = DataWarga;

    return (
        <>
            <Card>
                <Card.Header>
                    <strong>WARGA KOMPLEK</strong>
                </Card.Header>
                <Card.Body>
                    <Row>
                        {wargas.map((warga) => {
                            return (
                                <Col xs={6}>
                                    <Card className='p-2 m-1'>
                                        <div className='d-flex justify-content-between'>
                                            {
                                                warga.icon === 'warga' ? <Houses color='blue' size={46} /> : warga.icon === 'kk' ? <PeopleFill color='orange' size={46} /> :
                                                    warga.icon === 'iuran' ? <CreditCardFill color='green' size={46} /> : warga.icon === 'sampah' ? <Trash3Fill color='red' size={46} /> :
                                                        warga.icon === 'dev' ? <Bank size={46} /> : 
                                                        warga.icon === 'kosong' ? 
                                                        <HouseLockFill color='gray' size={46} /> : <></>
                                            }
                                            <span className='h4'>{warga.count}</span>
                                        </div>
                                        <div>
                                            <span className='text-secondary info-text'>{warga.caption}</span>
                                        </div>
                                    </Card>
                                </Col>
                            )})
                        }
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}