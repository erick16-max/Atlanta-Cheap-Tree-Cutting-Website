import { db, auth } from "@/firebase.config";
import { deleteDoc, collection, doc } from "firebase/firestore";




export const deleteCollectionObj = async(collectionName, documentId) => {
    try {
        const docRef = doc(db, collectionName, documentId);
        await deleteDoc(docRef);
        return true
      } catch (error) {
        console.error("Error deleting document: ", error);
        return false; // Indicate failure
      }
}