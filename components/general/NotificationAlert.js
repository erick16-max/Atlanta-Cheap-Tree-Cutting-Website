import { useEffect, useState } from "react";
import { addDoc, onSnapshot, collection, where, query } from "firebase/firestore";
import { Snackbar, Alert } from "@mui/material";
import { db, auth } from "@/firebase.config";

export default function NotificationAlert() {
  const [notification, setNotification] = useState(null);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) return;
    // filter users bookings
    const userBookingsRef = query(
        collection(db, "bookings"),
        where("contactInfo.email", "==", user.email) 
      );

      const unsubscribe = onSnapshot(
        userBookingsRef,
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const booking = change.doc.data();
  
            if (change.type === "modified") {
              handleStatusChange(booking);
            }
          });
        },
        (error) => {
          console.error("Error listening to user bookings:", error);
        }
      );
  

    return () => unsubscribe();
  }, []);

  const handleStatusChange = (booking) => {
    const { status, email } = booking;

    // Define notification logic based on status
    let message;
    switch (status) {
      case "pending":
        message = "Your booking was send successfully";
        break;
      case "rejected":
        message = "Your booking has been Cancelled.";
        break;
      case "completed":
        message = "Your booking has been completed.";
        break;
      default:
        return; // Ignore other statuses
    }

    const notification = {
      message,
      email: booking?.contactInfo?.email,
      status,
      timestamp: new Date(),
      read: false
    };

    setNotification(notification);
    setAlertOpen(true);

    saveNotification(notification);
  };

  const saveNotification = async (notification) => {
    try {
      const notificationsRef = collection(db, "notifications");
      await addDoc(notificationsRef, notification);
    } catch (error) {
      console.error("Error saving notification:", error);
    }
  };

  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={10000}
      onClose={() => setAlertOpen(false)}
    >
      <Alert onClose={() => setAlertOpen(false)} severity="info" sx={{ width: "100%" }}>
        {notification?.message}
      </Alert>
    </Snackbar>
  );
}
