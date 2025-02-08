import React, { useState, useEffect, useContext } from "react";
import { Alert, Checkbox, FormControlLabel, Stack } from "@mui/material";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import AppContext from "@/context/AppContext";


const ApprovalCheckbox = ({ messageId, setOpen }) => {
  const [isApproved, setIsApproved] = useState(false);
  const {setSuccess, success} = useContext(AppContext)

  // Fetch current approval status from Firebase
  useEffect(() => {
    const fetchApprovalStatus = async () => {
      if (!messageId) return;

      const messageRef = doc(db, "messages", messageId);
      const messageSnap = await getDoc(messageRef);

      if (messageSnap.exists()) {
        const messageData = messageSnap.data();
        setIsApproved(messageData?.isApproved || false);
      }
    };

    fetchApprovalStatus();
  }, [messageId]);

  // Handle Checkbox Toggle
  const handleApprovalChange = async (event) => {
    const newApprovalStatus = event.target.checked;
    setIsApproved(newApprovalStatus);

    // Update Firestore document
    try {
      const messageRef = doc(db, "messages", messageId);
      await updateDoc(messageRef, { isApproved: newApprovalStatus });
      setSuccess("Feedback updated successfully!");
    } catch (error) {
      console.error("Error updating message:", error);
    }finally{
      setTimeout(() => {
        setSuccess("")
        setOpen(false)
      }, 3000)
    }
  };

  return (
    <Stack>
      {success && <Alert severity="success">{success}</Alert>}
      <FormControlLabel
      control={
        <Checkbox
          checked={isApproved}
          onChange={handleApprovalChange}
          color="primary"
        />
      }
      label="Approve Message"
    />
    </Stack>
  );
};

export default ApprovalCheckbox;
