// Code provided by Blair Bocklet
function showOverlay() {
document.querySelector(".overlay").style.display = "block"; }

function hideOverlay() {
    document.querySelector(".overlay").style.display = "none";}


//This code is mine
document.querySelector(".movie-cell").addEventListener("click", function() {
    console.log("clicked");
// if (document.getElementById("overlay").style.display == "none") {
//     showOverlay();
// } else
// { hideOverlay();}
} )

document.querySelector(".review-cell").addEventListener("click", function(){
if (document.querySelector(".overlay").style.display != "none") {
    hideOverlay();
}
else {console.log("something went wrong");}
}
)


// function showOverlay() {
//     document.getElementById("overlay").style.display = "block";
    
//     }

    // function hideOverlay() {
    // document.getElementById("overlay").style.display = "none";
    // }
// // Example: Show overlay after 2 seconds

setTimeout(showOverlay, 2000);

// // Example: Hide overlay on click
// document.getElementById("overlay").addEventListener("click", hideOverlay);