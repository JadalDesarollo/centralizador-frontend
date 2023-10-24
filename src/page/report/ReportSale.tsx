import { createRef, FC } from "react";
import { Avatar, Button, TextField, Select, SelectItem, Text } from "../../ui";
import Box from "../../components/box/Box";
import Card from "../../components/card/Card";
import Form from "../../components/form/Form";
import { GridInnerContainer, GridItem } from "../../components/layout";
export default function ReportSale() {
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
      <Button>
      <a href="http://127.0.0.1:8000/api/create-pdf-file" target="_blank" rel="noopener noreferrer">
        Visualizar PDF
      </a>
    </Button>
    </Box>
    </Card>
  )
}
