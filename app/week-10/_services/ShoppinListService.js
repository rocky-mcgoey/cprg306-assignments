import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

  const itemCollectionRef = collection(db, "users", userId, "items");

  const snapshot = await getDocs(itemCollectionRef);
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  return items;
}

export async function addItem(userId, newItem) {
  const itemCollectionRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemCollectionRef, newItem);

  return docRef.id;
}
