import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext, useEffect } from 'react';
import DataPengumuman from '../../data/pengumuman.json'
import { Accordion, AccordionContext, Container, useAccordionButton } from 'react-bootstrap';

export default function Pengumuman() {
  var pengumumans: any = DataPengumuman;

  return (
    <>
      <Card className='shadow bg-white rounded'>
        <Card.Header>
          <strong>PENGUMUMAN</strong>
        </Card.Header>
        <Card.Img variant="top" src={pengumumans.photoUrl} />
        <Card.Body>
          <Card.Title>Perihal : {pengumumans.perihal}</Card.Title>
          <Card.Subtitle className='text-secondary'>Tanggal : {pengumumans.tanggal}</Card.Subtitle>
          <hr />
          <Card.Text>
            {pengumumans.pengumumanP1}
          </Card.Text>
          <Card.Text>
            {pengumumans.pengumumanP2}
          </Card.Text>
          <p>Terimakasih atas perhatiannya</p>
          <p></p>
          <hr/>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span>Baca pengumuman sebelumnya</span>
              </Accordion.Header>
              <Accordion.Body>
                {pengumumans.previous.map((pengumuman: any) => {
                  return (
                    <>
                      <Card.Img variant="top" src={pengumuman.photoUrl} />
                      <Card.Body>
                        <Card.Title>Perihal : {pengumuman.perihal}</Card.Title>
                        <Card.Subtitle className='text-secondary'>Tanggal : {pengumuman.tanggal}</Card.Subtitle>
                        <hr />
                        <Card.Text>
                          {pengumuman.pengumumanP1}
                        </Card.Text>
                        <Card.Text>
                          {pengumuman.pengumumanP2}
                        </Card.Text>
                        <p>Terimakasih atas perhatiannya</p>
                      </Card.Body>
                    </>
                  )
                })
                }
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>

    </>
  );
}
