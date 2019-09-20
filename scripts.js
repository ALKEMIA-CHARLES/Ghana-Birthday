function getNameGender() {
  var yob = document.getElementById("year").value;
  var CC = yob.slice(0, 2);
  var MM = document.getElementById("month").value;
  let DD = document.getElementById("day").value;
  let gender = document.getElementById("gender").value;

  var YY = yob.slice(2);

  console.log(yob + " " + MM + " " + DD + " " + gender);

  // var dob =
  //   (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  // alert(dob);
  const maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  const femaleNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];

  let dob =
    (CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7;
  alert(dob);
  //   dob = Math.floor(dob);

  let Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (gender === "Male") {
    alert(
      "You were born on " +
        Days[dob - 1] +
        " and your name is " +
        maleNames[dob - 1]
    );
  } else if (gender === "Female") {
    alert(
      "You were born on " +
        Days[dob - 1] +
        " and your name is " +
        femaleNames[dob - 1]
    );
  }
  getNameGender();
}
