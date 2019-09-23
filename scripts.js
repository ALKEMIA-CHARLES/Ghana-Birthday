function validateForm() {
  var formVal = document.forms["formElements"].value
  if (x == "") {
    alert("Form must be filled out");
    return false;
  }
}

function checkDate(year, month, day, gender) {
  var days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday'
  };
  var men = {
    'Sunday': 'Kwasi',
    'Monday': 'Kwadwo',
    'Tuesday': 'Kwabena',
    'Wednesday': 'Kwaku',
    'Thursday': 'Yaw',
    'Friday': 'Kofi',
    'Saturday': 'Kwame'
  };
  var women = {
    'Sunday': 'Akosua',
    'Monday': 'Adwoa',
    'Tuesday': 'Abenaa',
    'Wednesday': 'Akua',
    'Thursday': 'Yaa',
    'Friday': 'Afua',
    'Saturday': 'Ama'
  };
  var GND = ["male", "female"];
  var YY = document.getElementById("year").value;
  var MM = document.getElementById("month").value;
  var DD = document.getElementById("day").value;
  var gender = document.getElementById("gender").value;

  var CC = parseInt(YY.split("").slice(0, 2).join(""));

  var DOB = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

  var dayOfBirth = days[DOB];

  if (year !== '' && month !== '' && day !== '' && gender !== '') {
    if (gender === GND[0]) {
      console.log('You are a man and your name is ' + men[dayOfBirth]);
      document.getElementById('akan').innerText = 'Your Akan name is:' + men[dayOfBirth];
    }​
    else if (gender === GND[1]) {
      console.log('Your are a Woman and Your Name is :' + women[dayOfBirth]);
      document.getElementById('akan').innerText = 'Your Akan name is:' + women[dayOfBirth];​
    } else {
      console.log('Invalid option');
    }
    console.log(dayOfBirth);
  } else {
    alert('cannot accept empty fields');
  }
  return DOB;
}
var refresh = function () {
  document.getElementById("formElements").reset();
  document.getElementById('akan').reset();
}