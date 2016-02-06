var HTMLheaderName = '<div class = "row"><h1 id="name">%data%</h1></div>';

var HTMLemail = '<li><a href="mailto:%data%"><i class="fa fa-envelope-o contact-icons"></i></a></li>';
var HTMLgithub = '<li><a href=https://github.com/%data% target="_blank"><i class="fa fa-github icons contact-icons"></i></a></li>';
var HTMLlocation = '<li><a href="http://maps.google.com/?q=%data%" target="_blank"><i class="fa fa-home contact-icons"></i></a></li>';
var HTMLLinkedIn = '<li> <a href="https://ca.linkedin.com/in/%data%" target="_blank"><i class="fa fa-linkedin contact-icons"></i></a></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLworkSection = '<div id = "work-section" class = "section row"> </div>'
var HTMLworkDetails = '<div class = "details row"> </div>'
var HTMLworkWebsite = '<div class = "col-md-6"> <a href= %website% target="_blank">'
var HTMLworkEmployer = '<h5 class="section-titles"> <b> %data% </b> </a>' ;
var HTMLworkTitle = '  - %data%  </h5> </div>';
var HTMLworkDates = '<div class="col-md-12"><h5 class="work-dates">%data%</h5></div>';
var HTMLworkLocation = '<div class="col-md-6 text-right work-location"><h5><a href = "http://maps.google.com/?q=%data%" target="_blank">%data%</a></h5></div>';
var HTMLworkDescription = '<p><br>%data%</p>';
var HTMLresponsibility = '<div class = "col-md-12"><h5 class="responsibility-heading"> <i class="fa fa-thumbs-o-up"></i> Responsibilities:</h5><ul class="responsibility"> </ul></div>'
var HTMLkeyachievements = '<div class = "col-md-12"><h5><i class="fa fa-star"></i> Key Achievements:</h5><ul class="keyachievements"> </ul></div>'
var HTMLresponsibilityList = '<ul class="work-responsiblity"> </ul>'
var HTMLworkListResponsibility = '<li class="list-unstyled"><i class="fa fa-minus"></i> %data%</li>'
var HTMLworkListAchievements = '<li class="list-unstyled"><i class="fa fa-check list-icon"></i>%data%</li>'

var HTMLprojectSection = '<div id = "project-section" class = "section row"> </div>';
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectLink = '<div class = "col-md-12"><a href = "%website%" target="_blank">';
var HTMLprojectTitle = '<h5 class="section-titles"> <b> %data% </b> </a> </h5> </div>';
var HTMLprojectDates = '<div class="col-md-12"><h5 class="work-dates"> %data% </h5></div>';
var HTMLprojectDescriptionTitle = '<div class ="col-md-12 ">  ';
var HTMLprojectDescription = '<div class ="col-md-12"><h5 class ="skills-inline"> Description: </h5> <p class="text-justify skills-inline">%data%</p></div>';
var HTMLskillsGained = '<div class ="col-md-12 project-skills"><h5 class ="skills-inline"> Skills gained: </h5> <p class="text-justify skills-inline">%data%</p></div>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolSection = '<div id = "school-section" class = "section row"> </div>';
var HTMLschoolDetails = '<div class = "details col-md-4"> </div>'
var HTMLschoolStart = '<div class="education-entry "></div>';
var HTMLschoolWebsite = '<a href="%website%"  target="_blank">'
var HTMLschoolName = '<h5 class="section-titles" > <b> %data% </b>' ;
var HTMLschoolDegree = ' - %data% </a> </h5> ';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = 'Major: %data% ';

var HTMLskillSection = '<div id = "skill-section" class = "section row"> </div>'
var HTMLskillDetails = '<div class = "details"> </div>'
var HTMLSkillTitle = ' <div class="col-md-4"> <a href = "#skills">  <h5 class="section-titles"> <b>  %data% </b>  </a> </h5>' ;
var HTMLSkillLists = '  %data%  </div> ';

var HTMLcertificateSection = '<div id = "certificate-section" class = "section row"> </div>';
var HTMLcertificateDetails = '<div class = "details col-md-4"> </div>'
var HTMLcertificateWebsite = '<h5 class="section-titles"> <a href="%website%"  target="_blank">'
var HTMLcertificateName = ' <b> %data% </b> </a> </h5>' ;
var HTMLcertificateDates = '<div class="date-text">%data%</div>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map" class="section row"></div>';

var HTMLfooter = '<div id = "footer" class = "row footer-contact-list">';
var HTMLList = ' <ul id = "footer-list" class="list-unstyled">'
var HTMLfooterMobile = '<li class= "contact-list"><a href = "tel:16477203375" class = "text-white"> <b> Mobile: </b> %data% </a> </li>';
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


