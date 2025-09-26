window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-slate-300/30", "backdrop-blur-xs", "shadow-md", "shadow-black-500/90");
  } else {
    navbar.classList.remove("bg-slate-300/30", "backdrop-blur-xs", "shadow-md", "shadow-black-500/90");
  }
});

// welcomemassage();
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
  // get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  // simple validation
  if (name === "" || email === "" || message === "") {
    // show alert if any field is empty
    alert("Please fill in all fields.");
  } else {
    // show thank you message
    alert("Thank you for your message, " + name + "!");
  }
}
