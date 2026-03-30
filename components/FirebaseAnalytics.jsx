"use client";

import { useEffect } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirebaseApp } from "@/lib/firebase";

/**
 * Firebase Analytics работи само в браузъра (не при SSR).
 * Извиква се веднъж след монтиране на приложението.
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    let cancelled = false;

    isSupported()
      .then((supported) => {
        if (cancelled || !supported) return;
        getAnalytics(getFirebaseApp());
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
