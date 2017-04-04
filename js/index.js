//get dom elements buttons and screen
var zero = document.getElementById("zero");
var empty = document.getElementById("empty");
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
var memVal = 0;
var operator = "";

var operatorPressed = false;
var firstDigitAfterOperator = false;
var isFirstZero = true;
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

function screenFlash() {
  screen.style.display = "none";
  setTimeout(function () {
    screen.style.display = "inherit";
  }, 50);
}

function clear() {
  val = "0";
  memVal = 0;
  operator = "";
  screen.className = "";

  firstDigitAfterOperator = false;
  operatorPressed = false;
  isFirstZero = true;
  isResult = false;

  plus.classList.remove("selected-operator");
  minus.classList.remove("selected-operator");
  mult.classList.remove("selected-operator");
  divide.classList.remove("selected-operator--divide");

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

function percentage() {
  val = parseFloat(val) / 100;
  val = val.toString();
  display();
}

function decimal() {
  if (firstDigitAfterOperator || isResult) {
    val = "0.";
    firstDigitAfterOperator = false;
    isResult = false;
  } else {
    if (!/\./.test(val)) {
      val += ".";
    }
  }
  isFirstZero = false;
  display();
}


function pressNum(num) {
  if (firstDigitAfterOperator || isResult) {
    if (num != '0') {
      val = num;
      firstDigitAfterOperator = false;
      operatorPressed = true;
      isResult = false;
    }
  } else {
    if (isFirstZero) {
      if (num != '0') {
        val = num;
        isFirstZero = false;
      }
    } else {
      val += num;
    }
  }

  display();
}

function operate(type) {

  if (!firstDigitAfterOperator) {

    if (!isResult) {

      firstDigitAfterOperator = true;

      if (operatorPressed) {
        calculate();
        memVal = parseFloat(val);
      } else {
        memVal = parseFloat(val);
      }
      isResult = false;
    } else {
      memVal = parseFloat(val);
    }
  }

  isFirstZero = false;
  operator = type;

  switch (type) {
    case "plus":
      plus.classList.add("selected-operator");
      minus.classList.remove("selected-operator");
      mult.classList.remove("selected-operator");
      divide.classList.remove("selected-operator--divide");
      break;
    case "minus":
      plus.classList.remove("selected-operator");
      minus.classList.add("selected-operator");
      mult.classList.remove("selected-operator");
      divide.classList.remove("selected-operator--divide");
      break;
    case "times":
      plus.classList.remove("selected-operator");
      minus.classList.remove("selected-operator");
      mult.classList.add("selected-operator");
      divide.classList.remove("selected-operator--divide");
      break;
    case "division":
      plus.classList.remove("selected-operator");
      minus.classList.remove("selected-operator");
      mult.classList.remove("selected-operator");
      divide.classList.add("selected-operator--divide");
      break;
  }

  screenFlash();
}

function calculate() {
  var temp = 0;
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

  plus.classList.remove("selected-operator");
  minus.classList.remove("selected-operator");
  mult.classList.remove("selected-operator");
  divide.classList.remove("selected-operator--divide");

  display();
}


//declare event listeners
ac.addEventListener("click", clear);
reverse.addEventListener("click", reverseNum);
point.addEventListener("click", decimal);
plus.addEventListener("click", function () {
  operate("plus");
});
minus.addEventListener("click", function () {
  operate("minus");
});
mult.addEventListener("click", function () {
  operate("times");
});
divide.addEventListener("click", function () {
  operate("division");
});
percent.addEventListener("click", percentage);
equal.addEventListener("click", calculate);
zero.addEventListener("click", function () {
  pressNum('0')
});
empty.addEventListener("click", function () {
  pressNum('0')
});
one.addEventListener("click", function () {
  pressNum('1')
});
two.addEventListener("click", function () {
  pressNum('2')
});
three.addEventListener("click", function () {
  pressNum('3')
});
four.addEventListener("click", function () {
  pressNum('4')
});
five.addEventListener("click", function () {
  pressNum('5')
});
six.addEventListener("click", function () {
  pressNum('6')
});
seven.addEventListener("click", function () {
  pressNum('7')
});
eight.addEventListener("click", function () {
  pressNum('8')
});
nine.addEventListener("click", function () {
  pressNum('9')
});

//keyboard event listener using keyCode because replacements are not yet supported
//by all browsers
document.addEventListener("keypress", function (e) {
  switch (e.keyCode) {
    case 48:
      pressNum('0');
      break;

    case 49:
      pressNum('1');
      break;

    case 50:
      pressNum('2');
      break;

    case 51:
      pressNum('3');
      break;

    case 52:
      pressNum('4');
      break;

    case 53:
      pressNum('5');
      break;

    case 54:
      pressNum('6');
      break;

    case (55):
      pressNum('7');
      break;

    case 56:
      pressNum('8');
      break;

    case 57:
      pressNum('9');
      break;

    case 44:
    case 46:
      decimal();
      break;

    case 61:
    case 13:
      calculate();
      break;

    case 43:
      operate("plus");
      break;

    case 45:
      operate("minus");
      break;

    case 42:
      operate("times");
      break;

    case 47:
      operate("division");
      break;

    case 37:
      percentage();
      break;

    case 177:
      reverseNum();
      break;

    case 67:
    case 99:
      clear();
      break;
  }
})