/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
  );
  importScripts(
    "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
  );
  
  const firebaseConfig = {
    // apiKey: "AIzaSyBS_lO_vE820AwD8QraZI0aD82k_YK3V5A",
    // authDomain: "bakekick-5f0f6.firebaseapp.com",
    // projectId: "bakekick-5f0f6",
    // storageBucket: "bakekick-5f0f6.appspot.com",
    // messagingSenderId: "759779472839",
    // appId: "1:759779472839:web:d42d17e0cacd51a72555e2",
    // measurementId: "G-37HQNBDSVV",
    apiKey: "AIzaSyBjfa1PiYC6gNoXViQlmLePcmGQS_ktiFs",
    authDomain: "buser-5780c.firebaseapp.com",
    projectId: "buser-5780c",
    storageBucket: "buser-5780c.appspot.com",
    messagingSenderId: "405057574356",
    appId: "1:405057574356:web:90543d725e42048482f241"
  };
  // Initialize the Firebase app in the service worker by passing the generated config
  firebase.initializeApp(firebaseConfig);
  
  // Retrieve firebase messaging
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });