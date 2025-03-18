import { useEffect, useState } from "react";
import { addDoc, onSnapshot, collection, where, query } from "firebase/firestore";
import { Snackbar, Alert } from "@mui/material";
import { db, auth } from "@/firebase.config";
import { sendEmail } from "@/util/sendEmail";

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
        message = "Your booking was saved/updated successfully!";
        break;
      case "rejected":
        message = "Your booking has been Cancelled/Rejected.Call us for more enquiry.";
        break;
      case "completed":
        message = "Your booking has been approved for survey.";
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
      // await sendEmail(notification?.email, notification?.message)
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
