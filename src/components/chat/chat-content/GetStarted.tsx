import { ChatBubbleOutlineRounded } from "@mui/icons-material";
import { FC } from "react";
import { CustomAvatar, Text } from "../../../ui";
import Box from "../../box/Box";
import ColorBox from "../../box/ColorBox";

const GetStarted: FC<Props> = ({ handleOpenModal }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      align="center"
      justify="center"
      space={1.6}
      style={{ height: "100%", width: "100%" }}
    >
      <Text heading="h6" classes="xs-hidden md-visible" skinColor>
        Reportes
        <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fMASTERPAGE+2020" label="Otros reportes internos" path="/apps/email/">
          <h4>Reportes Internos</h4>
        </a>
        <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fConsultaExterna%2flogin" label="Otros reportes internos" path="/apps/email/">
          <h4>Reportes Clientes Flota</h4>
        </a>     
      </Text>
      <ColorBox
        px={16}
        py={6}
        className="overflow-hidden cursor-pointer md-hidden"
        borderRadius={"20px"}
        transparency={5}
        color="info"
        onClick={handleOpenModal}
      >
        <Text heading="h6">Enlaces</Text>
        <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fMASTERPAGE+2020" label="Otros reportes internos" path="/apps/email/">
          <h1>Reportes Internos</h1>
        </a>
        <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fConsultaExterna%2flogin" label="Otros reportes internos" path="/apps/email/">
          <h1>Reportes Clientes Flota</h1>
        </a>        
      </ColorBox>
    </Box>
  );
};
export default GetStarted;
interface Props {
  handleOpenModal: () => void;
}
