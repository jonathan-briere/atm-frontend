import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

import { Layout } from "../components/Layout";
import { fetchGeoLocation } from "../action/geoAction";
import { Listing } from "../components/Listing";

const Location = () => {
  const [location, setLocation] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchGeoLocation(e.target[0].value, setLocation);
  };

  return (
    <Layout>
      <Box sx={{ textAlign: "center" }}>
        <form onSubmit={onSubmit}>
          <TextField
            label="IP"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "40ch" }}
          />
          <Button
            type="submit"
            sx={{ padding: "16px 25px", marginTop: 0.9 }}
            variant="contained"
          >
            Find
          </Button>
        </form>
      </Box>
      {location.length > 0 && <Listing locations={location} />}
    </Layout>
  );
};

export default Location;