//Bio Variable - Encapsulating all bio and skills data and display function.
var bio = {
    "name" : "Jay Shah",
    "contacts" : {
        "mobile" : "+1-647-720-3375",
        "email" : "reversarrow@gmail.com",
        "github" : "reversearrow",
        "location": "Toronto, Ontario",
        "linkedIn" : "jayshahh"
        },
    "skills" : [
    {
        "title" : "Programming",
        "skillslist" : "Python, JavaScript, HTML, CSS, TCL, F5 iRules"
    },
    {
        "title" : "Frameworks",
        "skillslist": "jQuery, Bootstrap"
    },
    {
        "title" : "Computer Networking",
        "skillslist": "TCP/IP, DNS, NAT, STP, IP, VRRP, PPP, SNMP and HSRP, Netflow, VLAN, Application Load Balancing"
    },
    {
        "title" : "Routing & Switching Technologies",
        "skillslist": "HSRP, VRRP, STP, RSTP, PVST+, VLAN, dot1Q, UDLD, VTP, LACP, SPAN, Stackwise, VPC, EIGRP, BGP, OSPF, MPLS, Route Maps, Prefix Lists and Route Redistribution"
    },
    {
        "title" : "Infrastructure Security",
        "skillslist": "TACACS+, Radius, RBAC, Encryption, Hashing, PKI and IPv4 ACLs, DHCP snooping, Port security, BPDU Guard , Root Guard, BPDU Filter, Dynamic ARP Inspection, IPSEC VPN, SSL VPN"
    },
    {
        "title" : "Appliances & Applications",
        "skillslist": "IBM QRadar, F5 LTM, F5 GTM, INFOBLOX, Cisco GSS, Arbor Pravail, Arbor NSI, GIGAMON, IXIA Anue, Riverbed Steelhead WAN Optimizers, Device Expert, Solarwinds NPM, Solarwinds IPAM, Cisco ACS 4.0, Cisco ACS 5.0, Algosec AFA, Akamai CDN"
    },
    {
        "title" : "Management Services",
        "skillslist": "SNMP, Syslog, SSH, FTP, TFTP, SCP, Netflow and NTP"
    },
    {
        "title" : "Router, Switches and Firewall",
        "skillslist": "Cisco Routers, Cisco Switches, Cisco ASA, HP Switches, Brocade Storage Switches"
    },
    {
        "title" : "Operating Systems",
        "skillslist": "Cisco IOS, CISCO NX-OS, Windows 2008, Windows 7, Windows 10, Ubuntu Linux"
    }
    ],
    "display" : function(){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);
        var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);
        var formattedLinkedIN = HTMLLinkedIn.replace("%data%", bio.contacts.linkedIn);
        $("#topContacts").append(formattedLinkedIN);
        //Displaying Skills
        $("#skills").append(HTMLskillSection);
        for (skills in bio.skills){
            var formattedSkillsTitle = HTMLSkillTitle.replace("%data%", bio["skills"][skills].title);
            var formattedSkills = HTMLSkillLists.replace("%data%", bio["skills"][skills].skillslist);
            var formattedSkillTitle = formattedSkillsTitle + formattedSkills;
            $("#skills .section:last").append(formattedSkillTitle);
        }
    }
};

