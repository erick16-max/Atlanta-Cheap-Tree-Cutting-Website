import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { adminBookingsColumns } from "./BookingTableColumn";
import { DataGrid } from "@mui/x-data-grid";
import { GetAllUserBookings } from "@/firebase/Booking";
import AppContext from "@/context/AppContext";
import { user } from "@/constants/AppConstants";
import { Toolbar } from "../../users/components/UsersDataTable";

export default function AdminBookingDataTable() {
  const [loading, setLoading] = useState(false);
  const { userProfile, bookingTableData, setBookingTableData } = useContext(AppContext);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      if (userProfile) {
        const bookings = await GetAllUserBookings(userProfile?.email);
        if (bookings) {
          const transformedBookings = bookings.map((booking, index) => {
              const bookingObj = {
                id: index + 1,
                uid: booking?.id,
                fullname: booking?.contactInfo?.fullname,
                budget: parseInt(booking?.bookingInfo?.budget, 10),
                address: booking?.bookingInfo?.address,
                surveyDate: booking?.bookingInfo?.surveyDate,
                surveyTime: booking?.bookingInfo?.surveyTime,
                status: booking?.status,
                user : booking?.user
              };

              return bookingObj;
           
          });
          setBookingTableData(transformedBookings);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [userProfile]);

 

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
        rows={bookingTableData}
        columns={adminBookingsColumns}
        pageSize={5}
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
