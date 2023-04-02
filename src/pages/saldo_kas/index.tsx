import { Card, Row, Col } from "react-bootstrap";
import { WalletFill, EnvelopeOpen, PiggyBank, InfoCircleFill } from 'react-bootstrap-icons'
import Badge from 'react-bootstrap/Badge';
import DataSaldoKas from '../../data/saldo-bulan-lalu.json';

export default function SaldoKas() {

    return (
        <Row>
            <Col >
                <Card className="card-stats shadow bg-white rounded'">
                    <Card.Header>
                        <Row>
                            <Col className="d-flex justify-content-between">
                                <strong>SALDO KAS</strong>
                                <Badge bg="success">
                                    <h6>{DataSaldoKas[0].periode} {DataSaldoKas[0].tahun}</h6>
                                </Badge>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md="4" xs="2">
                                <WalletFill size={32} color='orange' />
                            </Col>
                            <Col md="8" xs="10" >
                                <div className="numbers">
                                    <span>Saldo Awal</span>
                                    <Card.Title>{DataSaldoKas[0].saldoBulanLalu.toLocaleString('en-us')}</Card.Title>
                                </div>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" xs="2">
                                <PiggyBank size={32} color='green' />
                            </Col>
                            <Col md="8" xs="10">
                                <div className="numbers">
                                    <span>Pemasukan</span>
                                    <Card.Title>{DataSaldoKas[0].pemasukan.toLocaleString('en-us')}</Card.Title>
                                </div>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" xs="2">
                                <EnvelopeOpen size={32} color='red' />
                            </Col>
                            <Col md="8" xs="10">
                                <div className="numbers">
                                    <span>Pengeluaran</span>
                                    <Card.Title>{DataSaldoKas[0].pengeluaran.toLocaleString('us-en')}</Card.Title>
                                </div>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col md="4" xs="2">

                            </Col>
                            <Col md="8" xs="9">
                                <span>Saldo akhir</span>
                                <Card.Title>{DataSaldoKas[0].saldo.toLocaleString('en-us')}</Card.Title>
                            </Col>                            
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-start">
                            <InfoCircleFill size={46} color="blue" className="me-2" />
                            <span className="info-text">Detail pengeluaran dan pemasukan bisa dilihat pada bagian Laporan Keuangan.</span>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    )
}