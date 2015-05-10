var HTMLheaderName = '<div class = "row"><h1 id="name">%data%</h1></div>';

var HTMLemail = '<li><a href="mailto:%data%"><i class="fa fa-envelope-o contact-icons"></i></a></li>';
var HTMLgithub = '<li><a href=https://github.com/%data% target="_blank"><i class="fa fa-github icons contact-icons"></i></a></li>';
var HTMLlocation = '<li><a href="http://maps.google.com/?q=%data%" target="_blank"><i class="fa fa-home contact-icons"></i></a></li>';
var HTMLLinkedIn = '<li> <a href="https://ca.linkedin.com/in/%data%" target="_blank"><i class="fa fa-linkedin contact-icons"></i></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLworkSection = '<div id = "work-section" class = "section row"> </div>'
var HTMLworkDetails = '<div class = "details row"> </div>'
var HTMLworkWebsite = '<div class = "col-xs-9"> <a href= %website% target="_blank">'
var HTMLworkEmployer = '<h5 class="section-titles"> <b> %data% </b> </a>' ;
var HTMLworkTitle = '  - %data%  </h5> </div>';
var HTMLworkDates = '<div class="col-xs-12"><h5 class="work-dates">%data%</h5></div>';

var HTMLworkLocation = '<div class="col-xs-3 text-right"><h5><a href = "http://maps.google.com/?q=%data%" target="_blank">%data%</a></h5></div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLresponsibility = '<div class = "col-xs-12"><h5 class="responsibility-heading"> <i class="fa fa-thumbs-o-up"></i> Responsibilities:</h5><ul class="responsibility"> </ul></div>'
var HTMLkeyachievements = '<div class = "col-xs-12"><h5><i class="fa fa-star"></i> Key Achievements:</h5><ul class="keyachievements"> </ul></div>'
var HTMLresponsibilityList = '<ul class="work-responsiblity"> </ul>'
var HTMLworkListResponsibility = '<li class="list-unstyled"><i class="fa fa-minus"></i> %data%</li>'
var HTMLworkListAchievements = '<li class="list-unstyled"><i class="fa fa-check list-icon"></i>%data%</li>'

var HTMLprojectSection = '<div id = "project-section" class = "section row"> </div>';
var HTMLprojectDetails = '<div class = "details row"> </div>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectLink = '<div class = "col-xs-12"><a href = "%website%" target="_blank">';
var HTMLprojectTitle = '<h5 class="section-titles"> <b> %data% </b> </a> </h5> </div>';
var HTMLprojectDates = '<div class="col-xs-12"><h5 class="work-dates"> %data% </h5></div>';
var HTMLprojectDescriptionTitle = '<div class ="col-xs-12 ">  ';
var HTMLprojectDescription = '<div class ="col-xs-12"><h5 class ="skills-inline"> Description: </h5> <p class="text-justify skills-inline">%data%</p></div>';
var HTMLskillsGained = '<div class ="col-xs-12 project-skills"><h5 class ="skills-inline"> Skills gained: </h5> <p class="text-justify skills-inline">%data%</p></div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolSection = '<div id = "school-section" class = "section row"> </div>';
var HTMLschoolDetails = '<div class = "details col-xs-4"> </div>'
var HTMLschoolStart = '<div class="education-entry "></div>';
var HTMLschoolWebsite = '<a href="%website%"  target="_blank">'
var HTMLschoolName = '<h5 class="section-titles" > <b> %data% </b>' ;
var HTMLschoolDegree = ' - %data% </a> </h5> ';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = 'Major: %data% ';

var HTMLskillSection = '<div id = "skill-section" class = "section row"> </div>'
var HTMLskillDetails = '<div class = "details row"> </div>'
var HTMLSkillTitle = ' <div class="col-xs-4" > <a href = "#skills">  <h5 class="section-titles"> <b>  %data% </b>  </a> </h5>' ;
var HTMLSkillLists = '  %data%  </div> ';

var HTMLcertificateSection = '<div id = "certificate-section" class = "section row"> </div>';
var HTMLcertificateDetails = '<div class = "details col-xs-3"> </div>'
var HTMLcertificateWebsite = '<h5 class="section-titles"> <a href="%website%"  target="_blank">'
var HTMLcertificateName = ' <b> %data% </b> </a> </h5>' ;
var HTMLcertificateDates = '<div class="date-text">%data%</div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map" class="section row"></div>';

var HTMLfooter = '<div id = "footer" class = "row footer-contact-list">';
var HTMLList = ' <ul id = "footer-list" class="list-unstyled">'
var HTMLfooterMobile = '<li class= "contact-list"><a href = "#letsconnect" class = "text-white"> <b> Mobile: </b> %data% </a> </li>';
var HTMLfooterEmail = '<li class= "contact-list"><a href="mailto:reversearrow@gmail.com" class = "text-white" > <b> Email: </b> %data%  </a></li>';
var HTMLfooterGithub = '<li class= "contact-list"><a href = "https://github.com/reversearrow" target="_blank" class = "text-white"> <b> Github: </b> %data% </a> </li>';
var HTMLfooterLinkedIn = '<li class= "contact-list"><a href="https://ca.linkedin.com/in/jayshahh" target="_blank" class = "text-white"> <b> LinkedIn: </b> %data% </a> </li>';
/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {

});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };


  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      // your code goes here!
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}




window.addEventListener('load', initializeMap);


window.addEventListener('resize', function(e) {

map.fitBounds(mapBounds);
});

