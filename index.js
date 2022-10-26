let add1Home = document.getElementById("home-score");
let add2Home = document.getElementById("home-score");
let add3Home = document.getElementById("home-score");

let add1Guest = document.getElementById("guest-score");
let add2Guest = document.getElementById("guest-score");
let add3Guest = document.getElementById("guest-score");

let countHome = 0;
let countGuest = 0;

function addOneHome(){
  countHome += 1;
  add1Home.textContent = countHome;
}

function addTwoHome(){
  countHome += 2;
  add2Home.textContent = countHome;
}

function addThreeHome(){
  countHome += 3;
  add3Home.textContent = countHome;
}

function addOneGuest(){
  countGuest += 1;
  add1Guest.textContent = countGuest;
}

function addTwoGuest(){
  countGuest += 2;
  add2Guest.textContent = countGuest;
}

function addThreeGuest(){
  countGuest += 3;
  add3Guest.textContent = countGuest;
}