//Work Variable - Encapsulating work data and display function.
var work = {
    "jobs": [
    {
        "dates": "July 2014 - Present",
        "employer": "Tangerine Bank",
        "title": "Network System Administrator",
        "location": "Toronto, Canada",
        "website": "https://www.tangerine.ca",
        "responsibilities" : ["Mentoring and assisting junior network members","Helping network team achieve highest SLA"
                            ,"Documenting all necessary changes","On-Call support for the Network Infrastructure Support team",
                            "Designing, Configuring and troubleshooting enterprise networking"],
       	"keyachievements": ["Reduced network on-call support time required by automating Akamai Cache invalidation process using Python script","POC Network Packet Brokers and network TAPs, implemented Network Packet Broker which brought 100% visiablity in the network","Implemented centralized controller to manage all DDOS mitigation appliances which led to configuration consistency and easier management for all the appliances","Automated manual route lookup process by creating a console application which saved over 80% of individuals's time during that task",
                            "Hosted “Lunch & Learn” on Cisco ACS 5",
                            "Enhanced security of LAN infrastructure by mitigating L2 attacks like VLAN hopping and CAM Table Overflow",
                            "Assisted in implementing firewall analyzer and auditor",
                            "Implemented command authorization on all Cisco Firewalls",
                            "Assisted in implementing IPSec Site-to-Site VPNs to partner networks for diverse projects",
                            "Collaborated in building and configuring SIEM solution and it's use cases"]
    },
    {
        "dates": "February 2015 - Present",
        "employer": "Udacity",
        "title": "Code Reviewer",
        "location": "Toronto, Canada",
        "website": "https://www.udacity.com/",
        "responsibilities": ["Provide constructive feedback to final projects submitted by Udacity students for their final projects in various online courses"]
    },
    {
        "dates": "January 2013 - May 2014",
        "employer": "Tangerine Bank",
        "title": "Network System Administrator - Contract",
        "location": "Toronto, Canada",
        "website": "https://www.tangerine.ca",
        "responsibilities": ["Installed, configured, administered, and supported necessary hardware and software for LAN and WAN, including hubs, switches, routers, firewalls, network monitoring tools, configuration backup tools, network elements, and wiring to provide an optimized and reliable environment to run production & development applications",
        "Troubleshot network infrastructure and implemented any necessary changes on a regular basis","Assisted with training and orientation of new staff members",
        "Managed inventory and lease returns of all network devices"],
       	"keyachievements": ["Worked part-time while studying full-time in networking and achieved cumulative GPA of 3.5","Developed Python script to automate reverse DNS lookup process, which streamlined the process from days to minutes",
       	                    "Enhanced centralized security and access policy by implementing secure access control system"," Enhanced network security by implementing BPDU Guard on applicable switch interface"]
    },
    {
        "dates": "April 2012 - December 2013",
        "employer": "Tangerine Bank",
        "title": "Network System Administrator - Coop",
        "location": "Toronto, Canada",
        "website": "https://www.tangerine.ca",
        "responsibilities": ["Coordinated with team members and completed technical projects in a timely manner","Prepared and maintained documentation of all network equipment and configurations"
                            ,"Kept over 250+ network devices configuration compliant with audit policies and in-sync","Assigned, configured and cleaned up IP addresses and switch-ports as per requirements"
                            ,"Created a monthly and daily bandwidth utilization reports for senior management to review","Assisted in setting up a network connection for end users"],
       	                    "keyachievements": ["Boosted security on Routers, Switches, and Firewalls by hardening them","Assisted in reforming security for printers by isolating them using VLANs and ACLs"
       	            ,"Designed a separate out-of-band network to manage & monitor DMZ switches","Assisted in migrating & training 200+ users to SSL VPN","Assisted in upgrading core banking infrastructure from 100 Mbps switches to 1 Gbps"]
    },
    {
        "dates": "2008 - 2011",
        "employer": "Independent Consultant",
        "title": "Desktop Technician",
        "location": "Ahmedabad, India",
        "website": "#",
        "responsibilities": ["Performed hardware, software and network maintenance, assembled wide array of computer systems"]
    }
    ],
    "display": function() {
        $("#workExperience").append(HTMLworkSection);
        for (job in work.jobs) {
            var formattedWebsite = HTMLworkWebsite.replace("%website%", work["jobs"][job].website);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work["jobs"][job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work["jobs"][job].title);
            var formattedEmployerTitle = formattedWebsite + formattedEmployer + formattedTitle;
            var formattedLocation = HTMLworkLocation.replace(/%data%/g, work["jobs"][job].location);
            var formatteddates = HTMLworkDates.replace("%data%", work["jobs"][job].dates);
            $("#workExperience .section:last").append(formattedEmployerTitle);
            $("#workExperience .section:last").append(formattedLocation);
            $("#workExperience .section:last").append(formatteddates);
            //Adding Key-Achievements section only for Tangerine Bank experience.
            if (work["jobs"][job].employer == "Tangerine Bank") {
                $("#workExperience .section:last").append(HTMLresponsibility);
                $("#workExperience .section:last").append(HTMLkeyachievements);
            }
            else {
                $("#workExperience .section:last").append(HTMLresponsibility);
            }
            for (responsibility in work["jobs"][job].responsibilities) {
                var formattedlist = HTMLworkListResponsibility.replace("%data%", work["jobs"][job].responsibilities[responsibility]);
                $(".responsibility:last").append(formattedlist);
            }
            for (keyachievement in work["jobs"][job].keyachievements) {
                var formattedlist = HTMLworkListAchievements.replace("%data%", work["jobs"][job].keyachievements[keyachievement]);
                $(".keyachievements:last").append(formattedlist);
            }
        }
    }
};

