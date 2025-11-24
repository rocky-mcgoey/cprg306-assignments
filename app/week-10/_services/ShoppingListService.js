import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  console.log("getItems called:", userId);

  const items = [];

  const itemCollectionRef = collection(db, "users", userId, "items");

  const snapshot = await getDocs(itemCollectionRef);
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });

  console.log("Items loaded:", items);
  return items;
}

export async function addItem(userId, newItem) {
  console.log("addItem called:", userId, newItem);

  const itemCollectionRef = collection(db, "users", userId, "items");

  const docRef = await addDoc(itemCollectionRef, newItem);

  console.log("Item created", docRef.id);
  return docRef.id;
}
