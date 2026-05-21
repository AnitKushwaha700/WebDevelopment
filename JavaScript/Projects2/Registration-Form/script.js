document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear old errors
    document.querySelectorAll(".error").forEach((item) => {
      item.innerText = "";
    });

    // Personal Details
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("number").value.trim();
    const dob = document.getElementById("DOB").value;

    const gender = document.querySelector(
      "input[name='gender']:checked"
    )?.value;

    // Academic Details
    const qualification =
      document.getElementById("Qualification").value;

    const grade = document.getElementById("Grade").value;

    // Course Information
    const course = document.getElementById("Course").value;

    // Timings
    const timings = [];

    document
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    // Address
    const address = document.getElementById("Address").value.trim();
    const city = document.getElementById("City").value.trim();
    const pinCode = document.getElementById("pinCode").value.trim();

    // Guardian Details
    const guardianName = document
      .getElementById("guardianName")
      .value.trim();

    const guardianNumber = document
      .getElementById("guardianNumber")
      .value.trim();

    // Additional Information
    const reference =
      document.getElementById("reference").value;

    const specialRequirements =
      document.getElementById("specialRequirements").value;

    // Validation
    let isValid = true;

    // Full Name
    if (!/^[A-Za-z\s]+$/.test(fullName)) {
      alert("Enter valid Full Name");
      isValid = false;
    }

    // Email
    else if (
      !/^[A-Za-z0-9._]+@(gmail\.com|outlook\.com|ricr\.in)$/.test(email)
    ) {
      alert("Enter valid Email");
      isValid = false;
    }

    // Phone Number
    else if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter valid Indian Mobile Number");
      isValid = false;
    }

    // Pin Code
    else if (!/^\d{6}$/.test(pinCode)) {
      alert("Enter valid Pin Code");
      isValid = false;
    }

    // Guardian Number
    else if (!/^[6-9]\d{9}$/.test(guardianNumber)) {
      alert("Enter valid Guardian Number");
      isValid = false;
    }

    // Final Submit
    if (isValid) {
      const registrationData = {
        fullName,
        email,
        phone,
        dob,
        gender,
        qualification,
        grade,
        course,
        timings,
        address,
        city,
        pinCode,
        guardianName,
        guardianNumber,
        reference,
        specialRequirements,
      };

      console.log(registrationData);

      alert("Registration Successful");
    }
  });

// Reset Button
document
  .getElementById("registrationForm")
  .addEventListener("reset", function () {
    window.location.reload();
  });