// Cek login saat halaman dibuka
window.onload = function () {
    const user = localStorage.getItem("username");
    if (user) {
        showDashboard(user);
    }
};

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        localStorage.setItem("username", username);
        showDashboard(username);
    } else {
        alert("Username dan password wajib diisi!");
    }
}

function showDashboard(username) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("userDisplay").innerText = username;
}

function logout() {
    localStorage.removeItem("username");
    location.reload();
}

function previewImage(event) {
    const img = document.getElementById("previewImg");
    img.src = URL.createObjectURL(event.target.files[0]);
}
