import { Box, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import AppContext from "@/context/AppContext";
import { GetAllUsers } from "@/firebase/FirebaseUser";
import { usersTableColumns } from "./UsersTableColumns";

export function Toolbar() {
    const {isMobile} = useContext(AppContext)
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={2}
      py={1}
      height={'100%'}
    >
      <Box width={"100%"} p={1} display={"flex"} alignItems={"center"} gap={2}>
        <GridToolbarFilterButton />
        {/* <GridToolbarExport /> */}
      </Box>
      <GridToolbarQuickFilter />
      
    </Box>
  );
}

export default function UserDataTableGrid() {
  const [loading, setLoading] = useState(false);
  const { userProfile, usersTableData, setUsersTableData } =
    useContext(AppContext);


  const fetchUsers = async () => {
    try {
      setLoading(true);
      const users = await GetAllUsers();
      if (users) {
        setUsersTableData(users);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
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
        rows={usersTableData}
        columns={usersTableColumns}
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
