document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const dob = document.getElementById("DOB").value;
  const currDate = document.getElementById("CurrentDate").value;

  // split dates
  const dobArray = dob.split("-"); //2004-05-10 --> ["2004", "05", "10"]
  const currArray = currDate.split("-");

  // Calculate Age
  let year = Number(currArray[0]) - Number(dobArray[0]);
  let month = Number(currArray[1]) - Number(dobArray[1]);
  let day = Number(currArray[2]) - Number(dobArray[2]);

  // fix negative days
  if (day < 0) {
    day += 30;
    month--;
  }

  // fix negative month
  if (month < 0) {
    month += 12;
    year--;
  }

  document.getElementById("MyAge").innerText =
    year + " Years " + month + " Months " + day + " Days";

  document.getElementById("DOB").value = "";
  document.getElementById("CurrentDate").value = "";
});

// Form submit
// ↓
// Reload roka
// ↓
// Dates li
// ↓
// Split ki
// ↓
// Age calculate ki
// ↓
// Output dikhaya
// ↓
// Inputs clear
