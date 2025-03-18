import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase.config";

export const SubmitBooking = async (bookingData) => {
  try {
    const collectionRef = collection(db, "bookings");
    const collectionDoc = await addDoc(collectionRef, bookingData);
    return "success";
  } catch (error) {
    console.error("Error posting booking:", error);
    return error.message || "Failed to save booking information";
  }
};

// get user bookings
export const GetUserBookings = async (email) => {
  try {
    // Reference the 'bookings' collection
    const collectionRef = collection(db, "bookings");

    // Create a query to filter bookings by email
    const q = query(collectionRef, where("contactInfo.email", "==", email));

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map over the snapshot to get the booking data
    const bookings = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID if needed
      ...doc.data(), // Spread the document data
    }));

    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

// get user bookings
export const GetAllUserBookings = async (email) => {
  try {
    // Reference the 'bookings' collection
    const collectionRef = collection(db, "bookings");

    // Create a query to filter bookings by email
    const q = query(collectionRef);

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map over the snapshot to get the booking data
    const bookings = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID if needed
      ...doc.data(), // Spread the document data
    }));

    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

export const updateBookingStatus = async (
  bookingId,
  newStatus,
  setBookingTableData,
  surveyDate,
  surveyTime
) => {
  try {
    const bookingRef = doc(db, "bookings", bookingId);

    // Update using dot notation for nested fields
    await updateDoc(bookingRef, { 
      status: newStatus, 
      "survey.surveyDate": surveyDate, 
      "survey.surveyTime": surveyTime 
    });

    // Update local state without refetching
    setBookingTableData((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === bookingId
          ? {
              ...booking,
              status: newStatus,
              bookingInfo: {
                ...booking.survey,
                surveyDate: surveyDate,
                surveyTime: surveyTime
              }
            }
          : booking
      )
    );

    return "success";
  } catch (error) {
    console.error("Error updating booking status:", error);
  }
};


// export const deleteBooking = async (bookingId) => {
//   try {
//     await deleteDoc(doc(db, "bookings", bookingId));
//     return "success"
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     return error?.message || error
//   }
// };
