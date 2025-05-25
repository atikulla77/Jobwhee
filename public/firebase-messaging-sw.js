importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: 'AIzaSyDYbCsvAFHO22Inso3DeE4CCf9SChmZ_M0',
  authDomain: 'myjobwhee.firebaseapp.com',
  projectId: 'myjobwhee',
  storageBucket: 'myjobwhee.appspot.com',
  messagingSenderId:'802329788521',
  appId:'1:802329788521:web:1df1e15d1f330951dae2f8',
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background Message Received:", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/logo.png",
  });
});
