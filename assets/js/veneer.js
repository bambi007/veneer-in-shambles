var veneer = document.getElementById('veneer');
var veneerImage = document.getElementsByClassName('veneer-image')[0];
var veneerCloseButton = document.getElementById('veneer-close-button');
var veneerGallery = document.getElementById('veneer-gallery');
var veneerGalleryImages = document.getElementsByClassName('veneer-gallery-image');

var veneerNavPrevious = document.getElementById('veneer-left-area');
var veneerNavNext = document.getElementById('veneer-right-area');

var imagesSrc = [];
var imagesAlt = [];


Array.from(veneerGalleryImages).forEach(element => {
  imagesSrc.push(element.src)
  imagesAlt.push(element.alt)

});


// OPEN VENEER 
function openVeneer() {
  veneer.classList.add('veneer-on')
}

veneerGallery.addEventListener('click', function (event) {
  if (event.target.classList.contains('veneer-gallery-image')) {
    veneerImage.src = event.target.src
    veneerImage.alt = event.target.alt
    openVeneer()
  }
});



// CLOSE VENEER 
function closeVeneer() {
  veneer.classList.remove('veneer-on')
  veneerImage.src = ""
  veneerImage.alt = ""
}


veneerCloseButton.addEventListener('click', function () {
  closeVeneer()
})

veneer.addEventListener('click', function (event) {
  var clickInside = veneerImage.contains(event.target)

  if (!clickInside) {
    closeVeneer()
  }
})

// VENEER NAVIGATION 
var currentImage = imagesSrc[0]

var imageIndex = parseInt(imagesSrc.indexOf(currentImage));

function nextImage() {

  if (imageIndex < (imagesSrc.length - 1)) {
    veneerImage.src = imagesSrc[imageIndex += 1];
  }
}

function previousImage() {
  if (imageIndex >= 0) {
    veneerImage.src = imagesSrc[imageIndex -= 1];
  }
};

veneerNavNext.addEventListener('click', function (event) {
  nextImage();
})

veneerNavPrevious.addEventListener('click', function (event) {
  previousImage();
})

