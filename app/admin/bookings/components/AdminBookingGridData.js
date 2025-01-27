import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { adminBookingsColumns } from "./BookingTableColumn";
import { DataGrid } from "@mui/x-data-grid";
import { GetAllUserBookings } from "@/firebase/Booking";
import AppContext from "@/context/AppContext";
import { user } from "@/constants/AppConstants";

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
                uid: booking.id,
                fullname: booking?.contactInfo?.fullname,
                budget: parseInt(booking.bookingInfo.budget, 10),
                address: booking.bookingInfo.address,
                surveyDate: booking.bookingInfo.surveyDate,
                surveyTime: booking.bookingInfo.surveyTime,
                status: booking.status,
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
    console.log("User Bookings");
  }, [userProfile]);

  console.log(bookingTableData)

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        overflowX: "auto", // Enable horizontal scrolling
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
        loading={loading}
        sx={{
          "& .MuiDataGrid-root": {
            border: "1px solid rgb(230, 25, 25)", // Outer border for the DataGrid
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #eeeeee", // Horizontal lines between rows
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #bebebe", // Line below column headers
          },
          "& .MuiDataGrid-virtualScroller": {
            overflowX: "auto !important", // Allow horizontal scrolling for large content
          },
        }}
      />
    </Box>
  );
}
