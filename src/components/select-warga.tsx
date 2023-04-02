import DataWarga from '../data/warga.json'

const wargas = DataWarga;

const WargaSelect = (
    {
        id,
        name,
        handleChange,
        selectedBlok
    }:any
) => (
    <select id={id} name={name} onChange={handleChange} value={selectedBlok}>
        {
            wargas.map((warga) => {
                return(
                    <option key={warga.blok} value={warga.blok}>{warga.blok} - {warga.nama}</option>
                )
            })
        }
    </select>
)
export default WargaSelect;

