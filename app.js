var searchParam = [];

function recipeSearch(x) {
var queryURL = "http://api.edamam.com/search?q=" + x + "&app_id=f2e7d5eb&app_key=f6c831dedf07d960068e68c5e0623e97";

    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(response.hits[0].label);
});
}


// Add item
$("#addItem").on("click", function() {

    searchParam.push($("#input-ingredient").val().trim());
    console.log(searchParam);
    var newDiv = $("<div>");
    newDiv.attr("value", searchParam);
    newDiv.addClass("ingredients");
    newDiv.text(searchParam);
    $(".jumbotron").append(newDiv);
 
    // recipeSearch(seachParam, "cheese");
});

// Search for recipes
$("#recipeSearch").on("click", function() {

    $(".ingredients").val(recipeSearch(searchParam));
    // youTubeRecipe();


    // console.log(response.recipe.hits.label);


});
  













// // ================================== You Tube API ========================================================
var youTubeRecipe = searchResults()

var queryURL2 = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + youTubeRecipe + "&key=AIzaSyBRPCZsyEmsspOCYbRltXGrLgf8-o9YIRY";

// YOUTUBE
// Creating an AJAX call for the specific recipe button being clicked
function youTubeRecipe() {
// function youtubeSearch() {
$.ajax({
    url: queryURL2,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    }, function(err){
    console.log('*****',err)
    });

};
