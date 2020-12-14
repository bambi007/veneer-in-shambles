var veneer = document.getElementById('veneer');
var veneerImage = document.getElementsByClassName('veneer-image')[0];
var veneerImageContainer = document.getElementsByClassName('veneer-image-container')[0];
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


// SET IMAGE CONTAINERS WIDTH 

function veneerSetContainerWidth() {
  if (veneerImage.naturalHeight > veneerImageContainer.offsetHeight) {

    var heightDifference = veneerImage.naturalHeight - veneerImageContainer.offsetHeight
    var percentage = heightDifference / veneerImage.naturalHeight * 100
    var containerWidth = veneerImage.naturalWidth - (veneerImage.naturalWidth / 100 * percentage)
    veneerImageContainer.style.width = containerWidth + 'px';
    console.log('container width = ', containerWidth)
  }
}

function veneerResetContainerWidth() {
  veneerImageContainer.style.width = 'unset';
}

window.addEventListener('resize', function (event) {
  veneerResetContainerWidth()
  veneerSetContainerWidth()
})


// OPEN VENEER 
function openVeneer() {
  veneer.classList.add('veneer-on')
}

veneerGallery.addEventListener('click', function (event) {
  if (event.target.classList.contains('veneer-gallery-image')) {
    veneerImage.src = event.target.src
    veneerImage.alt = event.target.alt
    openVeneer()
    veneerSetContainerWidth()
  }
});



// CLOSE VENEER 
function closeVeneer() {
  veneer.classList.remove('veneer-on');
  veneerImage.src = "";
  veneerImage.alt = "";
  veneerResetContainerWidth()

}


veneerCloseButton.addEventListener('click', function () {
  closeVeneer()
})

veneer.addEventListener('click', function (event) {
  var clickInside = veneerImageContainer.contains(event.target)
  if (!clickInside) {
    closeVeneer()
  }
})

// VENEER NAVIGATION 

function veneerNextImage() {
  var imageIndex = parseInt(imagesSrc.indexOf(veneerImage.src));
  if (imageIndex < (imagesSrc.length - 1)) {
    veneerImage.src = imagesSrc[imageIndex += 1];
    veneerImage.alt = imagesAlt[imageIndex];

    veneerSetContainerWidth();
  }
}

function veneerPreviousImage() {
  var imageIndex = parseInt(imagesSrc.indexOf(veneerImage.src));

  if (imageIndex > 0) {
    veneerImage.src = imagesSrc[imageIndex -= 1];
    veneerSetContainerWidth();
  }
};

veneerNavNext.addEventListener('click', function (event) {
  veneerResetContainerWidth()
  veneerNextImage();
})

veneerNavPrevious.addEventListener('click', function (event) {
  veneerResetContainerWidth()
  veneerPreviousImage();
})

