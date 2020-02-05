
var TextWriter = function (element, wordsList, period) {
  this.wordsList = wordsList;
  this.element = element;
  this.loopNum = 0;
  this.period = period;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TextWriter.prototype.tick = function () {
  // var i = this.loopNum % this.wordsList.length;
  var fullTxt = this.wordsList[this.loopNum];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.element.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    if (this.loopNum == this.wordsList.length) {
      this.loopNum = 0;
    }
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

let changingNoun = document.getElementById("changing-noun")
const nouns = ["fraternity", "sorority", "community", "middle lounge", "gay bar", "home"]
if (changingNoun != null) {
  new TextWriter(changingNoun, nouns, 2000)
}


const hamburger = document.getElementById("hamburger")
const navBar = document.getElementById("navBar")


hamburger.addEventListener("click", function () {

  if (navBar.classList.contains("mobile-nav-shown")) {
    navBar.classList.remove("mobile-nav-shown")
  } else {
    navBar.classList.add("mobile-nav-shown")
  }
})


let prevAudio;
function playSound(url) {
  if (prevAudio != null) {
    prevAudio.pause()
  }
  var a = new Audio("https://raw.githubusercontent.com/kagaga/kagaga.github.io/master"+url)
  a.play()
  prevAudio = a;
}




