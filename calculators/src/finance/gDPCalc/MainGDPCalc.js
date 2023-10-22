import React, { useState } from "react";
import { Card, Container, Divider, Typography } from "@mui/material";

function MainGDPCalc() {
  const [sectors, setSectors] = useState({
    consumption: 0,
    investment: 0,
    govtConsumption: 0,
    exports: 0,
    imports: 0,
  });
  const [sectors_GDP, setSectors_GDP] = useState({
    empCompensation: 0,
    proprietorsIncome: 0,
    rental: 0,
    corporateProfits: 0,
    interestIncome: 0,
    businessTaxes: 0,
    deprication: 0,
  });

  const totalGDP =
    Object.values(sectors).reduce((acc, value) => acc + value, 0) -
    2 * sectors.imports;

  const totalGDP_CostIncome = Object.values(sectors_GDP).reduce(
    (acc, value) => acc + value,
    0
  );

  const handleSectorChange = (sector, value) => {
    setSectors({ ...sectors, [sector]: parseFloat(value) || 0 });
  };

  const handleSectorChange_GDP = (sector, value) => {
    setSectors_GDP({ ...sectors_GDP, [sector]: parseFloat(value) || 0 });
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        GDP Calculator
      </Typography>
      <hr />
      <br />

      <Card sx={{ padding: 2, elevation: 3, marginBottom: 2 }}>
        <h2>Expenditure Approach</h2>
        <h3>GDP = P + I + C + E - Imports</h3>
        <div>
          <label>Personal Consumption:</label>
          <input
            type="number"
            value={sectors.consumption}
            onChange={(e) => handleSectorChange("consumption", e.target.value)}
          />
        </div>
        <div>
          <label>Gross Investment:</label>
          <input
            type="number"
            value={sectors.investment}
            onChange={(e) => handleSectorChange("investment", e.target.value)}
          />
        </div>
        <div>
          <label>Govt. Consumption:</label>
          <input
            type="number"
            value={sectors.govtConsumption}
            onChange={(e) =>
              handleSectorChange("govtConsumption", e.target.value)
            }
          />
        </div>
        <div>
          <label>Net Exports:</label>
          <input
            type="number"
            value={sectors.exports}
            onChange={(e) => handleSectorChange("exports", e.target.value)}
          />
        </div>
        <div>
          <label>Net Imports:</label>
          <input
            type="number"
            value={sectors.imports}
            onChange={(e) => handleSectorChange("imports", e.target.value)}
          />
        </div>
        <div>
          <h3>Total GDP: {totalGDP}</h3>
        </div>
      </Card>

      <Divider />

      <Card sx={{ padding: 2, elevation: 3 }}>
        <h2>Resource Cost-Income Approach</h2>
        <h3>
          GDP = Employee compensation + Proprietors' income + Rental income +
          Corporate profits + Interest income + Indirect business taxes +
          Deprication
        </h3>
        <div>
          <label>Employee compensation:</label>
          <input
            type="number"
            value={sectors_GDP.empCompensation}
            onChange={(e) =>
              handleSectorChange_GDP("empCompensation", e.target.value)
            }
          />
        </div>
        <div>
          <label>Proprietors' income:</label>
          <input
            type="number"
            value={sectors_GDP.proprietorsIncome}
            onChange={(e) =>
              handleSectorChange_GDP("proprietorsIncome", e.target.value)
            }
          />
        </div>
        <div>
          <label>Rental income:</label>
          <input
            type="number"
            value={sectors_GDP.rental}
            onChange={(e) => handleSectorChange_GDP("rental", e.target.value)}
          />
        </div>
        <div>
          <label>Corporate profits:</label>
          <input
            type="number"
            value={sectors_GDP.corporateProfits}
            onChange={(e) =>
              handleSectorChange_GDP("corporateProfits", e.target.value)
            }
          />
        </div>
        <div>
          <label>Interest income:</label>
          <input
            type="number"
            value={sectors_GDP.interestIncome}
            onChange={(e) =>
              handleSectorChange_GDP("interestIncome", e.target.value)
            }
          />
        </div>
        <div>
          <label>Indirect business taxes:</label>
          <input
            type="number"
            value={sectors_GDP.businessTaxes}
            onChange={(e) =>
              handleSectorChange_GDP("businessTaxes", e.target.value)
            }
          />
        </div>
        <div>
          <label>Deprication:</label>
          <input
            type="number"
            value={sectors_GDP.deprication}
            onChange={(e) =>
              handleSectorChange_GDP("deprication", e.target.value)
            }
          />
        </div>
        <div>
          <h3>Total GDP: {totalGDP_CostIncome}</h3>
        </div>
      </Card>
    </Container>
  );
}

export default MainGDPCalc;
