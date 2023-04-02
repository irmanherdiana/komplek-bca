import { Accordion, Badge, Card, Container, ProgressBar, Stack } from "react-bootstrap"
import ProgressIuran from '../../data/progress-iuran.json'

export default function ProgressKas() {
    var progressIuran: any = ProgressIuran;
    return (
        <Card>
            <Card.Header>
                <strong>
                    PENERIMAAN IURAN
                </strong>
            </Card.Header>
            <Card.Body>
                <Stack gap={2}>
                    <p>Berikut adalah progress peneriman iuran warga</p>
                    <Card className="p-3">
                        <div>
                            <Badge bg="success">
                                FEB
                            </Badge>
                        </div>
                        <div className="pb-2 pt-2">
                            <span className="d-inline">Penerimaan </span>
                            <strong className="d-inline">{progressIuran[0]['iplFebruari']}</strong>
                            <span className="d-inline">/</span>
                            <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                            <span className="d-inline"> KK Wajib Iuran</span>
                        </div>
                        <ProgressBar variant="warning" now={progressIuran[0]['iplFebruari']} label={`${progressIuran[0]['iplFebruari']}%`} />
                        <div className="pb-2 pt-3">
                            <span className="d-inline">Penerimaan </span>
                            <strong className="d-inline">{progressIuran[0]['sampahFebruari']}</strong>
                            <span className="d-inline">/</span>
                            <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                            <span className="d-inline"> KK Wajib Iuran Sampah </span>
                        </div>
                        <ProgressBar variant="info" now={progressIuran[0]['sampahFebruari']} label={`${progressIuran[0]['sampahFebruari']}%`} />
                    </Card>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                <span>Lihat progress setahun penuh</span>
                            </Accordion.Header>
                            <Accordion.Body>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            JAN
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplJanuari']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplJanuari']} label={`${progressIuran[0]['iplJanuari']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahJanuari']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahJanuari']} label={`${progressIuran[0]['sampahJanuari']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            FEB
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplFebruari']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplFebruari']} label={`${progressIuran[0]['iplFebruari']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahFebruari']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahFebruari']} label={`${progressIuran[0]['sampahFebruari']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            MAR
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplMaret']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplMaret']} label={`${progressIuran[0]['iplMaret']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahMaret']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahMaret']} label={`${progressIuran[0]['sampahMaret']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            APR
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplApril']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplApril']} label={`${progressIuran[0]['iplApril']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahApril']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahApril']} label={`${progressIuran[0]['sampahApril']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            MEI
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplMei']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplMei']} label={`${progressIuran[0]['iplMei']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahMei']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahMei']} label={`${progressIuran[0]['sampahMei']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            JUN
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplJuni']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplJuni']} label={`${progressIuran[0]['iplJuni']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahJuni']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahJuni']} label={`${progressIuran[0]['sampahJuni']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            JUL
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplJuli']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplJuli']} label={`${progressIuran[0]['iplJuli']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahJuli']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahJuli']} label={`${progressIuran[0]['sampahJuli']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            AUG
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplAgustus']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplAgustus']} label={`${progressIuran[0]['iplAgustus']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahAgustus']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahAgustus']} label={`${progressIuran[0]['sampahAgustus']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            SEP
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplSeptember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplSeptember']} label={`${progressIuran[0]['iplSeptember']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahSeptember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahSeptember']} label={`${progressIuran[0]['sampahSeptember']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            OKT
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplOktober']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplOktober']} label={`${progressIuran[0]['iplOktober']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahOktober']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahOktober']} label={`${progressIuran[0]['sampahOktober']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            NOV
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplNovember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplNovember']} label={`${progressIuran[0]['iplNovember']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahNovember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahNovember']} label={`${progressIuran[0]['sampahNovember']}%`} />
                                </Card>
                                <Card className="p-3 mt-3">
                                    <div>
                                        <Badge bg="success">
                                            DES
                                        </Badge>
                                    </div>
                                    <div className="pb-2 pt-2">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['iplDesember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibIuran']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran</span>
                                    </div>
                                    <ProgressBar variant="warning" now={progressIuran[0]['iplDesember']} label={`${progressIuran[0]['iplDesember']}%`} />
                                    <div className="pb-2 pt-3">
                                        <span className="d-inline">Penerimaan </span>
                                        <strong className="d-inline">{progressIuran[0]['sampahDesember']}</strong>
                                        <span className="d-inline">/</span>
                                        <strong className="d-inline">{progressIuran[0]['kkWajibSampah']}</strong>
                                        <span className="d-inline"> KK Wajib Iuran Sampah </span>
                                    </div>
                                    <ProgressBar variant="info" now={progressIuran[0]['sampahDesember']} label={`${progressIuran[0]['sampahDesember']}%`} />
                                </Card>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Stack >
            </Card.Body>
        </Card>
    )
}
