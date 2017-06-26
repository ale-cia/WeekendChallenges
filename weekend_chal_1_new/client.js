$(document).ready(function(){


 //  $("#next").on("click", function() {
 //    console.log("Next button Clicked!");
 // });
 //
 //
 //  $("#prev").on("click", function() {
 //  console.log("Prev button Clicked!");
 // });

   // var numClicked = 0;
   //   $("#next").on("click", function(){
   //       numClicked +=1;
   //   });
   //    console.log(numClicked);

   var p = document.getElementById("textDisplay");
   var counter= document.getElementById("counter");
   var arrayIndex = 0;
   var total = 20;

   $("#next").on("click", function() {
    if (arrayIndex < peopleArray.length){
        p.textContent=peopleArray[arrayIndex].name + ": " + peopleArray[arrayIndex].shoutout;
        counter.textContent= arrayIndex + "/" + total;
        arrayIndex++;
    }
    else {
        console.log("This is the end of the list");
    }

});
   $("#prev").on("click", function(){
        arrayIndex --;
        p.textContent=peopleArray[arrayIndex].name + ": " + peopleArray[arrayIndex].shoutout;
        counter.textContent= arrayIndex + "/" + total;
   });
});
