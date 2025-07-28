// Ganti dengan data dari Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyAzjdU6NpuVTUWbOzFGbVCfq3LK_YOS58g",
  authDomain: "absen-b6048.firebaseapp.com",
  databaseURL: "https://absen-b6048-default-rtdb.firebaseio.com/",
  projectId: "absen-b6048",
  storageBucket: "absen-b6048.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcd1234"
};

// Inisialisasi Firebase hanya jika belum ada instance
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();
