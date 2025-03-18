import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { bookingsColumns } from "./GridColumn";
import { DataGrid } from "@mui/x-data-grid";
import { GetUserBookings } from "@/firebase/Booking";
import AppContext from "@/context/AppContext";
import { user } from "@/constants/AppConstants";
import { Toolbar } from "@/app/admin/users/components/UsersDataTable";
import useBookings from "@/hooks/useBookings";
import { isArray } from "@/util/LogicFunctions";


export default function BookingDataTable() {
  
  const {bookings, loading} = useBookings()

  console.log(bookings)

  const cleanedRows = isArray(bookings) && bookings?.length > 0 ? bookings.filter(row => Object.keys(row).length !== 0) : [];
  

  return (
    <Box
          sx={{
            minHeight: 200,
            width: "100%",
            overflowX: "auto", 
            height: 'auto',
          }}
        >
          <DataGrid
            key={bookings?.length}
            rows={cleanedRows}
            columns={bookingsColumns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            disableColumnMenu
            autoHeight
            loading={loading}
             slots={{ toolbar: Toolbar }}
                    slotProps={{
                      toolbar: {
                        showQuickFilter: true,
                      },
                    }}
            sx={{
              "& .MuiDataGrid-root": {
                border: "1px solid #eeeeee", // Outer border for the DataGrid
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid #eeeeee", // Horizontal lines between rows
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "1px solid #eeeeee", // Line below column headers
              },
              "& .MuiDataGrid-virtualScroller": {
                overflowX: "auto !important", // Allow horizontal scrolling for large content
              },
            }}
          />
        </Box>
  );
}