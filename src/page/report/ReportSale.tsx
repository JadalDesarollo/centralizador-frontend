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
      <Box px={20}>
        <Text heading="h5" styles={{ minWidth: 120 }}>
          Imprimir desde las fechas
        </Text>
        <Box display="flex" align="center" mb={16}>
          <Text heading="h6" styles={{ minWidth: 120 }}>
            Desde:
          </Text>
          <TextField
            type="text"
            name="invoice-date_issue"
            sizes="small"
            maxWidth="250px"
            defaultValue="2023-10-01" // Establece el valor por defecto
          />
        </Box>
        <Box display="flex" align="center" mb={16}>
          <Text heading="h6" styles={{ minWidth: 120 }}>
            Hasta:
          </Text>
          <TextField
            type="text"
            name="invoice-date_due"
            sizes="small"
            maxWidth="250px"
            defaultValue="2023-10-31" // Establece el valor por defecto
          />
        </Box>
    <div>
      <Button onClick={downloadAndCachePDF}>Visualizar PDF</Button>
      {/* <button onClick={openPDFViewer}>Visualizar PDF</button> */}
      <br />
      <div>
        {pdfUrlCached ? (
          <iframe src={pdfUrlCached} width="100%" height="600"></iframe>
        ) : (
          <p>Cargando PDF...</p>
        )}
      
    </div>
    </div>
      </Box>
    </Card>
  );
}

export default ReportSale;
