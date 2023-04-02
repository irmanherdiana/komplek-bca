import { Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function DownloadLinks() {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('/adartbca.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'adartbca.pdf';
                alink.click();
            })
        })
    }

    const onButtonClick1 = () => {
        // using Java Script method to get PDF file
        fetch('/lapkeu202301.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'lapkeu202301.pdf';
                alink.click();
            })
        })
    }    

    const onButtonClick2 = () => {
        // using Java Script method to get PDF file
        fetch('/lapkeu202302.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'lapkeu202302.pdf';
                alink.click();
            })
        })
    }    


    return (
        <>
            {/* <Link to="/adartbca.pdf" target="_blank" download>Download AD-ART Komplek BCA</Link> */}

            <ListGroup className='shadow bg-white rounded'>
                <ListGroup.Item>
                    <strong>DOWNLOAD</strong>
                </ListGroup.Item>
                <ListGroup.Item action onClick={onButtonClick} >
                    Download AD-ART Komplek BCA (DRAFT)
                </ListGroup.Item>
                <ListGroup.Item action onClick={onButtonClick1}>
                    Download Laporan Keuangan BCA Januari 2023
                </ListGroup.Item>
                <ListGroup.Item action onClick={onButtonClick2}>
                    Download Laporan Keuangan BCA Februari 2023
                </ListGroup.Item>                
                <ListGroup.Item>
                    <a href='https://instagram.com'>Instagram Photos Collection (Coming soon)</a>
                </ListGroup.Item>
            </ListGroup>
        </>

    );
}