import { initializeApp, getApps } from "firebase/app";

/**
 * Next.js вгражда NEXT_PUBLIC_* само при директен достъп (process.env.X).
 * databaseURL е за Realtime Database (задължителен за getDatabase).
 */
function getFirebaseConfig() {
  const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  };

  const missing = Object.entries(config)
    .filter(([, value]) => !value)
    .map(([key]) => `NEXT_PUBLIC_FIREBASE_${key.replace(/([A-Z])/g, "_$1").replace(/^_/, "").toUpperCase()}`);

  if (missing.length > 0) {
    throw new Error(
      `Firebase: липсват променливи в .env.local — добавете: ${missing.join(", ")}`,
    );
  }

  return config;
}

export function getFirebaseApp() {
  if (!getApps().length) {
    return initializeApp(getFirebaseConfig());
  }
  return getApps()[0];
}
