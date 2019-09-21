function validateFoRm() {
  var formVal = document.forms["myform"]["namesform"].value;
  if (validateFoRm == "") {
    alert("Form must be filled out");
    return false;
  }
}

function checkDate(_year, month, day, gender) {
  var days = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };
  var YY = (year);
  var MM = parseInt(month);
  var DD = parseInt(day);
  var gender = (gender);

  var YY = document.getElementById("year").value;
  var MM = document.getElementById("month").value;
  var DD = document.getElementById("day").value;
  var gender = document.getElementById("gender").value;

  var CC = parseInt(YY.split("").slice(0, 2).join(""));
  var DOB = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10) + DD % 7));
  var dayOfBirth = days[DOB];
  var refresh = function () {
    document.getElementById("formElements").reset();
    document.getElementById('show').reset();
  }

  var men = {
      'Sunday': 'Kwasi',
      'Monday': 'Kwadwo',
      'Tuesday': 'Kwabena',
      'Wednesday': 'Kwaku',
      'Thurday': 'Yaw',
      'Friday': 'Kofi',
      'Saturday': 'Kwame',
      var: {
        'Sunday': 'Akosua',
        'Monday': 'Adwoa',
        'Tuesday': 'Abenaa',
        'Wednesday': 'Akua',
        'Thursday': 'Yaa',
        'Friday': 'Afua',
        'Saturday': 'Ama',

        if: year,
        'YY': month,
        'MM': day,
        'DD': gender !== 'gender',
        if: gender,
        GND,
        [0]: console,
        log,
        document,
        getElementById,
        'show': innerText = 'Your Akan name is:' + men[dayOfBirth],

        if: year,
        'YY': month,
        'MM': day,
        'DD': gender,
        'gender': (female),
        gender,
        GND,
        [1]: console,
        log,
        'Your are a woman and your names is :': women,
        dayOfBirth,
        document,
        getElementById,
        'show': innerText = 'Your Akan name is:' + women[dayOfBirth],

        else: console,
        log,
        "Invalid option": console,
        log,
        dayOfBirth,

        else: alert,
        alert,
        'cannot accept empty fields':

          (DOB),
        NumberConstructor: any
      }