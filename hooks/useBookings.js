import { useState, useEffect, useCallback, useContext } from "react";
import { deleteDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase.config";
import { GetUserBookings } from "@/firebase/Booking";
import { user } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";


const useBookings = () => {
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false)

  const {openDelete, setOpenDelete, userProfile, bookings, setBookings} = useContext(AppContext)

 

  // Function to fetch bookings
  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true);
      if (userProfile) {
        const bookings = await GetUserBookings(userProfile?.email);
        console.log(bookings)
         if(bookings){
               const transformedBookings = bookings.map((booking, index) => {
                 if(booking.user === user.AUTHENTICATED){
                   const bookingObj = {
                     id: booking.id, 
                     uid: booking.id,
                     budget: parseInt(booking.bookingInfo.budget, 10),
                     address: booking.bookingInfo.address,
                     surveyDate: booking.bookingInfo.surveyDate,
                     surveyTime: booking.bookingInfo.surveyTime,
                     status: booking.status,
                     email: booking?.contactInfo?.email,
                     fullname: booking?.contactInfo?.fullname,
                     phoneNumber: booking?.contactInfo?.phoneNumber,
                     notes: booking?.bookingInfo?.notes
                   }
         
                   return bookingObj
                 }else{
                   return {}
                 }
                 
               });
               setBookings(transformedBookings)
              }
      }
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  }, [userProfile]);

  // Function to delete a booking
  const deleteBooking = async (bookingId) => {
    try {
      setActionLoading(true)
      await deleteDoc(doc(db, "bookings", bookingId));
      // Optimistically update state instead of refetching
      setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
      setOpenDelete(false)
    } catch (error) {
      console.error("Error deleting booking:", error);
    }finally{
      setActionLoading(false)
    }
  };

  // Function to update a booking
  const updateBooking = async (bookingId, updatedBookingData) => {
    try {
      setActionLoading(true)
      const bookingRef = doc(db, "bookings", bookingId);

      const formattedUpdatedData = {
        "bookingInfo.budget": updatedBookingData.budget,
        "bookingInfo.address": updatedBookingData.address,
        "bookingInfo.surveyDate": updatedBookingData.surveyDate,
        "bookingInfo.surveyTime": updatedBookingData.surveyTime,
        "contactInfo.email": updatedBookingData.email,
        "contactInfo.fullname": updatedBookingData.fullname,
        "contactInfo.phoneNumber": updatedBookingData.phoneNumber,
        "bookingInfo.notes": updatedBookingData.notes,  // Update notes within bookingInfo as well.
        updatedAt: serverTimestamp() // Optional: Update timestamp
    }
      await updateDoc(bookingRef, formattedUpdatedData);
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === bookingId ? { ...booking, ...updatedBookingData } : booking
        )
      );
      return "success"
    } catch (error) {
      console.error("Error updating booking:", error);
    }finally{
      setActionLoading(false)
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  return { bookings, loading, actionLoading, fetchBookings, deleteBooking, updateBooking };
};

export default useBookings;
