import {
  BusinessCenter,
  Devices,
  PersonOutline,
  TrendingUp,
} from "@mui/icons-material";
import CardTransaction from "../../components/card/statistics/CardTransaction";
import { Flex, GridContainer, GridItem } from "../../components/layout";
import { CardWidgetWeeklySales } from "../../components/card/widgets";
import { CardWidgetTotalSale } from "../../components/card/widgets";
import { CardWidgetRevenueReport } from "../../components/card/widgets";
import { CardWidgetSalesOverview } from "../../components/card/widgets";
import CardStatisticGrowth from "../../components/card/statistics/CardStatisticGrowth";
import TimelineDummy from "../../components/examples/TimelineDummy";
import MeetingDummy from "../../components/examples/MeetingDummy";
import CardMeetup from "../../components/card/advance/CardMeetup";
import CardPackagePlan from "../../components/card/advance/CardPackagePlan";
import GridInnerContainer from "../../components/layout/grid/GridInnerContainer";
import CardMint from "../../components/card/statistics/CardMint";
import CardRangerSession from "../../components/cards-page/statistics/CardRangerSession";
import CardRangerRating from "../../components/cards-page/statistics/CardRangerRating";
import { Text } from "../../ui";

const Chat = () => {
  return (
    <Flex direction="column" styles={{ width: "100%" }}>
      <GridContainer rowSpacing={1.5} columnSpacing={1.5} alignItems="stretch">
        <GridContainer spacing={1.5} alignItems="flex-end" noShifting={true}>
          <GridItem xs={12} md={12}>
            <CardTransaction
              title="Otros reportes"
              subtitle={
                <Text varient="body2" secondary>
                  {/* <strong>Enlaces de reportes</strong> */}
                  <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fMASTERPAGE+2020" label="Otros reportes internos" target="_blank" path="/apps/email/">
                    <h6>Reportes Internos</h6>
                  </a>
                <a href="http://200.37.70.234/Reports_SQLEXPRESS2015/Pages/Report.aspx?ItemPath=%2fConsultaExterna%2flogin" label="Otros reportes internos" target="_blank" path="/apps/email/">
                  <h6>Reportes Clientes Flota</h6>
                </a>  
                </Text>
              }
              items={[
                                                           
              ]}
            />
          </GridItem>
        </GridContainer>
      </GridContainer>
    </Flex>
  );
};
export default Chat;
