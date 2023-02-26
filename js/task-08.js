const loginForm = document.querySelector('.login-form');

loginForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = loginForm.elements.email.value;
    const passvord = loginForm.elements.password.value;
    
  if (!email || !passvord) {
    alert("Please fill in all fields");
    return;
  }

  const formData = {
    email,
    passvord,
  };

  console.log(formData);

  loginForm.reset();
});