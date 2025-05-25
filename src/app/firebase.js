// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Your Firebase Config
const firebaseConfig = {
    "type": "service_account",
    "project_id": "myjobwhee",
    "private_key_id": "842c3f617de99ad10b71734692efd758460d75d6",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDGGcB5NMVbx99A\nromNryK14Ynad7BFHMM3LWwZ+sQksRR370QP0cliMEBHoAGs7NXKwuCtHb2nFVhJ\njoaaBf3hMJ1Fm2dPL2s/guSnP5h6evkI+qgGFzzelwa4xrzm930MvYrzs4hafejc\nP/kAXRN4LxGPYP6M6U3wFMSObrLni6jJQrgdX+7zp3ecpHCnvYkSwDLWUGt1Yipd\njZWP/vfKRV+n+iJkBhnE/uCnjMMGRzFpUtMDIllxRo921pFnT4EC+CvmlMsyDK6m\nAIGlAoJrxackKa95eOecza9XmkMox10cKwBTvv/nCJBJ1mRdm1LfzFOUaI01vLdy\nRk2t8Z9XAgMBAAECggEAAmfbQMg5zu7bo95hJHREJnGO2yQxwLyS8tsfjiYC6ecn\n0BP61NB7g9s0jKGWzklTmXR9MO4Rh6rXW39z/nhxOTuGka0plXpTJAb5Ks9RKpU1\nDhK5+xoFaGnKtJJnaJlMzocziGFMj4mQsn86QFklRz+wafghTinVi8vl1ZE76Z7X\nOCcOKYdU4K6YTBsgVQHcZBLOkn5+tqEgDvAizT4mC2ZkZJlps+cB6YNi30jUeWzc\nvsWjCMWxeNAeTSJG81bYR4o7DMngEiyB2GipNRl2mkdxrHgTns8QkNxw6NvsZxQg\nsxZTdN9gd7dIr5XZSqjqGgkUkTVGdKDquZwXNM/+8QKBgQDqa6nxxhk14fBKbiuH\nCYgAtIPQjqQOrNSLgbJISBStPLkoNfVyiOnio7Ebs/oQTPnvlXeacrbPj4N/S7rY\n+/7UGH4c1eq1oeeSwp7DF8bI1DkdhgRVg7OgltCYDA2sWWDap3LlXzs82oznjiBL\nwaWwjcUAFJO647VCJ0M4fO8olQKBgQDYViyuTqWh8rSWofv3g4NwlhO7inM7nLr9\nUkBjLqYHJizbWHn5liy+fU9yWO2R9fzUaJk8P+Y0zODl6BoxL/AVyFhflOQ4tzOk\nUkGzm0GnUZVNTUvLHVm+Rs/f7+LnPxUX37IY+5SdYmzcsQgd2XsSYdE4xeAqnYry\ncW9T3GPxOwKBgCeYtAYQziVZ2rrXzSZsJ7rmwvUxguivrN87sx+efU+d2DDAnIsS\nMV+FAt+JEQ470mPzvVYrVlHNDgssgY0xU6QD1xmL0K+Jf5I8qZCOrZcyscsY3haL\nvoW7s9RbBNw95KxKaI/x/BGVYQOj8DSbqx8dc09GKoYA/JcGBsa946/ZAoGAFi3n\nkMtRYeQfLZ5X1c1u6VkJlt2f6MmtxhDrtv9uWCdKzAYrIzKJTdJNFd0WJjPBAwni\nQ/INKPakTA3auZY/mAwdO1dpeoMV0U/5mm9dcMkFdJJrJdzReZeK8luGuMyX3gW6\nHaOVXflcTdf8jAri+kR7DcYDsHrMZwTINCHRQUcCgYArFwY7/YOPjz1tlh2X7ORT\n6Nu3W+Og8nDQZluQf6YECWDqOEIo6JVdfgw41sUA4Ri3e1rQGqoKuIBWOq0rz+Cy\nEeHHIEeYy+qgp9/mn5WQAPCVa0NaGQ8cWueBtDsf2JLAqdnztg6wYnP+3Ul8MyYo\npfRp9dD9JUrjEGKm3LeT8A==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@myjobwhee.iam.gserviceaccount.com",
    "client_id": "111965577382057740849",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40myjobwhee.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Function to Request Notification Permission and Get FCM Token
export const requestFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: "YOUR_PUBLIC_VAPID_KEY", // Get this from Firebase Console > Cloud Messaging
      });
      console.log("FCM Token:", token);
      return token;
    } else {
      console.warn("Notification permission denied.");
    }
    
  } catch (error) {
    console.error("Error getting FCM token:", error);
  }
};



// Function to Listen for Incoming Messages
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Foreground Message Received:", payload);
      resolve(payload);
    });
  });

