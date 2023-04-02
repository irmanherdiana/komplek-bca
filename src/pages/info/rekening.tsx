import { Card, Col, Row, Image, Stack } from "react-bootstrap";

export default function RekeningKas() {
    return (
        <>
            <Card className="shadow bg-white rounded">
                <Card.Header>
                    <strong>
                        REKENING IURAN
                    </strong>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Pembayaran iuran bisa melalui rekening atau digital money berikut ini, bagi yang sudah membayar mohon untuk segera menyampaikan bukti transaksinya.
                    </Card.Text>
                </Card.Body>
                <Row xs={2} md={2} className="g-4 p-3">
                    <Col>
                        <Stack gap={2}>
                            <Card>
                                
                                <Card.Body>
                                    <Image src="/bca-alt.png" width={128} className="pb-3" />                                    
                                    <div className="fw-bold">1561450779</div>
                                    <div className="info-text fw-light">an. Irman Herdiana</div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Image src="/ovo.png" width={128} className="pb-3" />
                                    <div className="fw-bold">0895330801015</div>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Body>
                                    <Image src="/gopay.png" width={128} className="pb-3"/>
                                    <div className="fw-bold">0895330801015</div>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack gap={2}>
                            <Card>
                                <Card.Body>
                                    <Image src="/bri.png" width={128} className="pb-3"/>
                                    <div className="fw-bold">059801054038505</div>                                                                        
                                    <div className="info-text fw-light">an. Irman Herdiana</div>                                 
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Body>
                                    <Image src="/dana.png" width={128} className="pb-3"/>
                                    <div className="fw-bold">0895330801015</div>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                </Row>
            </Card>

        </>
    )
}