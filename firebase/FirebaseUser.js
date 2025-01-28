import { collection, query, where, getDocs, addDoc} from "firebase/firestore";

import { db } from "@/firebase.config";

export const getUserByEmail = async (email) => {
  try {
    if (!email) throw new Error("Email is required to query the user.");

    // Reference the 'users' collection
    const usersCollectionRef = collection(db, "users");

    // Create a query to find the user by email
    const userQuery = query(usersCollectionRef, where("email", "==", email));

    // Execute the query
    const querySnapshot = await getDocs(userQuery);

    if (querySnapshot.empty) {
      console.log("No user found with the provided email.");
      return null; // Return null if no user is found
    }

    // Retrieve and return the user object
    const userDoc = querySnapshot.docs[0]; // Assuming only one user per email
    const userData = { id: userDoc.id, ...userDoc.data() };

    return userData;
  } catch (error) {
    console.log("Error fetching user by email: ", error.message);
    throw error; // Re-throw the error for further handling
  }
};

// get all users
export const GetAllUsers = async () => {
  try {
    // Reference the 'bookings' collection
    const collectionRef = collection(db, "users");

    // Create a query to filter bookings by email
    const q = query(collectionRef);

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map over the snapshot to get the booking data
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID if needed
      ...doc.data(), // Spread the document data
    }));

    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};


// get user bookings
export const GetAllUserAdmins = async () => {
  try {
    // Reference the 'bookings' collection
    const collectionRef = collection(db, "attribute");

    // Create a query to filter bookings by email
    const q = query(collectionRef);

    // Execute the query
    const querySnapshot = await getDocs(q);

    // Map over the snapshot to get the booking data
    const admins = querySnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID if needed
      ...doc.data(), // Spread the document data
    }));

    return admins;
  } catch (error) {
    console.error("Error fetching admins:", error);
    return [];
  }
};


// submit user feedback or message
export const SubmitMessage = async(data) => {
    try {
        const collectionRef = collection(db, "messages")
        const collectionDoc = await addDoc(collectionRef, data)
        return "success"
    } catch (error) {
        console.error("Error posting booking:", error);
        return error.message || "Failed to save message/feedback information";
    }
}




