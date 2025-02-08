import { getDocs, collection, updateDoc, query, where } from "firebase/firestore";
import { db } from "@/firebase.config";


// get user bookings
export const GetAllMessages = async (email) => {
    try {
      // Reference the 'bookings' collection
      const collectionRef = collection(db, "messages");
  
      // Create a query to filter bookings by email
      const q = query(collectionRef);
  
      // Execute the query
      const querySnapshot = await getDocs(q);
  
      // Map over the snapshot to get the booking data
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include the document ID if needed
        ...doc.data(), // Spread the document data
      }));
  
      return messages;
    } catch (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }
  };




export const fetchApprovedMessages = async () => {
  const messagesRef = collection(db, "messages");

  // Query messages where isApproved is true
  const q = query(messagesRef, where("isApproved", "==", true));

  try {
    const querySnapshot = await getDocs(q);
    const approvedMessages = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return approvedMessages; // Returns an array of approved messages
  } catch (error) {
    console.error("Error fetching approved messages:", error);
    return [];
  }
};
