"use client";

import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  deleteToken,
} from "firebase/messaging";
import { useSession } from "next-auth/react";
import { createFcmToken } from "@/lib/api/createFcmToken/createFcmToken";

type NotificationPayload = {
  title: string;
  body: string;
};

const firebaseConfig = {
  apiKey: "AIzaSyDYbCsvAFHO22Inso3DeE4CCf9SChmZ_M0",
  authDomain: "myjobwhee.firebaseapp.com",
  projectId: "myjobwhee",
  storageBucket: "myjobwhee.appspot.com",
  messagingSenderId: "802329788521",
  appId: "1:802329788521:web:1df1e15d1f330951dae2f8",
};

const VAPID_KEY =
  "BGbAjlkXMjpDuIxYtcOIy_WjtAnHeiCz-obD4uqcqeQDT-posTcE1XZJ7nY-lnsk61yyvhdEcIU84mJQEsYodoY";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const useFCM = () => {
  const [FcmToken, setFcmToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<NotificationPayload[]>([]);
  const { data: session } = useSession(); // ✅ moved outside so available in effect

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) return;

    const requestPermissionAndGetToken = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") return;

        const token = await getToken(messaging, {
          vapidKey: VAPID_KEY,
          forceRefresh: true, // ✅ ensures new token on each login
        });

        if (token) {
          console.log("✅ New FCM Token:", token);
          setFcmToken(token);

          // ✅ Send to backend if session accessToken exists
          if (session?.accessToken) {
            try {
              const response = await createFcmToken(token); // this should return { data: { id, ... } }
    
              if (response?.data?.id) {
                localStorage.setItem("fcmtokenid", String(response.data.id));
                console.log("✅ FCM token sent to backend:", response);
              } else {
                console.warn("⚠️ Backend did not return an FCM token ID.");
              }
            } catch (err) {
              console.error("❌ Error sending FCM token to backend:", err);
            }
          }
        }
      } catch (err) {
        console.error("❌ Error getting FCM token:", err);
      }
    };

    requestPermissionAndGetToken();

    // 🔔 Listen for real-time messages
    const unsubscribe = onMessage(messaging, (payload) => {
      const newMsg = {
        title: payload.notification?.title || "No Title",
        body: payload.notification?.body || "No Body",
      };

      const old = JSON.parse(localStorage.getItem("notifications") || "[]");
      const updated = [newMsg, ...old];


      localStorage.setItem("notifications", JSON.stringify(updated));
      window.dispatchEvent(new Event('notification-updated'));

      setMessages(updated);
    });

    // 🧠 Load saved messages on mount
    const stored = JSON.parse(localStorage.getItem("notifications") || "[]");
    setMessages(stored);

    return () => {
      unsubscribe(); // cleanup on unmount
    };
  }, [session]); // ✅ depends on session to get accessToken

  return { FcmToken, messages };
};

export default useFCM;
