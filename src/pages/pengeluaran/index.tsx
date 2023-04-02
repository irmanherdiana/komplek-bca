import { Card } from 'react-bootstrap';
import DataPengeluaranBulanan from '../../data/pengeluaran-bulanan.json';

export default function PengeluaranBulanan() {
    return (
        <Card>
            <table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Keterangan</td>
                        <td>Nominal</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        DataPengeluaranBulanan.map((pengeluaran) => {
                            return (
                                <tr>
                                    <td></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Card>
    )
}