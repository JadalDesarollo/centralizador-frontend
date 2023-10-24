import React, { useState } from 'react';
import axios from 'axios';
import { Avatar, Button, TextField, Select, SelectItem, Text } from "../../ui";
import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import { GridInnerContainer, GridItem } from "../../components/layout";

function ReportSale() {
  const [pdfUrlCached, setPdfUrlCached] = useState(null);

  const downloadAndCachePDF = async () => {
    const pdfUrl = 'http://127.0.0.1:8000/api/create-pdf-file';

    try {
      const response = await axios.get(pdfUrl, { responseType: 'blob' });
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      const pdfUrlCached = URL.createObjectURL(pdfBlob);

      setPdfUrlCached(pdfUrlCached);
    } catch (error) {
      console.error('Error al descargar el PDF', error);
    }
  };

  const openPDFViewer = () => {
    if (pdfUrlCached) {
      window.open(pdfUrlCached, '_blank');
    }
  };

  return (
    <Card padding="1.4rem">
    <div>
     <div>
        Desde:
        <input
          type="text"
          name="invoice-date_issue"
          defaultValue="2023-10-01"
        />
      </div>
      <div>
        Hasta:
        <input
          type="text"
          name="invoice-date_due"
          defaultValue="2023-10-31"
        />
      </div>
      <Button onClick={downloadAndCachePDF}>Visualizar PDF</Button>
      {/* <button onClick={openPDFViewer}>Visualizar PDF</button> */}
      <br />
      <p>ssssssssssss</p>
      <div>
        {pdfUrlCached ? (
          <iframe src={pdfUrlCached} width="100%" height="600"></iframe>
        ) : (
          <p>Cargando PDF...</p>
        )}
      
    </div>
    </div>
    </Card>
  );
}

export default ReportSale;
