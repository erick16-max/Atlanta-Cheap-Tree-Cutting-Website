import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import AppContext from "@/context/AppContext";
import { user } from "@/constants/AppConstants";
import { Toolbar } from "../../users/components/UsersDataTable";
import { GetAllMessages } from "@/firebase/Feedbacks";
import { AlertGridColumns } from "./AlertsGridColumn";

export default function AdminAlertDataTable() {
  const [loading, setLoading] = useState(false);
  const { userProfile, feedbackTableData, setFeedbackTableData } =
    useContext(AppContext);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      if (userProfile) {
        const messages = await GetAllMessages(userProfile?.email);
        if (messages) {
         
          setFeedbackTableData(messages);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [userProfile]);

  return (
    <Box
      sx={{
        minHeight: 200,
        width: "100%",
        overflowX: "auto",
        height: "auto",
      }}
    >
      <DataGrid
        rows={feedbackTableData}
        columns={AlertGridColumns}
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
