// 21- win
// 21+ loss
// document.querySelectorAll("img")[i] !== ("png/back.png")

document.querySelector(".button1").addEventListener("click", firstPlayer);
document.querySelector(".button2").addEventListener("click", secondPlayer);

// Generals

var numbers = [];
var numbers2 = [];

(function () {

    for (i = 0; i <= 11; i++) {
        i = numbers.length;
        var number = Math.floor((Math.random() * 11) + 2);
        if (!numbers.includes(number)) {
            numbers.push(number);
        } else if (numbers.includes(number)) {
          var index = numbers.indexOf(12);
          numbers.splice(index, 1)
        }
    }


})();

(function () {

    for (i = 0; i <= 11; i++) {
        i = numbers2.length;
        var number = Math.floor((Math.random() * 11) + 2);
        if (!numbers2.includes(number)) {
            numbers2.push(number);
        } else if (numbers2.includes(number)) {
          var index = numbers2.indexOf(12);
          numbers2.splice(index, 1)
        }
    }


})();

var p = 0;
function arr() {
    if (p!=9) {
      p++;
    }
    return numbers[p];
};

var b = 0;
function arr2() {
    if (b!=9) {
      b++;
    }
    return numbers2[b]
};

var s;
function stack() {
  var x = Math.floor(Math.random() * 4);
  if (x==0) {
    return "clubs";
  } else if (x==1) {
    return "diamonds";
  } else if (x==2) {
    return "hearts"
  } else {
    return "spades"
  }
}

// firstPlayer

var i = 0;
var defaultNum  = 0;

function firstPlayer() {

  document.querySelectorAll("img")[i].setAttribute("src", "png/" + arr() + "_of_"+stack()+".png");

  if (document.querySelectorAll("img")[i] !== ("png/back.png") && i !== 5) {
    i++;
    defaultNum  += numbers[p];
  } else if (document.querySelectorAll("img")[5] !== ("png/back.png")){
    document.querySelector(".button1").disabled = true
  }
  document.querySelector(".points1").textContent = defaultNum;
  res();

}

// secondPlayer

var o = 6;
var defaultNum2  = 0;

function secondPlayer() {
  document.querySelectorAll("img")[o].setAttribute("src", "png/" + arr2() + "_of_"+stack()+".png");
  if (document.querySelectorAll("img")[o] !== ("png/back.png") && i !== 10) {
    o++;
    defaultNum2 += numbers2[b]
  } else if (document.querySelectorAll("img")[10] !== ("png/back.png")){
    document.querySelector(".button2").disabled = true
  }
  document.querySelector(".points2").textContent = defaultNum2;
  res();
}

function res() {
  if (defaultNum > defaultNum2) {
    document.querySelector(".result").innerHTML = "Player 1 wins!"
  } else if (defaultNum < defaultNum2) {
    document.querySelector(".result").innerHTML = "Player 2 wins!"
  } else if (defaultNum == defaultNum2) {
    document.querySelector(".result").innerHTML = "Draw"
  }
}
