import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyBjfa1PiYC6gNoXViQlmLePcmGQS_ktiFs",
//   authDomain: "buser-5780c.firebaseapp.com",
//   projectId: "buser-5780c",
//   storageBucket: "buser-5780c.appspot.com",
//   messagingSenderId: "405057574356",
//   appId: "1:405057574356:web:90543d725e42048482f241"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD9dqDG0--O-ygEmBH0bytMT86_ub16eMk",
  authDomain: "buser-institute-admin.firebaseapp.com",
  projectId: "buser-institute-admin",
  storageBucket: "buser-institute-admin.appspot.com",
  messagingSenderId: "416447287965",
  appId: "1:416447287965:web:65d4228b5f1162a9277a74",
  measurementId: "G-MYJF0EVKQ5"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage()
export const db = getFirestore(app);
// export const messaging = getMessaging();
export const messaging = getMessaging(app);

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

// export const requestForToken = async () => {
//     const permission = await Notification.requestPermission();
//     if (permission === "granted") {
//       let token = await getToken(messaging, {
//         vapidKey:
//           "BDilBuhrRMPGt6Mg69IJ_HYiKYggU1deUo-g9t2drJzQipjGDIKGAPnG1lNg6Finb6Dsk1wxj5pvkBfGwFmrFkU",
//       }).then((token)=>{
//         console.log("token", token)
//       }).then((err)=>console.log(err));
//       return token;
//     } else console.log("Token Not generated");
//   };

// export const requestForToken = async (storeTokenInDB) => {
//   const permission = await Notification.requestPermission();
//   if (permission === "granted") {
//     const token = await getToken(messaging, {
//       vapidKey:
//         "BDilBuhrRMPGt6Mg69IJ_HYiKYggU1deUo-g9t2drJzQipjGDIKGAPnG1lNg6Finb6Dsk1wxj5pvkBfGwFmrFkU",
//     }).then((ftoken)=>{storeTokenInDB(ftoken)})
//     return token
//   } else console.log("Token Not generated");
// };

export const requestPermission = (
  setTokenFound,
  setToken,
  // storeTokenInDB,
) => {
  console.log("Requesting permission...");
  let userAgent = navigator.userAgent;

  let checkBrowser = "";

  if (userAgent.match(/chrome|chromium|crios/i)) {
    checkBrowser = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    checkBrowser = "firefox";
  } else if (userAgent.match(/safari/i)) {
    checkBrowser = "safari";
  } else if (userAgent.match(/opr\//i)) {
    checkBrowser = "opera";
  } else if (userAgent.match(/edg/i)) {
    checkBrowser = "edge";
  } else if (window.navigator.brave?.isBrave?.name === "isBrave") {
    checkBrowser = "Brave";
  } else {
    checkBrowser = "No browser detection";
  } 

  Notification.requestPermission()
    .then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        return getToken(messaging, {
          vapidKey:
            // "BDilBuhrRMPGt6Mg69IJ_HYiKYggU1deUo-g9t2drJzQipjGDIKGAPnG1lNg6Finb6Dsk1wxj5pvkBfGwFmrFkU",
            "BFEt_WHqpKp_3xBteCZtFf3v9cNk83t3R9WePDCCbsm5CvmZsnJUciRMxfNtwQCvkCPVEJVMJzbdQB41FjKWjGc"
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("current token for client: ", currentToken);
              setTokenFound(true);
              setToken(currentToken);
              // setTimeout(() => {
              //   storeTokenInDB(currentToken, checkBrowser);
              // }, 1000);
              // Track the token -> client mapping, by sending to backend server
              // show on the UI that permission is secured
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
              setTokenFound(false);
              setToken("");
              // shows on the UI that permission is required
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
          });
      } else {
        console.log("Notification permission denied.");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
