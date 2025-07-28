// Ganti dengan data dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyXXX",
  authDomain: "pelacak-lokasi.firebaseapp.com",
  databaseURL: "https://pelacak-lokasi-default-rtdb.firebaseio.com",
  projectId: "pelacak-lokasi",
  storageBucket: "pelacak-lokasi.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
