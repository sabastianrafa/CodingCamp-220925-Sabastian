//navbar scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-slate-300/30",
      "backdrop-blur-xs",
      "shadow-md",
      "shadow-black-500/90"
    );
  } else {
    navbar.classList.remove(
      "bg-slate-300/30",
      "backdrop-blur-xs",
      "shadow-md",
      "shadow-black-500/90"
    );
  }
});

// Toggle Menu Mobile
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const hamburgerIcon = document.getElementById("hamburger-icon");
const closeIcon = document.getElementById("close-icon");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  if (hamburgerIcon.classList.contains("hidden")) {
    navbar.classList.add("bg-white", "shadow-md", "shadow-black-500/90");
  } else {
    navbar.classList.remove("bg-white", "shadow-md", "shadow-black-500/90");
  }
});

welcomemassage();
// welcome message
function welcomemassage() {
  // prompt user for their name
  let name = prompt("Enter your name:");
  // display the name in the welcome message
  if (name) {
    // set the text content of the username span
    document.getElementById("username").textContent = name;
  } else {
    // if no name is entered, default to "Guest"
    document.getElementById("username").textContent = "Guest";
  }
}

// form validation
function validateForm() {
  // Ambil nilai input
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi sederhana
  if (name === "") {
    alert("Nama wajib diisi!");
    return;
  }

  if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("Masukkan email yang valid!");
    return;
  }

  if (message.length < 10) {
    alert("Pesan minimal 10 karakter!");
    return;
  }

  // Kalau semua valid → tampilkan pesan sukses
  alert(
    "Pesan berhasil dikirim!\n\n" +
      "Nama: " +
      name +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Telepon: " +
      phone +
      "\n" +
      "Pesan: " +
      message
  );

  // Reset form
  document.querySelector("form").reset();
}
