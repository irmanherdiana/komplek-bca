import './App.css';
import RekapKasMasukPerKK from './pages/kartu_iuran';
import Pengumuman from './pages/pengumuman';
import Stack from 'react-bootstrap/Stack';
import KritikSaran from './pages/kritik_saran';
import AgendaKomplek from './pages/agenda';
import SaldoKas from './pages/saldo_kas';
import {
  Row,
  Col
} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Tunggakan from './pages/tunggakan';
import SitePlan from './pages/site_plan';
import RekeningKas from './pages/info/rekening';
import TelpPenting from './pages/info/telp-penting';
import DownloadLinks from './pages/info/download-links';
import ProgressKas from './pages/progress_kas';
import SlideshowKomplek from './slideshow';
import WargaSummary from './pages/warga';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function App() {
  return (
    <>

      <Navbar bg="dark" variant="dark" sticky='top' expand={false} collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo-bca7.png"
              width="46"
              height="46"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Text className=''>
            BUMI CILEUNYI ASRI
          </Navbar.Text>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                Pilih informasi yang ingin dilihat
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#pengumuman">Pengumuman</Nav.Link>   
                <Nav.Link href="#agendakomplek">Agenda Komplek</Nav.Link>    
                <Nav.Link href="#siteplan">Peta Komplek</Nav.Link>   
                <Nav.Link href="#wargasummary">Jumlah Kepala Keluarga</Nav.Link>   
                <Nav.Link href="#saldokas">Saldo Kas</Nav.Link>   
                <Nav.Link href="#progresskas">Progres Penerimaan Kas</Nav.Link>  
                <Nav.Link href="#rekapkasmasukperkk">Kartu Iuran</Nav.Link>    
                <Nav.Link href="#tunggakan">Tunggakan Warga</Nav.Link>   
                <Nav.Link href="#rekeningkas">Rekening Pembayaran Iuran</Nav.Link>   
                <Nav.Link href="#kritiksaran">Kritik & Saran</Nav.Link>                   
                <Nav.Link href="#telpPenting" data-bs-dismiss="offcanvas">Informasi Penting Lainnya</Nav.Link>
                <Nav.Link href="#downloadlink">Download</Nav.Link>   
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div id="home"></div>
      <SlideshowKomplek></SlideshowKomplek>
      <div className='bg-white pt-3 pb-2'>
        <Container>
          <blockquote className="blockquote text-center">
            <p className="mb-3"><strong>Wilujeung Sumping</strong>, website ini dibuat oleh Pengurus komplek Bumi Cileunyi Asri untuk memfasilitasi warga
              mendapatkan informasi terkait pengelolaan komplek baik fasilitas fisik, kegiatan warga, keuangan,
              sarana promosi usaha warga dan lain sebagainya.</p>
            <footer className="blockquote-footer">Pengurus Komplek<cite title="Source Title">BCA</cite></footer>
          </blockquote>
        </Container>
      </div>
      <Container>
        <Row xs={1} className="g-4">
          <Col>
            <Stack gap={3} className="pt-3">
              <div id="pengumuman"></div>
              <Pengumuman />
              <div id="agendakomplek"></div>
              <AgendaKomplek />
              <div id="siteplan"></div>
              <SitePlan />
              <div id="wargasummary"></div>
              <WargaSummary />
            </Stack>

            <Stack gap={3} className="pt-3">
              <div id="saldokas"></div>
              <SaldoKas />
              <div id="progresskas"></div>
              <ProgressKas />
              <div id="rekapkasmasukperkk"></div>
              <RekapKasMasukPerKK />
              <div id="tunggakan"></div>
              <Tunggakan />
              <div id="rekeningkas"></div>
              <RekeningKas />
            </Stack>

            <Stack gap={3} className="pt-3">
              <div id="kritiksaran"></div>
              <KritikSaran/>
              <div id="telpPenting" />              
              <TelpPenting />
              <div id="downloadlink"></div>
              <DownloadLinks />
            </Stack>
          </Col>
        </Row>
        <Row>
          <Col className='text-center p-5'>
            <span>Hak Cipta Bumi Cileunyi Asri @ 2023</span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
