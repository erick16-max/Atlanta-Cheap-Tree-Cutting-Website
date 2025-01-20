import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { bookingsColumns } from "./GridColumn";
import { DataGrid } from "@mui/x-data-grid";
import { GetUserBookings } from "@/firebase/Booking";
import AppContext from "@/context/AppContext";
import { user } from "@/constants/AppConstants";


export default function BookingDataTable() {
  
  const [loading, setLoading] = useState(false)
  const {userProfile, bookingTableData, setBookingTableData} = useContext(AppContext)


  const fetchBookings = async () => {
    try {
      setLoading(true)
      if(userProfile){
        
        const bookings = await GetUserBookings(userProfile?.email);
        if(bookings){
        const transformedBookings = bookings.map((booking, index) => {
          if(booking.user === user.AUTHENTICATED){
            const bookingObj = {
              id: index + 1, 
              uid: booking.id,
              budget: parseInt(booking.bookingInfo.budget, 10),
              address: booking.bookingInfo.address,
              surveyDate: booking.bookingInfo.surveyDate,
              surveyTime: booking.bookingInfo.surveyTime,
              status: booking.status
            }
  
            return bookingObj
          }else{
            return {}
          }
          
        });
        setBookingTableData(transformedBookings)
       }
  
      }
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
      fetchBookings()
      console.log("User Bookings")
  },[userProfile])

 

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={bookingTableData}
        columns={bookingsColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        disableColumnMenu
        loading={loading}
        sx={{
          "& .MuiDataGrid-root": {
            border: "1px solid #e0e0e0", // Outer border for the DataGrid
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "1px solid #e0e0e0", // Horizontal lines between rows
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #e0e0e0", // Line below column headers
          },
        }}
      />
  </Box>
  );
}