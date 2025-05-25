// utils/logoutWithFCMAndSignOut.ts

import { getMessaging, deleteToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { signOut } from "next-auth/react";
import { deleteFcmToken } from "@/lib/api/deleteFcmToken/deleteFcmToken";

const firebaseConfig = {
  apiKey: 'AIzaSyDYbCsvAFHO22Inso3DeE4CCf9SChmZ_M0',
  authDomain: 'myjobwhee.firebaseapp.com',
  projectId: 'myjobwhee',
  storageBucket: 'myjobwhee.appspot.com',
  messagingSenderId: '802329788521',
  appId: '1:802329788521:web:1df1e15d1f330951dae2f8',
};

export const logoutWithFCMAndSignOut = async (router: any) => {
  try {
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    // 1. Delete FCM token from browser
    await deleteToken(messaging);
    console.log("🗑️ FCM token deleted from browser");

    // 2. Delete FCM token from backend using stored ID
    const storedId = localStorage.getItem("fcmtokenid");
    if (storedId) {
      const id = parseInt(storedId);
      if (!isNaN(id)) {
        await deleteFcmToken(id);
        console.log("✅ FCM token deleted from backend (ID:", id, ")");
        localStorage.removeItem("fcmtokenid"); // 🧹 clean up
      } else {
        console.warn("⚠️ Invalid fcmtokenid in localStorage.");
      }
    } else {
      console.warn("⚠️ No fcmtokenid found in localStorage.");
    }

    // 3. Sign out
    await signOut({ redirect: false });

    // 4. Redirect
    router.push("/auth/signin");
  } catch (err) {
    console.error("❌ Logout error:", err);
  }
};
