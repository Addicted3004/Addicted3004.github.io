
var gallery=["images/tu.jpg","images/tu1.jpg","images/tu2.jpg","images/tu3.jpg"];

var position = 0;


$(function() {
  
  //Load the first image of the gallery
  $("#secondimg").load(function() {
    $(this).hide();
    $(this).fadeIn();
  }).attr('src',gallery[position]);


  //Load the image 
function loadImage(secondimg) {
  $("#secondimg").fadeOut('slow', function(){
    $("#secondimg").load(function() {
      $(this).hide();
      $(this).fadeIn();
    }).attr('src',secondimg);
  });
}

//To calculate the index in the gallery for the previous image
function previousImage() {
  position--;
  if(position < 0)
    position=total_in_gallery;
}

//To calculate the index in the gallery for the next image
function nextImage() {
  position++;
  if(position > total_in_gallery)
    position=0;
};

//Display next image
function displayNext(){
  nextImage();
  loadImage(gallery[position]);
}

//Display previous image
function displayPrevious(){
  previousImage();
  loadImage(gallery[position]);
}
