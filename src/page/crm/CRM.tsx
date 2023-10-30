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

const CRM = () => {
  return (
    <Flex direction="column" styles={{ width: "100%" }}>
      <GridContainer rowSpacing={1.5} columnSpacing={1.5} alignItems="stretch">
        <GridContainer spacing={1.5} alignItems="flex-end" noShifting={true}>
          <GridItem xs={12} md={12}>
            <CardTransaction
              title="Bienvenido"
              subtitle={
                <Text varient="body2" secondary>
                  <strong>Sistema Jadal</strong> Reportes
                </Text>
              }
              items={[
                {
                  icon: <Devices />,
                  id: 1,
                  total: 1,
                  title: "Reporte Acumulado por Día",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 2,
                  total: 1,
                  title: "Reporte de Ventas",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 1,
                  title: "Reporte Control Efectivo",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 1,
                  title: "Reporte de Bancos",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 1,
                  title: "Reporte Caja Chica",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 1,
                  title: "Reporte Cobranzas",
                  color: "success",
                },
                {
                  icon: <Devices />,
                  id: 3,
                  total: 1,
                  title: "Reporte Rentabilidad",
                  color: "success",
                },                                                                
              ]}
            />
          </GridItem>
        </GridContainer>
      </GridContainer>
    </Flex>
  );
};
export default CRM;
