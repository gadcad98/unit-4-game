function generateCrystals() {
    for(var i=0; i < 4; i++) {
     var containerDiv = $("<div>");
     containerDiv.attr("class", "col-md-1");
     var imageDiv = $("<img>");
     imageDiv.attr("src", "./assets/images/spam.jpg");
     containerDiv.append(imageDiv);
     $(".crystalHolder").append(containerDiv);
    }
}

$("#randomNumber").text(Math.floor((Math.random() * 120) + 1));

generateCrystals();

