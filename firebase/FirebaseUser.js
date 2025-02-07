import { collection, query, where, getDocs, addDoc, doc, updateDoc, arrayUnion, setDoc, getDoc} from "firebase/firestore";

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



export const updateUserStatus = async (userId, email, newStatus, setUsersTableData) => {
  try {
    const userRef = doc(db, "users", userId);

    if (newStatus === "Admin") {
      const adminRef = doc(db, "attribute", "k3urLcvW0BZuo2YIrS5s "); // Document storing admin users
      
      // Check if the admins document exists
      const adminDoc = await getDoc(adminRef);
      if (!adminDoc.exists()) {
        // Create the document with the first admin if it doesn't exist
        await setDoc(adminRef, { admins: [email] });
      } else {
        // Add the email to the list of admins
        await updateDoc(adminRef, {
          admins: arrayUnion(email),
        });
      }

      // Update the user to isAdmin: true
      await updateDoc(userRef, { isAdmin: true });
      console.log(`User ${email} is now an admin`);
    } else {
      // If not Admin, only update the status
      await updateDoc(userRef, { isAdmin: false });
    }
    
    // Update the user status
    await updateDoc(userRef, { status: newStatus });
    // **Update local state without refetching**
    setUsersTableData((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isAdmin: newStatus === "Admin" ? true : false, } : user
      )
    );
    return "success"

  } catch (error) {
    console.error("Error updating user status:", error);
  }
};

export const updateUserInfo = async (userId, displayName, email, phoneNumber) => {
  try {
    // Update Firestore users collection
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    let updateData = { displayName, phoneNumber };

    // If secondary email does not exist, create it
    if (!userSnap.exists() || !userSnap.data().secondaryEmail) {
      updateData.secondaryEmail = email;
    }

    // Update Firestore users collection
    await updateDoc(userRef, updateData);

    console.log("User updated successfully!");
    return "success";
  } catch (error) {
    console.error("Error updating user:", error);
    return { success: false, error: error.message };
  }
};


