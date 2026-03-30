import {
  getDatabase,
  ref,
  push,
  serverTimestamp,
} from "firebase/database";
import { getFirebaseApp } from "./firebase";

let db;

export function getRealtimeDb() {
  if (!db) {
    db = getDatabase(getFirebaseApp());
  }
  return db;
}

/** Firebase Console → Realtime Database → contactInquiries */
export async function submitContactInquiry({ name, email, phone, message }) {
  const inquiriesRef = ref(getRealtimeDb(), "contactInquiries");
  return push(inquiriesRef, {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    message: message.trim(),
    createdAt: serverTimestamp(),
  });
}
