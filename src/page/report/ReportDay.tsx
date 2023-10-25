import React, { useState, useEffect } from 'react';
import { Avatar, Button, TextField, Select, SelectItem, Text } from "../../ui";
import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import { GridInnerContainer, GridItem } from "../../components/layout";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Asegúrate de importar los estilos
import { axios } from "../../api/axios";

import es from "date-fns/locale/es";
registerLocale("es", es);

export default function ReportDay() {
  const [pdfUrlCached, setPdfUrlCached] = useState(null);
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
  const [establishments, setEstablishments] = useState([]);
  const defaultValue = establishments.length > 0 ? establishments[establishments.length - 1].description : '';


  useEffect(() => {
    // Realizar la solicitud GET con Axios
    axios.get('http://127.0.0.1:8000/api/establishments')
      .then(response => {
        // Actualizar el estado con los datos recibidos
        setEstablishments(response.data);
        console.log('ssssssssss', response.data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);


  const handleDateChange = (date) => {
    setSelectedDateFrom(date);
  };

  const handleDateChange2 = (date) => {
    setSelectedDateTo(date);
  };

  const downloadAndCachePDF = async () => {
    try {
      const response = await axios.get("create-pdf-file", {
        responseType: "blob",
      });
      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrlCached = URL.createObjectURL(pdfBlob);
      setPdfUrlCached(pdfUrlCached);
    } catch (error) {
      console.error("Error al descargar el PDF", error);
    }
  };

  const title = 'Selecciona un local'; // Título del select

  const onSelect = (selectedValue) => {
    // Manejar la selección aquí
    console.log('Valor seleccionado:', selectedValue);
  };
  return (
    <Card padding="1.4rem">
      <Box px={20}>
      <Text heading="h3" styles={{ minWidth: 120 }}>
          Report acumulado por día
        </Text>
        <Text heading="h5" styles={{ minWidth: 120 }}>
          Imprimir desde las fechas
        </Text>
        <Box display="flex" align="center" mb={16}>
          <Text heading="h6" styles={{ minWidth: 120 }}>
            Desde:
          </Text>
          <DatePicker
            selected={selectedDateFrom}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            locale="es"
          />
        </Box>
        <Box display="flex" align="center" mb={16}>
          <Text heading="h6" styles={{ minWidth: 120 }}>
            Hasta:
          </Text>
          <DatePicker
            selected={selectedDateTo}
            onChange={handleDateChange2}
            dateFormat="dd/MM/yyyy"
            locale="es"
          />
        </Box>
    <Select defaultValue={defaultValue} label={title} onChange={onSelect} width="80%">
      {establishments.map((item) => (
        <SelectItem key={item.code} value={item.code} label={item.description} />
      ))}
    </Select>
    
        <div>
          <Box display="flex" align="center" mb={16} mt={16}>
            <Button onClick={downloadAndCachePDF}>Visualizar PDF</Button>
            <Button
              onClick={() =>
                (window.location.href =
                  axios.defaults.baseURL + "create-excel-file")
              }
              styles={{ marginLeft: "10px" }}
            >
              Descargar Excel
            </Button>
          </Box>
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
