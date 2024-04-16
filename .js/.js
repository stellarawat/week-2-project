var currentDate = new Date();

var check = function () {
  
  var userDate = document.getElementById("date").value;
  var userMonth = document.getElementById("month").value;
  var userYear = document.getElementById("year").value;
  var d = new Date(userYear+"-"+userMonth+"-"+userDate);
  d.setDate(parseInt(userDate));
  d.setMonth(parseInt(userMonth) - 1);
  d.setFullYear(parseInt(userYear));
  if (userMonth == "month" || userDate == "date" || userYear == "year") {
    return undefined;
  } else if (currentDate < d) {
    // alert(currentDate < d);
    return undefined;
  } else if ((userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11) && parseInt(userDate) > 30) {
    return undefined;
  } else if (userMonth == 2 && parseInt(userYear) % 100 === 0 && parseInt(userYear) % 400 !== 0 && parseInt(userDate) > 28) {
    return undefined;
  } else if (userMonth == 2 && parseInt(userYear) % 4 !== 0 && parseInt(userDate) > 28) {
    return undefined;
  } else if (userMonth == 2 && parseInt(userDate) > 29) {
    return undefined;
  } else {
    return d.getDay();
  }
}
var date = function () {
  var d = new Date();
  var userDate = document.getElementById("date").value;
  var userMonth = document.getElementById("month").value;
  var userYear = document.getElementById("year").value;
  d.setDate(parseInt(userDate));
  d.setMonth(parseInt(userMonth) - 1);
  d.setFullYear(parseInt(userYear));
  var dateDigits = [d.getDate(), d.getMonth(), d.getFullYear()];
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (dateDigits[1] == 0) {
    return month[0] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 1) {
    return month[1] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 2) {
    return month[2] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 3) {
    return month[3] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 4) {
    return month[4] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 5) {
    return month[5] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 6) {
    return month[6] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 7) {
    return month[7] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 8) {
    return month[8] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 9) {
    return month[9] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 10) {
    return month[10] + " " + d.getDate() + ", " + d.getFullYear();
  } else if (dateDigits[1] == 11) {
    return month[11] + " " + d.getDate() + ", " + d.getFullYear();
  }
}

function day() {
  if (check() === 0) {
    return ("Sunday");
  } else if (check() === 1) {
    return ("Monday");
  } else if (check() === 2) {
    return ("Tuesday");
  } else if (check() === 3) {
    return ("Wednesday");
  } else if (check() === 4) {
    return ("Thursday");
  } else if (check() === 5) {
    return ("Friday");
  } else if (check() === 6) {
    return ("Saturday");
  }
}

function male() {
  if (check() === 0) {
    return ("Kwasi");
  } else if (check() === 1) {
    return ("Kwadwo");
  } else if (check() === 2) {
    return ("Kwabena");
  } else if (check() === 3) {
    return ("Kwaku");
  } else if (check() === 4) {
    return ("Yaw");
  } else if (check() === 5) {
    return ("Kofi");
  } else if (check() === 6) {
    return ("Kwame");
  }
}

function female() {
  if (check() === 0) {
    return ("Akosua");
  } else if (check() === 1) {
    return ("Adwoa");
  } else if (check() === 2) {
    return ("Abenaa");
  } else if (check() === 3) {
    return ("Akua");
  } else if (check() === 4) {
    return ("Yaa");
  } else if (check() === 5) {
    return ("Afua");
  } else if (check() === 6) {
    return ("Ama");
  }
}

function gender() {
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  if (male == false && female == false) {
    return undefined;
  } else if (male == true) {
    return "male";
  } else if (female == true) {
    return "female";
  }
}

function step2() {
  var step2 = document.getElementById("step2");
  var step3 = document.getElementById("step3");
  if (check() == undefined) {
    document.getElementsByClassName("error")[0].innerHTML = "Please enter a valid date.";
  } else if (step2.style.display === "none") {
    step2.style.disp1ay = "block";
  } else {
    step2.style.display = "none";
    step3.style.display = "block";
  }
}

function step3() {
  var step3 = document.getElementById("step3");
  var step4 = document.getElementById("step4");
  gender();
  if (gender() == undefined) {
    document.getElementsByClassName("error")[1].innerHTML = "Please pick one option.";
  } else if (step3.style.display === "none") {
    step3.style.disp1ay = "block";
  } else {
    step3.style.display = "none";
    step4.style.display = "block";
    if (gender() == "male") {
      document.getElementById("akanName").innerHTML = male();
    } else if (gender() == "female") {
      document.getElementById("akanName").innerHTML = female();
    }
    document.getElementById("dayOfBirth").innerHTML = day();
    document.getElementById("dateOfBirth").innerHTML = date();
  }
}