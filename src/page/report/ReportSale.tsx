import React, { useState, useEffect } from "react";
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

function ReportSale() {
  const defaultEstablishment = "0  "; // Valor predeterminado 'TODOS'
  const [pdfUrlCached, setPdfUrlCached] = useState(null);
  const [selectedDateFrom, setSelectedDateFrom] = useState(new Date());
  const [selectedDateTo, setSelectedDateTo] = useState(new Date());
  const [selectedEstablishment, setSelectedEstablishment] = useState(defaultEstablishment);

  const [establishments, setEstablishments] = useState([]);
  const defaultValue = establishments.length > 0 ? establishments[establishments.length - 1].description : "";

  const user = localStorage.getItem('dsusuarios');

  useEffect(() => {
    axios
      .get("establishments")
      .then((response) => {
        // Actualizar el estado con los datos recibidos
        setEstablishments(response.data);
        console.log("establecimientos", response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
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
     
      const desde = selectedDateFrom
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "");
      const hasta = selectedDateTo.toISOString().slice(0, 10).replace(/-/g, "");
      const local = selectedEstablishment;
      
      const postData = {
        desde,
        hasta,
        local,
        user,
      };
      console.log("Datos enviados a través de postData:", postData);

      const response = await axios.post("report/pdf/day", postData, {
        responseType: "blob",
      });

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrlCached = URL.createObjectURL(pdfBlob);
      setPdfUrlCached(pdfUrlCached);
    } catch (error) {
      console.error("Error al descargar el PDF", error);
    }
  };

  const downloadExcel = async () => {
    try {
      // Obtiene la fecha actual
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Sumar 1 al mes, ya que en JavaScript los meses empiezan en 0 (enero es 0)
      const year = today.getFullYear();
  
      // Obtiene los datos de fecha y local del estado
      const desde = selectedDateFrom
        .toISOString()
        .slice(0, 10)
        .replace(/-/g, "");
      const hasta = selectedDateTo.toISOString().slice(0, 10).replace(/-/g, "");
      const local = selectedEstablishment;
  
      const postData = {
        desde,
        hasta,
        local,
      };
      console.log("Datos enviados a través de postData:", postData);
  
      const response = await axios.post("report/excel/day", postData, {
        responseType: "blob", // Configura el tipo de respuesta como blob
      });
  
      const excelBlob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }); 
      const excelUrlCached = URL.createObjectURL(excelBlob);
  
      const fileName = `reporte-diario-excel-${day}-${month}-${year}.xlsx`; // Agrega la fecha actual en el formato "dd-mm-yyyy" al nombre del archivo
  
      const a = document.createElement("a");
      a.href = excelUrlCached;
      a.download = fileName;
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error al descargar el Excel", error);
    }
  };
  
  

  const title = "Selecciona un local"; // Título del select

  const onSelect = (selectedValue) => {
    // Manejar la selección aquí
    setSelectedEstablishment(selectedValue);
    console.log("Valor seleccionado:", selectedValue);
  };

  return (
    <Card padding="1.4rem">
      <Box px={20}>
      <Text heading="h5" styles={{ minWidth: 120 }}>
          Reporte de venta
        </Text>        
        <Text heading="h6" styles={{ minWidth: 120 }}>
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
        <Text heading="h6" styles={{ minWidth: 120 }}>
            Local:
        </Text>
        <Select
            name="local"
            defaultValue={defaultValue}
            label={title}
            onChange={onSelect}
            width="100%"
          >
            {establishments.map((item) => (
              <SelectItem
                key={item.code}
                value={item.code}
                label={item.description}
              />
            ))}
          </Select>        
        <div>
          <Box display="flex" align="center" mb={16}>
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

export default ReportSale;
