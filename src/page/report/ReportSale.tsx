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
        Fecha Inicial: 
      </Text>
        <TextField
          type="text"
          name="invoice-date_issue"
          sizes="small"
          maxWidth="250px"
        />
      </Box>
      <Box display="flex" align="center" mb={16}>
      <Text heading="h6" styles={{ minWidth: 120 }}>
        Fecha Final: 
      </Text>
        <TextField
          type="text"
          name="invoice-date_due"
          sizes="small"
          maxWidth="250px"
        />
      </Box>
      <Button>
        Imprimir PDF
      </Button>
    </Box>
    </Card>
  )
}
