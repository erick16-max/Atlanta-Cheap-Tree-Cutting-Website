import { useState, useEffect, useCallback, useContext } from "react";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase.config";
import { GetUserBookings } from "@/firebase/Booking";
import { user } from "@/constants/AppConstants";
import AppContext from "@/context/AppContext";


const useBookings = () => {
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false)

  const {openDelete, setOpenDelete, userProfile, bookings, setBookings} = useContext(AppContext)

  console.log("hook bookings", bookings)

  // Function to fetch bookings
  const fetchBookings = useCallback(async () => {
    try {
      setLoading(true);
      if (userProfile) {
        const bookings = await GetUserBookings(userProfile?.email);
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
                     status: booking.status
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
      console.log('deleteing..', bookingId)
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
  const updateBooking = async (bookingId, updatedData) => {
    try {
      setActionLoading(true)
      const bookingRef = doc(db, "bookings", bookingId);
      await updateDoc(bookingRef, updatedData);
      setBookings((prev) =>
        prev.map((booking) =>
          booking.id === bookingId ? { ...booking, ...updatedData } : booking
        )
      );
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
