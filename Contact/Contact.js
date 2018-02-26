
let contactArray = ["John Cotton", "555-5555", "email@example.com",]
contactArray[3] = "A new Item"
contactArray[4] = "johncotton.us"

function addContent(array){
console.log(array)
$("#contact-array").append("<li>" + array + "</li>");
}

contactArray.forEach(addContent)

var contactObject = {
  "name": "Professor Chaos",
  "email": "professor@professorchaos.com"
}
contactObject["twitter"] = "@ProfChaos";
contactObject["quote"] = "Prepare to meet thu doom!";

var sayingOfTheDay = "quote";
console.log( contactObject[sayingOfTheDay] );

var elementLister = function( contactElement ){
  var listString = "<li>" + contactElement + "</li>";

  if(Array.isArray( contactElement )){
    listString = "<ol>";

    contactElement.forEach( function( element ){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
  } else if(typeof contactElement === "object"){
    listString = "<li>";

    for(var element in contactElement){
      listString += contactElement[element] + " ";
    }

    listString += "</li>";
  }

  $("#contact-list").append(listString);
};

for(var contactType in contactObject){
  elementLister( contactObject[contactType] );
}



var contactArray = ["Jasmine Thomas", "Jazzie3789@yahoo.com", "555-3289"];

var lastOne = [contactArray[2]];
