//scroll feature
//History
$('.history-link').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 20 }, 600);
});

//menu
$('.menu-link').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 15 }, 600);
});

//Find us
$('.find-us-link').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
    console.log(jump);
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 50 }, 600);
});

//scroll to top
$('.top-trigger').on('click', function(event) {
	event.preventDefault();
	let jump = $(this).attr("href");
	let new_position = $(jump).offset();;
	$('html, body').stop().animate({ scrollTop: new_position.top - 50 }, 600);
});

//enable slick img carousel
$(document).ready(function(){
  $('.carousel').slick({
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
//Google Maps
function initMap() {
  let options = {
    zoom: 16,
    center: {lat: 37.5442391, lng: -122.3059977}
  };

  let map = new google.maps.Map(document.getElementById('map'), options);

  let marker = new google.maps.Marker({
    position: {lat: 37.543630, lng: -122.307940},
    map:map
  })
}
