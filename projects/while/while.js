

var n = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";

while (n <= 10) {
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
  n++;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;


var n = 100;
var i = 1;
var sum = 0;

while (i < n) {
  sum += i;
  console.log(sum);
  i++;
}


var n = 15;
var outputTarget = document.querySelector("#exercise-5");
var ouputHtml = "<ul>";

while (n > 0) {
  console.log(n);
  if ( n % 2 === 0) {
    outputHtml += "<li>even</li>";
  } else {
    outputHtml += "<li>odd</li>";
  }
  n--;
}
 outputHtml = "</ul>";

 outputTarget.innerHTML = outputHTML;




var n = 1;
var outputTarget = document.querySelector("#exercise-6");
var outputHtml = "<ul>";

while (n <= 100) {
  if(n % 3 === 0 && n % 5 == 0){
    console.log("FizzBuzz");
    outputHtml += "<li>FizzBuzz</li>";
} else if (n % 3 === 0) {
  console.log("Fizz");
  outputHtml += "<li>Fizz</li>";
} else if (n % 5 === 0) {
  console.log("Buzz");
  outputHtml += "<li>Buzz</li>";
} else {
  console.log(n);
  outputHtml += "<li>" + n + "</li>";
}
  n++;
}

outputHtml = "</ul>";

outputTargt.innerHTML = outputHTML;
