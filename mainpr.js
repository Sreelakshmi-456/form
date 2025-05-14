
  function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('fullName');
  const nameError = name.nextElementSibling;

  if (name.value.length < 5) {
    name.classList.add('is-invalid');
    nameError.style.display = 'block';
  } else {
    name.classList.remove('is-invalid');
    nameError.style.display = 'none';
  }

  // Repeat similar logic for other fields...
}

  // Reset invalid classes
  [fullName, email, age, phone, password, confirmPassword].forEach(input =>
    input.classList.remove("is-invalid")
  );

  // Full Name Validation
  if (fullName.value.trim().length < 5) {
    fullName.classList.add("is-invalid");
    isValid = false;
  }

  // Email Validation
  if (!email.value.includes("@")) {
    email.classList.add("is-invalid");
    isValid = false;
  }

  // Age Validation
  if (age.value < 1 || age.value > 120) {
    age.classList.add("is-invalid");
    isValid = false;
  }

  // Gender Validation
  let genderSelected = false;
  for (let input of genderInputs) {
    if (input.checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    alert("Please select your gender.");
    isValid = false;
  }

  // Phone Validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone.value) || phone.value === "1234567890") {
    phone.classList.add("is-invalid");
    isValid = false;
  }

  // Password Validation
  const nameLower = fullName.value.toLowerCase();
  const passVal = password.value.toLowerCase();
  if (
    password.value.length < 8 ||
    passVal === "password" ||
    passVal === nameLower
  ) {
    password.classList.add("is-invalid");
    isValid = false;
  }

  // Confirm Password
  if (password.value !== confirmPassword.value) {
    confirmPassword.classList.add("is-invalid");
    isValid = false;
  }

  // Final submission
  if (isValid) {
    alert("Form submitted successfully!");
    event.target.reset();
  }
}
