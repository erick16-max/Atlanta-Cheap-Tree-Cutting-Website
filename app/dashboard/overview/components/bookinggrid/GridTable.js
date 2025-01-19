import { Box } from "@mui/material";
import React from "react";
import { bookingsColumns } from "./GridColumn";
import { DataGrid } from "@mui/x-data-grid";


export default function BookingDataTable() {
  const [tableData, setTableData ] = React.useState([
    {
      id: 1,
      budget: 150,
      address: "812 Biene Streets, Atlanta",
      surveyDate: "20/05/2025",
      surveyTime: '10:30 AM',
    },
    {
      id: 2,
      budget: 120,
      address: "201 Rock Streets",
      surveyDate: "12/04/2025",
      surveyTime: '1:30 PM',
    },
    {
      id: 3,
      budget: 250,
      address: "1st Avenue Streets",
      surveyDate: "02/03/2025",
      surveyTime: '12:25 PM',
    }
  ])

 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={bookingsColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
  </Box>
  );
}