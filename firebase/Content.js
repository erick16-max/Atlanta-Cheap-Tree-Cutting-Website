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



  export const handleDeleteContent = async (id, collectionName) => {
    try {
      // Get a reference to the specific document in the portfolio collection
      const docRef = doc(db, collectionName, id);
  
      // Delete the document
      await deleteDoc(docRef);
      
      // Optionally, remove the deleted item from local state
      setPortfolioData((prevData) => prevData.filter((item) => item.id !== id));

      return "success"
      
    } catch (error) {
      console.error("Error deleting portfolio: ", error);
      return error
    }
  };
  
