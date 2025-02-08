import { db } from "@/firebase.config";
import { getDocs, collection, query } from "firebase/firestore";



export const GetAllPortfolio = async (email) => {
    try {
      // Reference the 'bookings' collection
      const collectionRef = collection(db, "portfolio");
  
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
      console.error("Error fetching portfolio:", error);
      return [];
    }
  };