//Projects Variable - Encapsulating projects data and display function.
var projects = {
	"project": [
    {
        "title": "Create and Analyze a Social Network",
        "date": "July 2014",
        "description": "At the end of the course a set of relationships (i.e. strings of phrases like “Dave likes Andy, Kathleen and Kristy”) were given and we had to use our new computer science skills to organize these relationships into a social network",
        "skills": "Python, Github and Computer Science Fundamentals such as Algorithms, Loops, Conditionals, Recursion, Lists, Dictionary, Tuples etc",
        "website": "https://github.com/reversearrow/CS101/blob/master/socialnetwork.py"
    },
    {
        "title": "Portfolio Mockup to Web Site",
        "date": "March 2015",
        "description": "Took a design mockup as a PDF-file and replicated that design in HTML and CSS",
        "skills": "HTML, CSS, Wireframing and Bootstrap, Github",
        "website": "https://reversearrow.github.io/Portfolio-Mockup"
    },
    {
        "title": "Build a Search Engine",
        "date": "June 2014",
        "description": "Throughout the course, we built a search engine and learned about and produced key search engine components including a crawler, an index and a page rank algorithm",
        "skills": "Python, Github and Computer Science Fundamentals such as Algorithms, Loops, Conditionals, Recursion, Lists, Dictionary, Tuples etc",
        "website": "https://github.com/reversearrow/CS101/blob/master/crawl.py"
    },
    {
        "title": "Interactive Resume",
        "date": "May 2015",
        "description": "Built an interactive resume using HTML, CSS, Javscript and JQuery",
        "skills": "HTML, CSS, Javascript, JQuery, Bootstrap, Github, JSON",
        "website": "#"
    },
    {
    	"title": "Arcade Game Clone",
        "date": "August 2015",
        "description": "Build an arcade game clone of class arcade game Frogger",
        "skills": "Object Orinted Javascript, HTML5",
        "website": "http://reversearrow.github.io/Frogger/"
    },
    {
      "title": "Website Performance Optimization",
        "date": "January 2016",
        "description": "Optimized a website to achive Google Page Speed score over 90 on mobile and desktop and made pizza.html render consistently at 60FPS",
        "skills": "Javascript, Build Tools, Browser Optimization, Javascript Optmization, Minifying, Grunt",
        "website": "https://github.com/reversearrow/web-perf"
    },
    {
      "title": "Hacker-News Site Optimization",
        "date": "January 2016",
        "description": "Optimized a website to achive 60 FPS, Improved Paint Time, Long-running and badly-timed JavaScript using RequestAnimationFrame, Layout Thrashing, Unnecessary layouts",
        "skills": "Javascript, Build Tools, Browser Optimization, Javascript Optmization, Minifying",
        "website": "https://github.com/reversearrow/Hacker-News"
    }
    ],
    "display": function() {
    $("#projects").append(HTMLprojectSection);
    for (pro in projects.project) {
        formattedLink  = HTMLprojectLink.replace("%website%",  projects["project"][pro].website);
        formattedTitle = HTMLprojectTitle.replace("%data%", projects["project"][pro].title);
        formattedLinkTitle = formattedLink + formattedTitle;
        formattedDate = HTMLprojectDates.replace("%data%",projects["project"][pro].date);
        formattedDescription = HTMLprojectDescription.replace("%data%",projects["project"][pro].description);
        formattedskillsGained = HTMLskillsGained.replace("%data%", projects["project"][pro].skills);
        $("#projects .section:last").append(formattedLinkTitle);
        $("#projects .section:last").append(formattedDate);
        $("#projects .section:last").append(formattedDescription);
        $("#projects .section:last").append(formattedskillsGained);
        }
    }
};

