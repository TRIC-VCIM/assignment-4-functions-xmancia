var name = prompt('What is your name?');

var length = name.length;
console.log(length);

function setBackgroundColor(length) {
  var color;

  if (length === 2) {
    document.querySelector("div").className = "olive";
  }

  else if (length === 3) {
    document.querySelector("div").className = "orange";
  }  

  else if (length === 4) {
    document.querySelector("div").className = "red";
  }

  else if (length === 5) {
    document.querySelector("div").className = "blue";
  }

  else if (length === 6) {
    document.querySelector("div").className = "purple";
  }

  else if (length === 7) {
    document.querySelector("div").className = "yellow";
  }

  else if (length === 8) {
    document.querySelector("div").className = "pink";
  }

  else if (length === 9) {
    document.querySelector("div").className = "beige";
  }

  else if (length === 10) {
    document.querySelector("div").className = "green";
  }

  else if (length === 11) {
    document.querySelector("div").className = "skyblue";
  }

  else if (length >= 12) {
    document.querySelector("div").className = "lightcoral";
  }
}
setBackgroundColor(length);


var birthday = prompt ('What day were you born?');
console.log(birthday);

function setFont(birthday) {

var font;
  if (birthday >= 1 && birthday <= 5) {
    document.querySelector("p").className = "helvetica";
  } 
  else if (birthday >= 6 && birthday <= 10) {
     document.querySelector("p").className = "cambria";
  }
    else if (birthday >= 11 && birthday <= 15) {
     document.querySelector("p").className = "tahoma";
  }
    else if (birthday >= 16 && birthday <= 20) {
     document.querySelector("p").className = "cursive";
  }
    else if (birthday >= 21 && birthday <= 25) {
     document.querySelector("p").className = "calibri";
  }
    else if (birthday >= 26 && birthday <= 31) {
     document.querySelector("p").className = "geneva";
  }
}

setFont(birthday);

var random = Math.floor( Math.random() * length ) + 2;

if (random >= 12);
console.log(random);

document.querySelector("figure img").src = `images/image-${random}.jpg`; 







 