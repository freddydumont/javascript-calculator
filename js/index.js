//get dom elements buttons and screen
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var point = document.getElementById("point");
var equal = document.getElementById("equal");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var mult = document.getElementById("mult");
var divide = document.getElementById("divide");
var percent = document.getElementById("percent");
var reverse = document.getElementById("reverse");
var ac = document.getElementById("ac");
var screen = document.getElementById("screen");

//declare variables for calculations
var val = "0";
var floating = false;
var memVal = 0;
var operator;
var isResult = false;

function display() {

  if (val.length < 9) {
    screen.className = "";
    screen.innerHTML = val;
  } else {
    if (val.length < 12) {
      screen.className = "small";
      screen.innerHTML = val;
    } else {
      if (val.length < 17) {
        screen.className = "smaller";
        screen.innerHTML = val;
      } else {
        if (val.length < 25) {
          screen.className = "smallest";
          screen.innerHTML = val;
        } else {
          screen.innerHTML = "Number too large";
          val = "0";
        }
      }
    }
  }

}

function clear() {
  val = "0";
  floating = "false";
  screen.className = "";
  display();
}

function reverseNum() {
  if (val != "0") {
    if (val.startsWith("-")) {
      val = val.replace("-", "");
    } else {
      val = "-" + val;
    }
    display();
  }
}

function decimal() {
  if (!floating) {
    val += ".";
    floating = true;
  }
  display();
}

function add() {
  memVal = parseFloat(val);
  operator = "plus";
  isResult = false;
  clear();
}

function substract() {
  memVal = parseFloat(val);
  operator = "minus";
  isResult = false;
  clear();
}

function multiply() {
  memVal = parseFloat(val);
  operator = "times";
  isResult = false;
  clear();
}

function division() {
  memVal = parseFloat(val);
  operator = "division";
  isResult = false;
  clear();
}

function percentage() {
  val = parseFloat(val) / 100;
  val = val.toString();
  display();
}

function calculate() {
  var temp = 0;
  //isResult flag used to calculate correctly if user already pressed equal
  switch (operator) {
    case "plus":
      if (isResult) {
        val = memVal + parseFloat(val);
        val = val.toString();
      } else {
        temp = parseFloat(val);
        val = memVal + temp;
        memVal = temp;
        val = val.toString();
        isResult = true;
      }
      break;
    case "minus":
      if (isResult) {
        val = parseFloat(val) - memVal;
        val = val.toString();
      } else {
        temp = parseFloat(val);
        val = memVal - temp;
        memVal = temp;
        val = val.toString();
        isResult = true;
      }
      break;
    case "times":
      if (isResult) {
        val = memVal * parseFloat(val);
        val = val.toString();
      } else {
        temp = parseFloat(val);
        val = memVal * temp;
        memVal = temp;
        val = val.toString();
        isResult = true;
      }
      break;
    case "division":
      if (isResult) {
        val = parseFloat(val) / memVal;
        val = val.toString();
      } else {
        temp = parseFloat(val);
        val = memVal / temp;
        memVal = temp;
        val = val.toString();
        isResult = true;
      }
      break;
  }
  display();
}

function pressNum(num) {
  switch (num) {
    case 0:
      if (val != "0") {
        val += "0";
      }
      break;
    case 1:
      if (val == "0") {
        val = "1";
      } else {
        val += "1";
      }
      break;
    case 2:
      if (val == "0") {
        val = "2";
      } else {
        val += "2";
      }
      break;
    case 3:
      if (val == "0") {
        val = "3";
      } else {
        val += "3";
      }
      break;
    case 4:
      if (val == "0") {
        val = "4";
      } else {
        val += "4";
      }
      break;
    case 5:
      if (val == "0") {
        val = "5";
      } else {
        val += "5";
      }
      break;
    case 6:
      if (val == "0") {
        val = "6";
      } else {
        val += "6";
      }
      break;
    case 7:
      if (val == "0") {
        val = "7";
      } else {
        val += "7";
      }
      break;
    case 8:
      if (val == "0") {
        val = "8";
      } else {
        val += "8";
      }
      break;
    case 9:
      if (val == "0") {
        val = "9";
      } else {
        val += "9";
      }
      break;
  }
  display();
}

//declare event listeners
ac.addEventListener("click", clear);
reverse.addEventListener("click", reverseNum);
point.addEventListener("click", decimal);
plus.addEventListener("click", add);
minus.addEventListener("click", substract);
mult.addEventListener("click", multiply);
divide.addEventListener("click", division);
percent.addEventListener("click", percentage);
equal.addEventListener("click", calculate);
zero.addEventListener("click", function () {
  pressNum(0)
});
one.addEventListener("click", function () {
  pressNum(1)
});
two.addEventListener("click", function () {
  pressNum(2)
});
three.addEventListener("click", function () {
  pressNum(3)
});
four.addEventListener("click", function () {
  pressNum(4)
});
five.addEventListener("click", function () {
  pressNum(5)
});
six.addEventListener("click", function () {
  pressNum(6)
});
seven.addEventListener("click", function () {
  pressNum(7)
});
eight.addEventListener("click", function () {
  pressNum(8)
});
nine.addEventListener("click", function () {
  pressNum(9)
});