import DataKartuIuran from '../../data/kartu-iuran.json';
import Table from 'react-bootstrap/Table'
import { Badge, Card, Row, Col, Stack } from 'react-bootstrap';
import { InfoCircleFill } from 'react-bootstrap-icons'
import { useState } from 'react';
import { CheckCircleFill } from 'react-bootstrap-icons'
import WargaSelect from '../../components/select-warga';

export default function KartuIuran() {
    const [selectedBlok, setSelectedBlok] = useState([])
    const kartuIuran = DataKartuIuran;
    const onSelectionChange = (e: any) => {
        setSelectedBlok(e.target.value);
    }
    return (
        <Card className="shadow bg-white rounded">
            <Card.Header>
                <Row>
                    <Col className="d-flex justify-content-between">
                        <strong>KARTU IURAN</strong>
                        <Badge bg="success">
                            <h6>2023</h6>
                        </Badge>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Stack gap={2}>
                    <Card.Text>
                        Pilih nomor blok untuk melihat kartu iuran
                    </Card.Text>
                    <WargaSelect
                        id="ws1"
                        name="wargaselect1"
                        handleChange={onSelectionChange}
                        selectedBlok={selectedBlok}>
                    </WargaSelect>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>BULAN</th>
                                <th>IPL</th>
                                <th>SAMPAH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kartuIuran.filter((value) => {
                                return value.blok.toString() === selectedBlok.toString();
                            }).map((kartu, i) => (
                                <>
                                    <tr>
                                        <td>JAN</td>
                                        {(kartu.iplJanuari ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahJanuari ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>FEB</td>
                                        {(kartu.iplFebruari ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahJanuari ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>MAR</td>
                                        {(kartu.iplMaret ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahMaret ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>APR</td>
                                        {(kartu.iplApril ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahApril ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>MEI</td>
                                        {(kartu.iplMei ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahMei ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>JUNI</td>
                                        {(kartu.iplJuni ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahJuni ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>JUL</td>
                                        {(kartu.iplJuli ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahJuli ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>AUG</td>
                                        {(kartu.iplAgustus ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahAgustus ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>SEP</td>
                                        {(kartu.iplSeptember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahSeptember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>OKT</td>
                                        {(kartu.iplOktober ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahOktober ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>NOV</td>
                                        {(kartu.iplNovember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahNovember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                    <tr>
                                        <td>DES</td>
                                        {(kartu.iplDesember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                        {(kartu.sampahDesember ? (<td><CheckCircleFill color='green' size={24} /></td>) : (<td></td>))}
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </Table>
                </Stack>
            </Card.Body>
            <Card.Footer>
                <div className='d-flex justify-content-start'>
                    <InfoCircleFill size={46} color="blue" className='me-2' />
                    <span className='info-text'>Pembayaran yang diterima akan dikonfirmasi dan diinput terlebih dahulu sebelum tampil pada tabel kartu iuran.</span>
                </div>
            </Card.Footer>
        </Card>
    )
}