
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
        "skillslist" : "Python, HTML, CSS, JavsScript"
    },
    {
        "title" : "Programming Libraries",
        "skillslist": "jQuery"
    },
    {
        "title" : "Computer Networking",
        "skillslist": "TCP/IP, DNS, NAT, STP, IP, VRRP, PPP, SNMP and HSRP, Netflow, VLAN, Application Load Balancing"
    },
    {
        "title" : "Routing & Switching Technologies",
        "skillslist": "HSRP, VRRP, STP, RSTP, PVST+, VLAN, dot1Q, UDLD, VTP, LACP, SPAN, Stackwise, VPC, EIGRP, BGP, MPLS, Route Maps, Prefix Lists and Route Redistribution"
    },
    {
        "title" : "Infrastructure Security",
        "skillslist": "TACACS+, Radius, RBAC, Encryption, Hashing, PKI and IPv4 ACLs, DHCP snooping, Port security, BPDU Guard , Root Guard, BPDU Filter, Dynamic ARP Inspection, IPSEC VPN, SSL VPN"
    },
    {
        "title" : "Appliances & Applications",
        "skillslist": "IBM QRadar, F5 LTM, INFOBLOX, Cisco GSS, Arbor Pravail, GIGAMON, IXIA Anue, Riverbed Steelhead WAN Optimizers, Device Expert, Solarwinds NPM, Solarwinds IPAM, Cisco ACS 4.0, Cisco ACS 5.0, Algosec, Akamai, Cisco ASA"
    },
    {
        "title" : "Management Services",
        "skillslist": "SNMP, Syslog, SSH, FTP, TFTP, SCP, Netflow and NTP"
    },
    {
        "title" : "Router, Switches and Firewall",
        "skillslist": "Cisco Routers, Cisco Switches, HP Switches"
    },
    {
        "title" : "Operating Systems",
        "skillslist": "Cisco IOS, CISCO NX-OS, Windows 2008, Windows 7"
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
    $("#skills .section:last").append(HTMLskillDetails);
    for (skills in bio.skills){
        var formattedSkillsTitle = HTMLSkillTitle.replace("%data%", bio["skills"][skills].title);
        var formattedSkills = HTMLSkillLists.replace("%data%", bio["skills"][skills].skillslist);
        var formattedSkillTitle = formattedSkillsTitle + formattedSkills;
        $("#skill-section .details:last").append(formattedSkillTitle);
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
       	"keyachievements": ["Automated manual route lookup process by creating a console application which saved over 80% of individuals's time during that task",
                            "Hosted “Lunch & Learn” on Cisco ACS 5",
                            "Enhanced security of LAN infrastructure by mitigating L2 attacks like VLAN hopping and CAM Table Overflow using switch port security and disabling auto negotiation",
                            "Assisted in implementing firewall analyzer and auditor",
                            "implemented command authorization on all Cisco Firewalls",
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
        "responsibilities": ["Installed, configured, administered, and supported necessary hardware and software for LAN and WAN, including hubs, switches, routers, firewalls, network monitoring tools, configuration backup tools, network elements, andwiring to provide an optimized and reliable environment to run production & development applications",
        "Troubleshot network infrastructure and implemented any necessary changes on a regular basis","Assisted with training and orientation of new staff members",
        "Managed inventory and lease returns of all network devices"],
       	"keyachievements": ["Worked part-time while studying full-time in networking and achieved cumulative GPA of 3.5","Developed Python script to automate reverse DNS lookup process, which streamlined the process from days to minutes",
       	"Enhanced centralized security and access policy by implementing secure access control system","Optimized over 80% of total WAN traffic by assisting in deploying WAN optimizers between sites"
       	," Enhanced network security by implementing BPDU Guard on applicable switch interface"]
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
       	,"Designed a separate out-of-band network to manage & monitor all Canada-wide DMZ switches","Assisted in migrating & training 200+ users to SSL VPN","Advanced core banking infrastructure by upgrading 100 Mbps switches to 1 Gbps"]
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
            $("#workExperience .section").append(HTMLworkDetails);
            $("#work-section .details:last").append(formattedEmployerTitle);
            $("#work-section .details:last").append(formattedLocation);
            $("#work-section .details:last").append(formatteddates);
            //Adding Key-Achievements section only for Tangerine Bank experience.
            if (work["jobs"][job].employer == "Tangerine Bank") {
                $("#work-section .details:last").append(HTMLresponsibility);
                $("#work-section .details:last").append(HTMLkeyachievements);
            }
            else {
                $("#work-section .details:last").append(HTMLresponsibility);
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
}

//Projects Variable - Encapsulating projects data and display function.
var projects = {
	"project": [
    {
        "title": "Create and Analyze a Social Network",
        "date": "July 2014",
        "description": "At the end of the course a set of relationships (i.e. strings of phrases like “Dave likes Andy, Kathleen and Kristy”) were given and we had to use our new computer science skills to organize these relationships into a social network.",
        "skills": "Python, Github and Computer Science Fundamentals such as Algorithms, Loops, Recursion, Conditionals, Recursion, Lists, Dictionary, Tuples etc",
        "website": "https://github.com/reversearrow/CS101/blob/master/socialnetwork.py"
    },
    {
        "title": "Portfolio Mockup to Web Site",
        "date": "March 2015",
        "description": "Took a design mockup as a PDF-file and replicated that design in HTML and CSS.",
        "skills": "HTML, CSS, Wireframing and Bootstrap, Github",
        "website": "https://reversearrow.github.io/Portfolio-Mockup"
    },
    {
        "title": "Build a Search Engine",
        "date": "June 2014",
        "description": "Throughout the course, we built a search engine and learned about and produced key search engine components including a crawler, an index and a page rank algorithm. ",
        "skills": "Python, Github and Computer Science Fundamentals such as Algorithms, Loops, Recursion, Conditionals, Recursion, Lists, Dictionary, Tuples etc.",
        "website": "https://github.com/reversearrow/CS101/blob/master/crawl.py"
    },
    {
        "title": "Interactive Resume",
        "date": "May 2015",
        "description": "Built an interactive resume using HTML, CSS, Javscript and JQuery.",
        "skills": "HTML, CSS, Javascript, JQuery, Bootstrap, Github, JSON",
        "website": "#"
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
        $("#projects .section:last").append(HTMLprojectDetails);
        $("#project-section .details:last").append(formattedLinkTitle);
        $("#project-section .details:last").append(formattedDate);
        $("#project-section .details:last").append(formattedDescription);
        $("#project-section .details:last").append(formattedskillsGained);
        }
    }
}

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
}

//Certification Variable - Encapsulating certification data and display function.
var certifications = {
    "certificates": [
    {
        "name": "Cisco Certified Network Associate - R&S",
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
        "name": "Introduction to Computer Science",
        "date": "July 2014 - Present",
        "authority": "Udacity",
        "License": "Udacity",
        "website": "https://www.udacity.com/course/intro-to-computer-science--cs101"
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
}

// Map Variable - Encapsulating display function.
var map = {
    "display": function() {
        $("#mapDiv").append(googleMap);
    }
}

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
}

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

//function to log clicks
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

//Calling all display functions
bio.display();
work.display();
projects.display();
education.display();
certifications.display();
map.display();
footer.display();
