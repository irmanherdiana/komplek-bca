import { Card } from "react-bootstrap";
import { Chrono } from "react-chrono";
import { CardSubtitle } from "reactstrap";
import data from "./agenda-data";
import JadwalTetap from "./jadwal_tetap";

export default function Agenda() {
    return (
        <Card className="shadow bg-white rounded">
            <Card.Header>
                <strong>
                    KEGIATAN WARGA
                </strong>
            </Card.Header>
            <Card.Body>
                <JadwalTetap />
                <hr />
                <Card.Text>Berikut adalah agenda kegiatan komplek untuk 1 tahun kedepan</Card.Text>
                <Chrono
                    items={data}
                    mode="VERTICAL"
                    cardHeight={50}
                    hideControls
                    theme={
                        {
                            primary: 'Black',
                            secondary: 'White',
                            cardForeColor: "Red",
                        }
                    }
                    borderLessCards
                    fontSizes={
                        {
                            cardSubtitle: '1rem',
                            cardText: '2rem',
                            cardTitle: '1rem',
                        }
                    }
                />
            </Card.Body>
        </Card>
    );
}