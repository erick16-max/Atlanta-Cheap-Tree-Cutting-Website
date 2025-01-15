import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase.config";

export const SubmitBooking = async(bookingData) => {
    try {
        const collectionRef = collection(db, "bookings")
        const collectionDoc = await addDoc(collectionRef, bookingData)
        return "success"
    } catch (error) {
        console.error("Error posting booking:", error);
        return error.message || "Failed to save booking information";
    }
}