//Education Variable - Encapsulating education data and display function.
var education = {
	"schools": [
    {
        "name": "Udacity",
        "location": "Toronto, Ontario",
        "major": "Frontend Web Developement",
        "gradyear": "Present - 2015",
        "degree": "Nano-Degree",
        "website": "https://www.udacity.com/nanodegree"
    },
    {
        "name": "Centennial College",
        "location": "Toronto, Ontario",
        "major": "Computer Networking",
        "gradyear": "2013",
        "degree": "Advanced Diploma",
        "website": "https://www.centennialcollege.ca/programs-courses/full-time/computer-systems-technology-networking-co-op-fast-track/"
    },
    {
        "name": "Gujarat University",
        "location": "Ahmedabad, India",
        "major": "Physics",
        "gradyear": "2011",
        "degree": "Bachelors of Science",
        "website": "http://www.gujaratuniversity.org.in/web/index.asp"
    }
    ],
    "display": function() {
    $("#education").append(HTMLschoolSection);
    for (school in education.schools) {
        var formattedschoolname = HTMLschoolName.replace("%data%",education["schools"][school].name);
        var formattedschoolWebsite = HTMLschoolWebsite.replace("%website%", education["schools"][school].website);
        var formattedschooldegree = HTMLschoolDegree.replace("%data%",education["schools"][school].degree);
        var formattedschoolnamedegree = formattedschoolWebsite + formattedschoolname + formattedschooldegree;
        var formattedlocation = HTMLschoolLocation.replace("%data%",education["schools"][school].location)
        var formattedgradyear = HTMLschoolDates.replace("%data%", education["schools"][school].gradyear);
        var formattedmajor = HTMLschoolMajor.replace("%data%",education["schools"][school].major);
        $("#education .section").append(HTMLschoolDetails);
        $("#school-section .details:last").append(formattedschoolnamedegree);
        $("#school-section .details:last").append(formattedlocation);
        $("#school-section .details:last").append(formattedgradyear);
        $("#school-section .details:last").append(formattedmajor);
        }
    }
};

//Certification Variable - Encapsulating certification data and display function.
var certifications = {
    "certificates": [
    {
        "name": "Introduction to Computer Science",
        "date": "July 2014 - Present",
        "authority": "Udacity",
        "License": "Udacity",
        "website": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    },
    {
        "name": "Cisco ACI Test Drive",
        "date": "June 2015 - Present",
        "authority": "Firefly Education",
        "License": "315283",
        "website": "https://drive.google.com/file/d/0B-xMZuW4yeBsSHluUTF3QWhkZkU/view"
    },
    {
        "name": "Learning How to Learn",
        "date": "July 2015 - Present",
        "authority": "Coursera Verified Certificagtes",
        "License": "FHQ8D5GUWUYP",
        "website": "http://coursera.org/verify/FHQ8D5GUWUYP"
    },
    {
        "name": "Cisco Certified Network Associate - R & S",
        "date": "January 2012 - May 2018",
        "authority": "Cisco",
        "License": "409305687490IQCN",
        "website": "http://www.cisco.com/web/learning/certifications/associate/ccna/index.html"
    },
    {
        "name": "Cisco Certified Network Associate - Security",
        "date": "May 2015 - May 2018",
        "authority": "Cisco",
        "License": "409305687490IQCN",
        "website": "http://www.cisco.com/web/learning/certifications/associate/ccna_security/index.html"
    },
    {
        "name": "Certified Algosec Security Administrator",
        "date": "October 2014 - Present",
        "authority": "ALGOSEC",
        "License": "N/A",
        "website": "http://www.algosec.com"
    }
    ],
    "display": function() {
        $("#certifications").append(HTMLcertificateSection);
        for (certs in certifications.certificates) {
            var formattedcertname = HTMLcertificateName.replace("%data%",certifications["certificates"][certs].name);
            var formattedcertWebsite = HTMLcertificateWebsite.replace("%website%", certifications["certificates"][certs].website);
            var formattedcertnamewebsite = formattedcertWebsite + formattedcertname;
            var formatteddate = HTMLcertificateDates.replace("%data%", certifications["certificates"][certs].date )
            $("#certifications .section").append(HTMLcertificateDetails);
            $("#certificate-section .details:last").append(formattedcertnamewebsite);
            $("#certificate-section .details:last").append(formatteddate);
        }
    }
};

// Map Variable - Encapsulating display function.
var map = {
    "display": function() {
        $("#mapDiv").append(googleMap);
    }
};

//Footer Variable - Encapsulating display function.
var footer = {
    "display": function() {
        $("#letsConnect").append(HTMLfooter);
        $("#footer").append(HTMLList);
        var formattedfooterMobile = HTMLfooterMobile.replace("%data%", bio.contacts.mobile);
        $("#footer-list").append(formattedfooterMobile);
        var formattedfooterLinkedIn =  HTMLfooterLinkedIn.replace("%data%",bio.contacts.linkedIn);
        $("#footer-list").append(formattedfooterLinkedIn)
        var formattedfooterGithub = HTMLfooterGithub.replace("%data%", bio.contacts.github);
        $("#footer-list").append(formattedfooterGithub);
        var formattedfooterEmail = HTMLfooterEmail.replace("%data%", bio.contacts.email);
        $("#footer-list").append(formattedfooterEmail);
    }
};

//function for smooth scroll from : https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//Calling all display functions
bio.display();
work.display();
projects.display();
education.display();
certifications.display();
map.display();
footer.display();


