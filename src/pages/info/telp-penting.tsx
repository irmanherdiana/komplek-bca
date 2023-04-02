import Avatar from "react-avatar";
import { Button, Card, Col, Row, Stack, Table } from "react-bootstrap";
import NomorPenting from '../../data/nomor-penting.json';

export default function TelpPenting() {
    const nomors = NomorPenting;

    return (
        <>
            <style type="text/css">
                {`
                    .btn-flat {
                        background-color: #25D366;
                        color: white;
                    }
                `}

            </style>
            <Card className="shadow bg-white rounded">
                <Card.Header>
                    <strong>INFO LAINNYA</strong>
                </Card.Header>
                <Card.Body>
                    <span>Berikut adalah nomor telp penting yang mungkin warga butuhkan untuk dihubungi</span>
                    {/* <Button href="https://wa.me/+62082124593553" variant="flat" size="sm" >WA 082124593553</Button> */}

                    <Stack gap={2} className='' >
                        <Row>
                            {nomors.map((nomor) => {
                                return (
                                    <Col xs={8} className='m-1 pt-2'>
                                        <Row>
                                            <Col xs={3} className="me-2">
                                                {/* <Avatar name={nomor.id} size="32" round maxInitials={3} /> */}
                                                <img src={nomor.img} className="rounded" height={46} width={46} ></img>
                                            </Col>
                                            <Col>
                                                <div className="border-bottom pb-1">
                                                    <span className="info-text">{nomor.label}</span>
                                                    <span className="d-block info-text">{nomor.no}</span>
                                                </div>
                                                <strong className="d-block info-text">{nomor.info}</strong>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Stack>
                </Card.Body>
            </Card>
        </>


    )
}