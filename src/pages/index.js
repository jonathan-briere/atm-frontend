import { Typography } from "@mui/material";
import * as React from "react";
import { fetchGeoLocations } from "../action/geoAction";
import { Layout } from "../components/Layout";

const IndexPage = () => {
  const [locations, setLocations] = React.useState();

  React.useEffect(() => {
    fetchGeoLocations(setLocations);
  }, []);

  return (
    <Layout>
      <Typography
        sx={{ textAlign: "center" }}
        variant="h2"
        component="div"
        gutterBottom
      >
        ATM Frontend
      </Typography>
    </Layout>
  );
};

export default IndexPage;
