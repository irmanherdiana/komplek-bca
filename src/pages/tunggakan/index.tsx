import Avatar from "react-avatar";
import { Card, Col, Row, Badge, Table, Stack, ProgressBar, Container } from "react-bootstrap";
import { InfoCircleFill } from "react-bootstrap-icons";
import DataTunggakanIuran from '../../data/tunggakan-iuran.json';

export default function Tunggakan() {
    // var dataTunggakanIuran: any = DataTunggakanIuran;
    return (
        <>
            <Card className="shadow bg-white rounded">
                <Card.Header>
                    <Row>
                        <Col className="d-flex justify-content-between">
                            <strong>TUNGGAKAN IURAN</strong>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Berikut adalah data tunggakan pembayaran iuran per blok dari bulan januari 2023 sampai dengan hari ini.
                    </Card.Text>
                    <Stack gap={2} className='' >
                        <Row>
                            {DataTunggakanIuran.map((dataTunggakanIuran) => {
                                return (

                                    <Col xs={5} className='m-1 pt-4'>
                                        <Row>
                                            <Col xs={3} className="me-2">
                                                <Avatar name={dataTunggakanIuran.nama} size="32" round maxInitials={3} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <div className="border-bottom pb-1">
                                                    <strong className="d-block info-text">{dataTunggakanIuran.nama}</strong>
                                                </div>

                                                <span className="d-block info-text">{dataTunggakanIuran.tunggakanIuran}x Iuran</span>
                                                <span className="info-text">{dataTunggakanIuran.tunggakanSampah}x Iuran Sampah</span>

                                            </Col>
                                        </Row>
                                    </Col>

                                )
                            })}
                        </Row>
                    </Stack>
                </Card.Body >
                <Card.Footer>
                    <div className='d-flex justify-content-start'>
                        <InfoCircleFill size={46} color="blue" className='me-2' />
                        <span className='info-text'>Untuk data saldo tunggakan s/d desember 2022 bisa hubungi bendahara komplek.</span>
                    </div>
                </Card.Footer>
            </Card >
        </>
    )
}