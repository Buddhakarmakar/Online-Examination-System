// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// import { collection, addDoc, getDocs,query,where, doc, setDoc } from "firebase/firestore";

// import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtDgCNH0tAY2uj3ZJXt4ImaHNsUqaG-tk",
  authDomain: "fir-auth-android-c9fe2.firebaseapp.com",
  projectId: "fir-auth-android-c9fe2",
  storageBucket: "fir-auth-android-c9fe2.appspot.com",
  messagingSenderId: "297088425171",
  appId: "1:297088425171:web:d2a315b882275141388826",
  measurementId: "G-3QV8KG39ZW"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore();
// try {
//     const abc = async () => {
//         console.log("first");
//       // const docRef = await addDoc(collection(db, "users/kunal/ku"), {
//       //   first: "Ada",
//       //   last: "Lovelace",
//       //   born: 1815,
//       // });
//       const citiesRef = collection(db, "cities");

//       await setDoc(doc(citiesRef, "SF"), {
//         name: "San Francisco",
//         state: "CA",
//         country: "USA",
//         capital: false,
//         population: 860000,
//         regions: ["west_coast", "norcal"],
//       });
//       await setDoc(doc(citiesRef, "LA"), {
//         name: "Los Angeles",
//         state: "CA",
//         country: "USA",
//         capital: false,
//         population: 3900000,
//         regions: ["west_coast", "socal"],
//       });
//       await setDoc(doc(citiesRef, "DC"), {
//         name: "Washington, D.C.",
//         state: null,
//         country: "USA",
//         capital: true,
//         population: 680000,
//         regions: ["east_coast"],
//       });
//       await setDoc(doc(citiesRef, "TOK"), {
//         name: "Tokyo",
//         state: null,
//         country: "Japan",
//         capital: true,
//         population: 9000000,
//         regions: ["kanto", "honshu"],
//       });
//       await setDoc(doc(citiesRef, "BJ"), {
//         name: "Beijing",
//         state: null,
//         country: "China",
//         capital: true,
//         population: 21500000,
//         regions: ["jingjinji", "hebei"],
//       });
//       console.log("Document written with ID: ");
//     }
//       // abc()
//     const getD_doc = async () => {
//         // const querySnapshot = await getDocs(
//         //   collection(db, "users/kunal/ku")
//         // );
//       const citiesRef = collection(db, "cities");

//       // Create a query against the collection.
//       const q = query(citiesRef, where("state", "==", "CA"));
//        const querySnapshot = await getDocs(q);
//        querySnapshot.forEach((doc) => {
//          // doc.data() is never undefined for query doc snapshots
//          console.log(doc.id, " => ", doc.data());
//        });
//     }

//     getD_doc()
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
 console.log("Fire base text ");
export { app,}

