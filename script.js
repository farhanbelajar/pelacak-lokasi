// Ambil ID unik pengguna dari localStorage
let userId = localStorage.getItem('userId');
if (!userId) {
  userId = 'user_' + Math.floor(Math.random() * 1000000);
  localStorage.setItem('userId', userId);
}

let map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let userMarkers = {};

function updateMarker(id, lat, lng, time) {
  const label = `${id} (${new Date(time).toLocaleTimeString()})`;

  if (userMarkers[id]) {
    userMarkers[id].setLatLng([lat, lng]);
    userMarkers[id].bindPopup(label).openPopup();
  } else {
    userMarkers[id] = L.marker([lat, lng])
      .addTo(map)
      .bindPopup(label)
      .openPopup();
  }
}

// Kirim lokasi ke Firebase
function sendLocation(position) {
  const { latitude, longitude } = position.coords;
  const timestamp = Date.now();

  database.ref('locations/' + userId).set({
    latitude,
    longitude,
    timestamp
  });
}

// Tampilkan semua marker user dari Firebase
database.ref('locations').on('value', snapshot => {
  const data = snapshot.val();
  if (!data) return;

  for (let id in data) {
    const { latitude, longitude, timestamp } = data[id];
    updateMarker(id, latitude, longitude, timestamp);
  }
});

// Dapatkan lokasi user sendiri
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(sendLocation, (err) => {
    alert('Gagal mendapatkan lokasi: ' + err.message);
  }, {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 10000
  });
} else {
  alert('Geolocation tidak didukung browser ini');
}
